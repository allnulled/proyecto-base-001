(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['NwtSettings'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['NwtSettings'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {
  
  const NwtSettings = class {

    

  };

  return NwtSettings;

});