Vue.component("NwtTesterViewer", {
  template: $template,
  props: {
    title: {
      type: String,
      default: () => "",
    },
    tester: {
      type: Object,
      required: true
    }
  },

  data() {
    trace("NwtTesterViewer.data");
    return {
      
    };
  },

  methods: {
    
  },

  mounted() {
    trace("NwtTesterViewer.mounted");
    
  }

});
