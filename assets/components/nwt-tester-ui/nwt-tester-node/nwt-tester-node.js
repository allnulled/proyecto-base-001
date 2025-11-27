Vue.component("NwtTesterNode", {
  template: $template,
  props: {
    node: {
      type: Object,
      required: true,
    }
  },
  data() {
    trace("NwtTesterNode.data");
    return {};
  },
  mounted() {
    
  }
});
