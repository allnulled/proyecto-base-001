/**
 * 
 * # Nwt Utils API
 * 
 * API global de utilidades residuales.
 * 
 * ## Exposición
 * 
 * La API se expone a través de:
 * 
 * ```js
 * NwtUtils
 * NwtFramework.Utils
 * Vue.prototype.$nwt.Utils
 * ```
 * 
 * ## Ventajas
 * 
 * Permite hacer algunas cosas como:
 * 
 * ```js
 * NwtUtils.jsonify({circular JSON is accepted too});
 * ```
 * 
 */
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

    static jsonify(obj, space = 2) {
      const seen = new WeakSet();
      return JSON.stringify(obj, function (key, value) {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return undefined; // "[Circular]";
          }
          seen.add(value);
        }
        return value;
      }, space);
    }

  };

  return NwtUtils;

});