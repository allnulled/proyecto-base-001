(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['NwtTester'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['NwtTester'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {
  
  const NwtTester = class {

    static default = this;

  };

  return NwtTester;

});