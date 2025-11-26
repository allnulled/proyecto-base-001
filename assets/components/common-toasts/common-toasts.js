Vue.component("CommonToasts", {
  template: $template,
  props: {},
  data() {
    return {
      activeToasts: [],
    };
  },
  methods: {
    assertion(condition, errorMessage) {
      if(!condition) {
        throw new Error(errorMessage);
      }
    },
    validateDialog(toastDefinition) {
      this.assertion(typeof toastDefinition === "object", `Parameter «toastDefinition» must be an object on «CommonToasts.prototype.validateDialog»`);
      this.assertion(typeof toastDefinition.title === "string", `Parameter «toastDefinition.title» must be a string on «CommonToasts.prototype.validateDialog»`);
      this.assertion(typeof toastDefinition.template === "string", `Parameter «toastDefinition.template» must be a string on «CommonToasts.prototype.validateDialog»`);
      toastDefinition.methods = Object.assign(toastDefinition.methods || {}, {});
      console.log(toastDefinition);
    },
    open(toastDefinition) {
      try {
        // this.validateDialog(toastDefinition);
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