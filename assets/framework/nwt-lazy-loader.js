(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['NwtLazyLoader'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['NwtLazyLoader'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {
  
  const NwtLazyLoader = class {

    static validateLazyLoadable(lazyLoadable) {
      assertion(typeof lazyLoadable === "object", "Parameter «lazyLoadable» must be an object on «NwtLazyLoader»");
      assertion(typeof lazyLoadable.id === "string", "Parameter «lazyLoadable.id» must be an string on «NwtLazyLoader»");
      assertion(typeof lazyLoadable.url === "string", "Parameter «lazyLoadable.url» must be an string on «NwtLazyLoader»");
      assertion(typeof lazyLoadable.type === "string", "Parameter «lazyLoadable.type» must be an string on «NwtLazyLoader»");
      assertion(["scriptSrc", "linkStylesheet"].indexOf(lazyLoadable.type) !== -1, "Parameter «lazyLoadable.type» must be a known type on «NwtLazyLoader»");
      assertion(typeof lazyLoadable.checker === "function", "Parameter «lazyLoadable.checker» must be an function on «NwtLazyLoader»");
    }

    static lazyLoad(lazyLoadable) {
      this.validateLazyLoadable(lazyLoadable);
      const isLoaded = lazyLoadable.checker();
      if(isLoaded) {
        return false;
      }
      if(lazyLoadable.type === "scriptSrc") {
        return NwtImporter.scriptSrc(lazyLoadable.url);
      }
      if(lazyLoadable.type === "linkStylesheet") {
        return NwtImporter.linkStylesheet(lazyLoadable.url);
      }
    }

  };

  return NwtLazyLoader;

});