(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['NwtAsserter'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['NwtAsserter'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const NwtAsserter = class {

    static AssertionError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "AssertionError";
      }
    }

    static assertion(condition, errorMessage) {
      if(!condition) {
        const assertionError = new this.AssertionError(errorMessage);
        this.onAssertionError(assertionError, errorMessage, condition);
        throw assertionError;
      }
    }

    static exportAsGlobals() {
      if (typeof window !== 'undefined') {
        window['assertion'] = this.assertion.bind(this);
      }
      if (typeof global !== 'undefined') {
        global['assertion'] = this.assertion.bind(this);
      }
    }

    static setErrorHandler(callback) {
      this.onAssertionError = callback;
    }

    static onAssertionError(errorMessage, condition) {
      console.log("Aserción falló:");
      console.log("Mensaje de aserción fallida:", errorMessage);
    }

  }

  NwtAsserter.exportAsGlobals();

  return NwtAsserter;

});