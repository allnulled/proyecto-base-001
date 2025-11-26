/**
 * 
 * # Nwt Global API
 * 
 * Está expuesta en:
 * 
 * ```js
 * Object.assign(NwtFramework, {
 *   // BOOT
 *   settings: NwtSettings,
 *   timer: NwtTimer,
 *   utils: NwtUtils,
 *   asserter: NwtAsserter,
 *   randomizer: NwtRandomizer,
 *   tester: NwtTester,
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
  
  Object.assign(NwtFramework, {
    // BOOT
    settings: NwtSettings,
    timer: NwtTimer,
    utils: NwtUtils,
    asserter: NwtAsserter,
    randomizer: NwtRandomizer,
    tester: NwtTester,
    // PACK
  });

})();