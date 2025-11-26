/**
 * 
 * # Nwt Toasts API
 * 
 * Está expuesta en las globales:
 * 
 * ```js
 * CommonToasts
 * NwtToasts
 * Vue.prototype.$errors
 * ```
 * 
 * ## Mostrar un error
 * 
 * ```js
 * CommonToasts.open({
 *   title: "Titulo",
 *   text: "texto",
 *   footer: "Pie de texto opcional"
 * });
 * ```
 * 
 */
Vue.component("CommonToasts", {
  template: $template,
  props: {},
  data() {
    return {
      activeToasts: [],
    };
  },
  methods: {
    expandToastDefinition(userToastDefinition) {
      const toastDefinition = {};
      toastDefinition.title = userToastDefinition.title;
      toastDefinition.text = userToastDefinition.text;
      toastDefinition.footer = userToastDefinition.footer || "";
      return toastDefinition;
    },
    validateToast(userToastDefinition) {
      const toastDefinition = this.expandToastDefinition(userToastDefinition);
      assertion(typeof toastDefinition === "object", `Parameter «toastDefinition» must be an object on «CommonToasts.prototype.validateToast»`);
      assertion(typeof toastDefinition.title === "string", `Parameter «toastDefinition.title» must be a string on «CommonToasts.prototype.validateToast»`);
      assertion(typeof toastDefinition.text === "string", `Parameter «toastDefinition.text» must be a string on «CommonToasts.prototype.validateToast»`);
      assertion(typeof toastDefinition.footer === "string", `Parameter «toastDefinition.footer» must be a string on «CommonToasts.prototype.validateToast»`);
    },
    open(toastDefinition) {
      try {
        this.validateToast(toastDefinition);
        this.activeToasts.push(toastDefinition);
      } catch (error) {
        this.$errors.showError(error);
      }
    },
    closeToastByIndex(toastIndex) {
      this.activeToasts.splice(toastIndex, 1);
    }
  },
  mounted() {
    console.log("[*] CommonToasts mounted!");
    window.CommonToasts = this;
    Vue.prototype.$toasts = this;
  }
})