Vue.component("MainWindow", {
  template: $template,
  props: {},
  data() {
    return {

    };
  },
  mounted() {
    console.log("Main window mounted!");
    this.$refs.btn1.click();
  }
})