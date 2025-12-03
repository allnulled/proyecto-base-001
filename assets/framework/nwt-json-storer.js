/**
 * 
 * # Nwt Json Storer API
 * 
 * La `Nwt Json Storer API` consiste en la gestión de 1 JSON para PC con **filesystem** y para navegador con **localStorage**.
 * 
 * ## Exposición
 * 
 * La API se expone en forma de clase con:
 * 
 * ```js
 * NwtJsonStorer
 * NwtFramework.JsonStorer
 * Vue.prototype.$nwt.JsonStorer
 * ```
 * 
 * ## Ventajas
 * 
 * ```js
 * NwtJsonStorer.isNode // Boolean
 * NwtJsonStorer.fs // Object | null
 * const storer = NwtJsonStorer.create({
 *   file: "/path/to/your/file.json",
 *   storageId: "JSON_STORER_FOR_YOUR_APP_IN_LS",
 * });
 * await storer.initialize(key, value);
 * await storer.save();
 * await storer.load();
 * await storer.get(key, defaultValue);
 * await storer.set(key, value);
 * await storer.delete(key);
 * ```
 * 
 */
(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['NwtJsonStorer'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['NwtJsonStorer'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const NwtJsonStorer = class {

    static fs = NwtEnvironment.isNode ? require("fs").promises : null;

    static create(...args) {
      return new this(...args);
    }

    constructor(options = {}) {
      this.$options = Object.assign({}, options);
      this.$file = this.$options.file || null;
      this.$storageId = this.$options.storageId || null;
      this.$data = {};
    }

    async saveInFilesystem() {
      if (!this.$file) return false;
      const txt = JSON.stringify(this.$data, null, 2);
      await fs.writeFile(this.$file, txt, "utf8");
      return true;
    }

    async loadInFilesystem() {
      if (!this.$file) return false;
      try {
        const txt = await fs.readFile(this.$file, "utf8");
        this.$data = JSON.parse(txt);
        return true;
      } catch (err) {
        this.$data = {};
        return false;
      }
    }

    async saveInLocalStorage() {
      if (!this.$storageId) return false;
      if (typeof localStorage === "undefined") return false;
      localStorage.setItem(this.$storageId, JSON.stringify(this.$data));
      return true;
    }

    async loadInLocalStorage() {
      if (!this.$storageId) return false;
      if (typeof localStorage === "undefined") return false;
      const txt = localStorage.getItem(this.$storageId);
      if (!txt) {
        this.$data = {};
        return false;
      }
      try {
        this.$data = JSON.parse(txt);
        return true;
      } catch (err) {
        this.$data = {};
        return false;
      }
    }

    async initialize(key, value = undefined) {
      await this.load();
      if (!(key in this.$data)) {
        if (value !== undefined) {
          this.$data[key] = value;
          await this.save();
        }
      }
      return this.$data[key];
    }

    async save() {
      if (this.constructor.isNode) return this.saveInFilesystem();
      if (!this.constructor.isNode) return this.saveInLocalStorage();
      return false;
    }

    async load() {
      if (this.constructor.isNode) return this.loadInFilesystem();
      if (!this.constructor.isNode) return this.loadInLocalStorage();
      this.$data = {};
      return false;
    }

    async get(key, defaultValue = undefined) {
      await this.load();
      if (key in this.$data) return this.$data[key];
      return defaultValue;
    }

    async set(key, value = undefined) {
      await this.load();
      this.$data[key] = value;
      await this.save();
      return value;
    }

    async delete(key) {
      await this.load();
      delete this.$data[key];
      await this.save();
    }

  };

  return NwtJsonStorer;

});