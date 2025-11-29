/**
 * 
 * # Nwt Box Viewer API / Componente Vue2
 * 
 * La Nwt Box Viewer API permite visualizar un componente pasándole directamente una plantilla Vue2 como parámetro.
 * 
 * ## Exposición
 * 
 * La API se expone a través del componente Vue2:
 * 
 * ```js
 * Vue.options.components.NwtBoxViewer
 * ```
 * 
 * ## Ventajas
 * 
 * La API permite cosas como:
 * 
 * ```html
 * <nwt-box-viewer :source="<div>Aquí debe ir HTML para Vue2</div>" />
 * ```
 * 
 * Donde `source` tiene que ser un string válido como plantilla para un componente Vue2 anónimo.
 * 
 * 
 */
Vue.component("NwtBoxViewer", {
  template: $template,
  props: {
    component: {
      type: Object,
      default: () => "",
    }
  },

  data() {
    trace("NwtBoxViewer.data");
    return {
      componentId: "AnonymousComponent" + NwtRandomizer.fromAlphabet(5),
    };
  },

  methods: {
    validateComponent() {
      this.component.name = this.componentId;
      this.component.tagName = this.componentId.replace(/^AnonymousComponent/g, "anonymous-component");
      if(!this.component.props) {
        this.component.props = {};
      }
      if(!this.component.methods) {
        this.component.methods = {};
      }
      if(!this.component.data) {
        this.component.data = function() {
          return {};
        };
      }
      assertion(typeof this.component.name === "string", "Parameter «component.name» must be a string on «NwtBoxViewer.methods.validateComponent»");
      assertion(typeof this.component.template === "string", "Parameter «component.template» must be a string on «NwtBoxViewer.methods.validateComponent»");
      assertion(typeof this.component.props === "object", "Parameter «component.props» must be an object on «NwtBoxViewer.methods.validateComponent»");
      assertion(typeof this.component.methods === "object", "Parameter «component.methods» must be an object on «NwtBoxViewer.methods.validateComponent»");
      assertion(typeof this.component.data === "function", "Parameter «component.data» must be a function on «NwtBoxViewer.methods.validateComponent»");
    },
    registerComponent() {
      Vue.component(this.componentId, this.component);
    },
    unregisterComponent() {
      delete Vue.options.components[this.componentId];
    }
  },

  created() {
    this.validateComponent();
    this.registerComponent();
  },

  mounted() {
    trace("NwtBoxViewer.mounted");
  },

  unmounted() {
    this.unregisterComponent();
  }

});
