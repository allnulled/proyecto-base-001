(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['NwtAutocenter'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['NwtAutocenter'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const NwtAutocenter = class {
    static centerElement(el) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Obtener tamaño real del elemento
      const rect = el.getBoundingClientRect();
      const left = (w - rect.width) / 2;
      const top = (h - rect.height) / 2;
      el.style.position = "fixed";
      el.style.left = left + "px";
      el.style.top = top + "px";
    }
  };

  Vue.directive("autocenter", {
    inserted(el) {
      // Centrar al insertar en el DOM
      NwtAutocenter.centerElement(el);
    },
    unbind(el) {
      // Limpieza del listener
      if (el.centerDialogHandler) {
        window.removeEventListener("resize", el.centerDialogHandler);
        delete el.centerDialogHandler;
      }
    }
  });

  return NwtAutocenter;

});