/**
 * 
 * # Nwt Settings API
 * 
 * API para gestionar configuraciones globalmente.
 * 
 * ## Exposición
 * 
 * La API se expone a través de:
 * 
 * ```js
 * NwtSettings
 * NwtFramework.Settings
 * Vue.prototype.$nwt.Settings
 * ```
 * 
 * ## Ventajas
 * 
 * De momento, no hace nada.
 * 
 */

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