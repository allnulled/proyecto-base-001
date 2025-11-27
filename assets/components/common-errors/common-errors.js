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
    trace("CommonErrors.data");
    return {
      currentDate: new Date(),
      stackSplitter: new RegExp("[\r\n\t ]+at[\r\n\t ]+", "g"),
      activeErrors: [],
      selectedError: -1,
    };
  },
  methods: {
    abbreviateMessage(message) {
      trace("CommonErrors.methods.abbreviateMessage");
      if(message.length > 20) {
        return message.substr(0,20) + "...";
      }
      return message;
    },
    validateError(errorDefinition) {
      trace("CommonErrors.methods.validateError");
      assertion(typeof errorDefinition === "object", `Parameter «errorDefinition» must be an object on «CommonErrors.prototype.validateError»`);
      assertion(typeof errorDefinition.name === "string", `Parameter «errorDefinition.name» must be a string on «CommonErrors.prototype.validateError»`);
      assertion(typeof errorDefinition.message === "string", `Parameter «errorDefinition.message» must be a string on «CommonErrors.prototype.validateError»`);
      assertion(typeof errorDefinition.stack === "string", `Parameter «errorDefinition.stack» must be a string on «CommonErrors.prototype.validateError»`);
    },
    showError(error) {
      trace("CommonErrors.methods.showError");
      this.validateError(error);
      this.activeErrors.push(error);
    },
    closeErrorByIndex(errorIndex) {
      trace("CommonErrors.methods.closeErrorByIndex");
      this.activeErrors.splice(errorIndex, 1);
      if(this.selectedError >= this.activeErrors.length) {
        this.selectedError = this.activeErrors.length - 1;
      }
    },
    closeAllErrors() {
      trace("CommonErrors.methods.closeAllErrors");
      this.activeErrors = [];
    },
    copyErrorToClipboard(error) {
      trace("CommonErrors.methods.copyErrorToClipboard");
      const text = `Traza completa del error:\n\n${ error.name } » ${ error.message }\n\n${ error.stack }`;
      navigator.clipboard.writeText(text);
    },
    copyAllErrorsToClipboard() {
      trace("CommonErrors.methods.copyAllErrorsToClipboard");
      let all = "";
      for(let index=0; index<this.activeErrors.length; index++) {
        const error = this.activeErrors[index];
        const text = `Traza completa del error ${ index + 1} de ${ this.activeErrors.length }:\n\n${ error.name } » ${ error.message }\n\n${ error.stack }`;
        all += text + "\n\n";
      }
      all = all.trimEnd();
      navigator.clipboard.writeText(all);
    }
  },
  mounted() {
    trace("CommonErrors.mounted");
    NwtGlobalizer.exportTo("CommonErrors", this);
    NwtGlobalizer.exportTo("NwtErrors", this);
    Vue.prototype.$errors = this;
    assertion.setErrorCallback(error => this.showError(error))
  }
})

