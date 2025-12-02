/**
 * 
 * # Nwt Framework API
 * 
 * API de acceso global.
 * 
 * ## Exposición
 * 
 * Está expuesta en:
 * 
 * ```js
 * NwtFramework
 * Vue.prototype.$nwt
 * ```
 * ## Ventajas
 * 
 * Dejar accesible desde 1 objeto todas las APIs de Nwt.
 * 
 * Se conforma a partir de:
 * 
 * ```js
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
 * 
 */
(function () {
  
  trace("Packing NwtFramework");
  Object.assign(NwtFramework, {
    // BOOT
    Asserter: NwtAsserter,
    Globalizer: NwtGlobalizer,
    Importer: NwtImporter,
    LazyLoader: NwtLazyLoader,
    ProcessManager: NwtProcessManager,
    Process: NwtProcess,
    ProgressBar: NwtProgressBar,
    Randomizer: NwtRandomizer,
    Settings: NwtSettings,
    Tester: NwtTester,
    Timer: NwtTimer,
    Utils: NwtUtils,
    Tracer: NwtTracer,
    // Injected later:
    Errors: null,
    Dialogs: null,
    Toasts: null,
    // PACK
  });

})();