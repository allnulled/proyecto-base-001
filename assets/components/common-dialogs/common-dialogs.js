/**
 * 
 * # Nwt Dialogs API
 * 
 * ## Exposición
 * 
 * Está expuesta en las globales:
 * 
 * ```js
 * CommonDialogs
 * NwtDialogs
 * NwtFramework.Dialogs
 * Vue.prototype.$nwt.Dialogs
 * Vue.prototype.$dialogs
 * ```
 * 
 * ## Crear un diálogo con formulario y extraer la respuesta
 * 
 * ```js
 * const respuesta = await CommonDialogs.open({
 *   title: "Formulario simple",
 *   template: `
 *     <div>
 *       <input type="text" v-model="user" />
 *       <input type="password" v-model="password" />
 *       <hr/>
 *       <button v-on:click="() => accept({ user, password })">Aceptar</button>
 *       <button v-on:click="cancel">Cancelar</button>
 *     </div>
 *   `,
 *   factory: {
 *     data: {
 *       user: "",
 *       password: "",
 *     }
 *   }
 * });
 * ```
 * 
 */
Vue.component("CommonDialogs", {
  template: $template,
  props: {},
  data() {
    trace("CommonDialogs.data");
    return {
      processManager: NwtProcessManager.dialogs,
    };
  },
  methods: {
    expandDialogDefinition(baseDialog) {
      trace("CommonDialogs.methods.expandDialogDefinition");
      const finalDialog = {};
      const dialogProcess = NwtProcessManager.dialogs.createProcess({ dialog: finalDialog });
      finalDialog.factory = {};
      Expand_name: {
        finalDialog.factory.name = baseDialog.name || "AnonymousDialog" + NwtRandomizer.fromAlphabet(5);
      }
      Expand_props: {
        finalDialog.factory.props = (function () {
          const userProps = baseDialog.props || {};
          const defaultProps = {
            // Default props of dialog component:
          };
          return Object.assign({}, defaultProps, userProps);
        })();
      }
      Expand_data: {
        finalDialog.factory.data = (() => {
          const userData = baseDialog.data || {};
          assertion(typeof userData === "object", "Parameter «data» in dialogs must be an object or omitted on «CommonDialogs.methods.expandDialogDefinition»");
          const dialogState = Promise.withResolvers();
          finalDialog.state = dialogState;
          return function () {
            dialogProcess.dialog = this;
            const defaultData = {
              // Default data of dialog component:
              value: undefined,
              state: dialogState,
              deepness: 100,
              // Inject process in data:
              ownProcess: dialogProcess,
            };
            const finalData = Object.assign({}, defaultData, userData);
            return finalData;
          };
        })();
      }
      Expand_methods: {
        finalDialog.factory.methods = (() => {
          const userMethods = baseDialog.methods || {};
          const defaultMethods = {
            // Default methods of dialog component:
            accept(userValue = undefined) {
              if (typeof userValue !== "undefined") {
                this.value = userValue;
              }
              this.state.resolve(this.value);
              return this.state.promise;
            },
            cancel(error) {
              this.state.reject(error);
              return this.state.promise;
            }
          };
          const finalMethods = Object.assign({}, userMethods, defaultMethods);
          return finalMethods;
        })();
      }
      Expand_title: {
        finalDialog.title = baseDialog.title || "Sin título";
      }
      Expand_footer: {
        finalDialog.footer = baseDialog.footer || "";
      }
      Expand_template: {
        finalDialog.template = baseDialog.template;
        finalDialog.factory.template = baseDialog.template;
      }
      return finalDialog;
    },
    validateDialog(userDialogDefinition) {
      trace("CommonDialogs.methods.validateDialog");
      const dialogDefinition = this.expandDialogDefinition(userDialogDefinition);
      assertion(typeof dialogDefinition === "object", `Parameter «dialogDefinition» must be an object on «CommonDialogs.prototype.validateDialog»`);
      assertion(typeof dialogDefinition.title === "string", `Parameter «dialogDefinition.title» must be a string on «CommonDialogs.prototype.validateDialog»`);
      assertion(typeof dialogDefinition.template === "string", `Parameter «dialogDefinition.template» must be a string on «CommonDialogs.prototype.validateDialog»`);
      assertion(typeof dialogDefinition.footer === "string", `Parameter «dialogDefinition.footer» must be an string on «CommonDialogs.prototype.validateDialog»`);
      assertion(typeof dialogDefinition.factory === "object", `Parameter «dialogDefinition.factory» must be an object on «CommonDialogs.prototype.validateDialog»`);
      assertion(typeof dialogDefinition.factory.name === "string", `Parameter «dialogDefinition.factory.name» must be a string on «CommonDialogs.prototype.validateDialog»`);
      assertion(typeof dialogDefinition.factory.props === "object", `Parameter «dialogDefinition.factory.props» must be an object on «CommonDialogs.prototype.validateDialog»`);
      assertion(typeof dialogDefinition.factory.methods === "object", `Parameter «dialogDefinition.factory.methods» must be an object on «CommonDialogs.prototype.validateDialog»`);
      assertion(typeof dialogDefinition.factory.data === "function", `Parameter «dialogDefinition.factory.data» must be a function on «CommonDialogs.prototype.validateDialog»`);
      assertion(typeof dialogDefinition.state === "object", `Parameter «dialogDefinition.state» must be an object on «CommonDialogs.prototype.validateDialog»`);
      assertion(typeof dialogDefinition.state.promise === "object", `Parameter «dialogDefinition.state.promise» must be an object on «CommonDialogs.prototype.validateDialog»`);
      assertion(typeof dialogDefinition.state.resolve === "function", `Parameter «dialogDefinition.state.resolve» must be a function on «CommonDialogs.prototype.validateDialog»`);
      assertion(typeof dialogDefinition.state.reject === "function", `Parameter «dialogDefinition.state.reject» must be a function on «CommonDialogs.prototype.validateDialog»`);
      return dialogDefinition;
    },
    open(userDialogDefinition) {
      trace("CommonDialogs.methods.open");
      try {
        const dialogDefinition = this.validateDialog(userDialogDefinition);
        return dialogDefinition.state.promise;
      } catch (error) {
        this.$errors.showError(error);
      }
    },
    closeDialog(currentProcess) {
      trace("CommonDialogs.methods.closeDialog");
      currentProcess.close();
    },
    focusDialog(currentProcess) {
      trace("CommonDialogs.methods.focusDialog");
      for (let index = 0; index < this.processManager.$list.length; index++) {
        const it = this.processManager.$list[index];
        it.dialog.deepness--;
      }
      currentProcess.dialog.deepness = 101;
    }
  },
  mounted() {
    trace("CommonDialogs.mounted");
    NwtGlobalizer.exportTo("CommonDialogs", this);
    NwtGlobalizer.exportTo("NwtDialogs", this);
    Vue.prototype.$dialogs = this;
  }
})