(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['NwtUtils'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['NwtUtils'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {
  
  const NwtUtils = class {

  };

  return NwtUtils;

});