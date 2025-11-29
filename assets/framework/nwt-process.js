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
      this.$parent = options.parent || null;
      this.$children = [];
      this.$createdAt = new Date();
      this._addToProcessManager();
      this._addToParentProcess();
    }

    _addToProcessManager() {
      this.$manager.$list.push(this);
    }

    _addToParentProcess() {
      if(this.$parent) {
        this.$parent.$children.push(this);
      }
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