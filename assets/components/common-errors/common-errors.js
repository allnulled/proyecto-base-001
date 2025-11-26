Vue.component("CommonErrors", {
  template: $template,
  props: {},
  data() {
    return {
      activeErrors: [],
    };
  },
  methods: {
    assertion(condition, errorMessage) {
      if(!condition) {
        throw new Error(errorMessage);
      }
    },
    validateDialog(errorDefinition) {
      this.assertion(typeof errorDefinition === "object", `Parameter «errorDefinition» must be an object on «CommonErrors.prototype.validateDialog»`);
      this.assertion(typeof errorDefinition.title === "string", `Parameter «errorDefinition.title» must be a string on «CommonErrors.prototype.validateDialog»`);
      this.assertion(typeof errorDefinition.template === "string", `Parameter «errorDefinition.template» must be a string on «CommonErrors.prototype.validateDialog»`);
      errorDefinition.methods = Object.assign(errorDefinition.methods || {}, {});
      console.log(errorDefinition);
    },
    showError(error) {
      if(error !== false) {
        console.log(error);
      }
      this.activeErrors.push(error);
    },
    open(errorDefinition) {
      try {
        // this.validateDialog(errorDefinition);
        this.activeErrors.push(errorDefinition);
      } catch (error) {
        this.showError(error);
      }
    },
    closeErrorByIndex(errorIndex) {
      this.activeErrors.splice(errorIndex, 1);
    }
  },
  mounted() {
    console.log("[*] CommonErrors mounted!");
    window.CommonErrors = this;
    Vue.prototype.$errors = this;
  }
})