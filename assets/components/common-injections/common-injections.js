/**
 * 
 * # Nwt Common Injections API
 * 
 * API para inyecciones globales. Se inyecta 1 componente global, `<common-injections />`.
 * 
 * ## Exposición
 * 
 * Esta API no se expone, solo se inyecta en el DOM.
 * 
 * Pero se hace a través del componente vue2 `CommonInjections`.
 * 
 * ## Ventajas
 * 
 * - Función 1 / `injectTouchability`
 *    - Hace que los eventos de touch (móvil) funcionen también como eventos click (PC) sin tener que cambiar el código.
 *    - Esto se consigue con una inyección de eventos del DOM a `document` en el paso del mounted.
 * 
 * 
 */
Vue.component("CommonInjections", {
  template: $template,
  props: {},
  data() {
    return {};
  },
  methods: {

    injectTouchability() {
      const toMouse = function (e, type) {
        return new MouseEvent(type, {
          bubbles: true,
          cancelable: true,
          composed: true,
          clientX: e.touches[0] ? e.touches[0].clientX : e.changedTouches[0].clientX,
          clientY: e.touches[0] ? e.touches[0].clientY : e.changedTouches[0].clientY,
          screenX: e.touches[0] ? e.touches[0].screenX : e.changedTouches[0].screenX,
          screenY: e.touches[0] ? e.touches[0].screenY : e.changedTouches[0].screenY,
          pageX: e.touches[0] ? e.touches[0].pageX : e.changedTouches[0].pageX,
          pageY: e.touches[0] ? e.touches[0].pageY : e.changedTouches[0].pageY,
          button: 0
        });
      };
      const fire = function (type, e) {
        const evt = toMouse(e, type);
        e.target.dispatchEvent(evt);
      };
      document.addEventListener("touchstart", e => fire("mousedown", e));
      document.addEventListener("touchmove", e => fire("mousemove", e));
      document.addEventListener("touchend", e => fire("mouseup", e));
    }

  },
  watch: {},
  mounted() {
    this.injectTouchability();
  }
});