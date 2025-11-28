# Nwt Framework API

API de acceso global.

## Exposición

Está expuesta en:

```js
NwtFramework
Vue.prototype.$nwt
```
## Ventajas

Dejar accesible desde 1 objeto todas las APIs de Nwt.

Se conforma a partir de:

```js
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
  Tester: NwtTester,
  Errors: NwtErrors,
  Dialogs: NwtDialogs,
  Toasts: NwtToasts,
  // PACK
});
```

