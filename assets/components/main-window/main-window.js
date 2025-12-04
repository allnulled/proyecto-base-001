/**
 * 
 * 
 * 
 * 
 */

NwtTester.global.define("Global test", async (test, assertion, subprogress) => {
  test.define("First test", async (tester, assertion, subprogress) => {
    subprogress.total = 8;
    assertion(true, "assertion 1");
    await NwtTimer.timeout(500);
    subprogress.advance();
    assertion(true, "assertion 2");
    await NwtTimer.timeout(500);
    subprogress.advance();
    assertion(true, "assertion 3");
    await NwtTimer.timeout(500);
    subprogress.advance();
    assertion(true, "assertion 4");
    await NwtTimer.timeout(500);
    subprogress.advance();
    assertion(true, "assertion 5");
    await NwtTimer.timeout(500);
    subprogress.advance();
    assertion(true, "assertion 6");
    await NwtTimer.timeout(500);
    subprogress.advance();
    assertion(true, "assertion 7");
    await NwtTimer.timeout(500);
    subprogress.advance();
    assertion(true, "assertion 8");
    await NwtTimer.timeout(500);
    subprogress.advance();
  });
  test.define("Second test", async (tester, assertion, subprogress) => {
    subprogress.total = 3;
    assertion(true, "assertion 1");
    await NwtTimer.timeout(500);
    subprogress.advance();
    assertion(true, "assertion 2");
    await NwtTimer.timeout(500);
    subprogress.advance();
    assertion(true, "assertion 3");
    await NwtTimer.timeout(500);
    subprogress.advance();
  });
  test.define("Third test", async (tester, assertion, subprogress) => {
    subprogress.total = 5;
    assertion(true, "assertion 1");
    await NwtTimer.timeout(500);
    subprogress.advance();
    assertion(true, "assertion 2");
    await NwtTimer.timeout(500);
    subprogress.advance();
    assertion(true, "assertion 3");
    await NwtTimer.timeout(500);
    subprogress.advance();
    assertion(true, "assertion 4");
    await NwtTimer.timeout(500);
    subprogress.advance();
    assertion(true, "assertion 5");
    await NwtTimer.timeout(500);
    subprogress.advance();
  });
  test.define("Fourth test", async (tester, assertion, subprogress) => {
    tester.define("Fourth test - Part 1/5", async (tester, assertion, subprogress) => {
      subprogress.total = 3;
      assertion(true, "assertion 1");
      await NwtTimer.timeout(500);
      subprogress.advance();
      assertion(true, "assertion 2");
      await NwtTimer.timeout(500);
      subprogress.advance();
      assertion(true, "assertion 3");
      await NwtTimer.timeout(500);
      subprogress.advance();
    });
    tester.define("Fourth test - Part 2/5", async (tester, assertion, subprogress) => {
      subprogress.total = 3;
      assertion(true, "assertion 1");
      await NwtTimer.timeout(500);
      subprogress.advance();
      assertion(true, "assertion 2");
      await NwtTimer.timeout(500);
      subprogress.advance();
      assertion(true, "assertion 3");
      await NwtTimer.timeout(500);
      subprogress.advance();
    });
    tester.define("Fourth test - Part 3/5", async (tester, assertion, subprogress) => {
      subprogress.total = 3;
      assertion(true, "assertion 1");
      await NwtTimer.timeout(500);
      subprogress.advance();
      assertion(true, "assertion 2");
      await NwtTimer.timeout(500);
      subprogress.advance();
      assertion(true, "assertion 3");
      await NwtTimer.timeout(500);
      subprogress.advance();
    });
    tester.define("Fourth test - Part 4/5", async (tester, assertion, subprogress) => {
      subprogress.total = 3;
      assertion(true, "assertion 1");
      await NwtTimer.timeout(500);
      subprogress.advance();
      assertion(true, "assertion 2");
      await NwtTimer.timeout(500);
      subprogress.advance();
      assertion(true, "assertion 3");
      await NwtTimer.timeout(500);
      subprogress.advance();
    });
    tester.define("Fourth test - Part 5/5", async (tester, assertion, subprogress) => {
      subprogress.total = 3;
      assertion(true, "assertion 1");
      await NwtTimer.timeout(500);
      subprogress.advance();
      assertion(true, "assertion 2");
      await NwtTimer.timeout(500);
      subprogress.advance();
      assertion(true, "assertion 3");
      await NwtTimer.timeout(500);
      subprogress.advance();
    });
  });

}, {
  onTestDefined: t => trace(`TEST: ${t.name}`),
  onTestSuccess: t => trace(`OK TEST: ${t.name}`),
  onTestFailure: e => trace(`FAIL TEST: ${e.name} ${e.message}`),
  onAssertionSuccess: (m) => trace(`OK ASSERTION ✔ ${m}`),
  onAssertionFailure: (e) => trace(`FAIL ASSERTION ✘ ${e}`),
});

Vue.component("MainWindow", {
  template: $template,
  props: {},
  data() {
    trace("MainWindow.data");
    return {
      toastCounter: 0,
      currentTester: NwtTester.global,
      progressBar: NwtTester.global.progressBar,
    };
  },
  methods: {
    pickToastCounter() {
      this.toastCounter += 1;
      return this.toastCounter;
    },
    showMultipleErrors() {
      trace("MainWindow.methods.showMultipleErrors");
      setTimeout(() => assertion(false, 'Error número 1'), 0);
      setTimeout(() => assertion(false, 'Error número 2'), 0);
      setTimeout(() => assertion(false, 'Error número 3'), 0);
      setTimeout(() => assertion(false, 'Error número 4'), 0);
      setTimeout(() => assertion(false, 'Error número 5'), 0);
    },
    demoToast() {
      const counter = this.pickToastCounter();
      this.$toasts.show({
        title: `Ejemplo ${counter}`,
        text: `Ok, los toasts (${counter}) solo texto`,
        footer: "El pie es opcional",
        timeout: 3000,
      });
    },
    demoDialog() {
      this.$dialogs.open({
        title: "Ejemplo de diálogo",
        template: `<div>
          <b>Usando marcado</b>, esto debería ser siempre un componente aparte.
        </div>`,
      });
    },
    demoNestedDialogs() {
      this.$dialogs.open({
        title: "Diálogo 1",
        template: `<div>
          <div>Para abrir un diálogo hijo:</div>
          <div>
            <button v-on:click="demoChild">Abrir</button>
          </div>
        </div>`,
        factory: {
          data: {
            children: 0,
          },
          methods: {
            demoChild() {
              this.subdialog({
                title: "Hijo " + (++this.children),
                template: `<div>
                  <div>Esto es un diálogo hijo</div>
                </div>`
              });
            }
          }
        }
      })
    }
  },
  mounted() {
    trace("MainWindow.mounted");
    //this.$refs.btn1.click();
    this.currentTester.start();
    Inyeccion_a_modulo_externo: {
      if (window.AppRoot && window.AppRoot.initialize) {
        window.AppRoot.initialize(this);
      }
    }
  }
})