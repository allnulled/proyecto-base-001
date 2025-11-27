(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['NwtTracer'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['NwtTracer'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {
  
  const NwtTracer = class {

    static default = this;

    constructor(id, isActivated = false) {
      this.id = id;
      this.isActivated = isActivated;
    }

    activate() {
      this.isActivated = true;
    }

    deactivate() {
      this.isActivated = false;
    }

    trace(message, args = []) {
      if(this.isActivated) {
        console.log(`[trace][${this.id}] ${message}`, args);
      }
    }

    createTrace() {
      return this.trace.bind(this);
    }

    exportToGlobal() {
      if(typeof window !== "undefined") {
        window.trace = this.createTrace();
      }
      if(typeof global !== "undefined") {
        global.trace = this.createTrace();
      }
    }

  };

  NwtTracer.global = new NwtTracer("global", true);

  NwtTracer.global.exportToGlobal();

  return NwtTracer;

});