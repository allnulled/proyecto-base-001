Vue.component("MainWindow", {
  template: $template,
  props: {},
  data() {
    return {
      toastCounter: 0
    };
  },
  mounted() {
    console.log("Main window mounted!");
    this.$refs.btn1.click();
  }
})