/**
 * 
 * # Nwt Global API
 * 
 * Está expuesta en:
 * 
 * ```js
 * trace("Packing NwtFramework");
 * Object.assign(NwtFramework, {
 *   // BOOT
 *   Settings: NwtSettings,
 *   Timer: NwtTimer,
 *   Utils: NwtUtils,
 *   Asserter: NwtAsserter,
 *   Randomizer: NwtRandomizer,
 *   Importer: NwtImporter,
 *   LazyLoader: NwtLazyLoader,
 *   Globalizer: NwtGlobalizer,
 *   Tester: NwtTester,
 *   Errors: NwtErrors,
 *   Dialogs: NwtDialogs,
 *   Toasts: NwtToasts,
 *   // PACK
 * });
 * ```
 * 
 * También puede encontrarse en:
 * 
 * ```js
 * Vue.prototype.$nwt
 * ```
 * 
 */
(function () {
  
  trace("Packing NwtFramework");
  Object.assign(NwtFramework, {
    // BOOT
    Settings: NwtSettings,
    Timer: NwtTimer,
    Utils: NwtUtils,
    Asserter: NwtAsserter,
    Randomizer: NwtRandomizer,
    Importer: NwtImporter,
    LazyLoader: NwtLazyLoader,
    Globalizer: NwtGlobalizer,
    // Injected later:
    Tester: null,
    Errors: null,
    Dialogs: null,
    Toasts: null,
    // PACK
  });

})();