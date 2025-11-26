Vue.component("CommonDialogs", {
  template: $template,
  props: {},
  data() {
    return {
      activeDialogs: [],
    };
  },
  methods: {
    assertion(condition, errorMessage) {
      if(!condition) {
        throw new Error(errorMessage);
      }
    },
    validateDialog(dialogDefinition) {
      this.assertion(typeof dialogDefinition === "object", `Parameter «dialogDefinition» must be an object on «CommonDialogs.prototype.validateDialog»`);
      this.assertion(typeof dialogDefinition.title === "string", `Parameter «dialogDefinition.title» must be a string on «CommonDialogs.prototype.validateDialog»`);
      this.assertion(typeof dialogDefinition.template === "string", `Parameter «dialogDefinition.template» must be a string on «CommonDialogs.prototype.validateDialog»`);
      dialogDefinition.methods = Object.assign(dialogDefinition.methods || {}, {});
      console.log(dialogDefinition);
    },
    open(dialogDefinition) {
      try {
        this.validateDialog(dialogDefinition);
        this.activeDialogs.push(dialogDefinition);
      } catch (error) {
        this.$toasts.showError(error);
      }
    },
    closeDialogByIndex(dialogIndex) {
      this.activeDialogs.splice(dialogIndex, 1);
    }
  },
  mounted() {
    console.log("[*] CommonDialogs mounted!");
    window.CommonDialogs = this;
    Vue.prototype.$dialogs = this;
  }
})