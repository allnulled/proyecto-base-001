/**
 * 
 * # Nwt Errors API
 * 
 * Está expuesta en las globales:
 * 
 * ```js
 * CommonErrors
 * NwtErrors
 * Vue.prototype.$errors
 * ```
 * 
 * ## Mostrar un error
 * 
 * ```js
 * CommonErrors.showError(new Error("Cualquier cosa"));
 * ```
 * 
 */
Vue.component("CommonErrors", {
  template: $template,
  props: {},
  data() {
    return {
      currentDate: new Date(),
      stackSplitter: new RegExp("[\r\n\t ]+at[\r\n\t ]+", "g"),
      activeErrors: [],
    };
  },
  methods: {
    validateError(errorDefinition) {
      assertion(typeof errorDefinition === "object", `Parameter «errorDefinition» must be an object on «CommonErrors.prototype.validateError»`);
      assertion(typeof errorDefinition.name === "string", `Parameter «errorDefinition.name» must be a string on «CommonErrors.prototype.validateError»`);
      assertion(typeof errorDefinition.message === "string", `Parameter «errorDefinition.message» must be a string on «CommonErrors.prototype.validateError»`);
      assertion(typeof errorDefinition.stack === "string", `Parameter «errorDefinition.stack» must be a string on «CommonErrors.prototype.validateError»`);
      console.log(errorDefinition);
    },
    showError(error) {
      this.validateError(error);
      this.activeErrors.push(error);
    },
    closeErrorByIndex(errorIndex) {
      this.activeErrors.splice(errorIndex, 1);
    },
    copyErrorToClipboard(error) {
      const text = `Traza completa del error:\n\n${ error.name } » ${ error.message }\n\n${ error.stack }`;
      console.log(text);
      navigator.clipboard.writeText(text);
    }
  },
  mounted() {
    console.log("[*] CommonErrors mounted!");
    window.CommonErrors = this;
    window.NwtErrors = this;
    Vue.prototype.$errors = this;
    assertion.setErrorCallback(error => this.showError(error))
  }
})

