/**
 * 
 * # App Root API
 * 
 * Sirve como ejemplo de API de aplicación.
 * 
 * Funcionalmente, solo deja acceso a `AppRoot.$component`.
 * 
 */
(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['AppRoot'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['AppRoot'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {
  
  const AppRoot = class {

    static $component = null;

    static initialize(component) {
      this.$component = component;
    }

  };

  return AppRoot;

});