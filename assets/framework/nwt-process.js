(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['NwtProcess'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['NwtProcess'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const NwtProcess = class {

    static create(...args) {
      return new this(...args);
    }

    constructor(options = {}) {
      this.$id = (options.id || "Sin título") + " - " + NwtRandomizer.fromAlphabet(10);
      this.$manager = options.manager || null;
      delete options.manager;
      this.$parent = options.parent || null;
      delete options.parent;
      this.$children = [];
      this.$createdAt = new Date();
      this.$closedAt = null;
      Object.assign(this, options);
      this._addToProcessManager();
      this._addToParentProcess();
    }

    close() {
      if (this.$closedAt) return; // Ya cerrado, sin repetir
      // 1. Cerrar hijos primero
      for (const child of [...this.$children]) {
        child.close();
      }
      this.$children.length = 0;
      // 2. Quitarse del padre
      if (this.$parent) {
        const arr = this.$parent.$children;
        const i = arr.indexOf(this);
        if (i !== -1) arr.splice(i, 1);
      }
      // 3. Quitarse del manager
      if (this.$manager) {
        const arr = this.$manager.$list;
        const i = arr.indexOf(this);
        if (i !== -1) arr.splice(i, 1);
      }
    }

    _addToProcessManager() {
      this.$manager.$list.push(this);
    }

    _addToParentProcess() {
      if (this.$parent) {
        this.$parent.$children.push(this);
      }
    }

    expand(obj) {
      return Object.assign(this, obj);
    }

    createSubprocess() {
      return new this({
        manager: this.$manager,
        parent: this,
      });
    }

  };

  return NwtProcess;

});