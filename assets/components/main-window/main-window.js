Vue.component("MainWindow", {
  template: $template,
  props: {},
  data() {
    trace("MainWindow.data");
    NwtTester.global.define("1 - Test", async test => {
      await NwtTimer.timeout(1000);
      await test.run("1.0 - Test inicial", async (test, assertion) => {
        assertion(true, "Test suite is working");
        await NwtTimer.timeout(1000);
        await test.run("1.0.1 - Test inicial 1", async (test, assertion) => {
          assertion(true, "Test suite is working 1/5");
        });
        await NwtTimer.timeout(1000);
        await test.run("1.0.2 - Test inicial 2", async (test, assertion) => {
          assertion(true, "Test suite is working 2/5");
        });
        await NwtTimer.timeout(1000);
        await test.run("1.0.3 - Test inicial 3", async (test, assertion) => {
          assertion(true, "Test suite is working 3/5");
        });
        await NwtTimer.timeout(1000);
        await test.run("1.0.4 - Test inicial 4", async (test, assertion) => {
          assertion(true, "Test suite is working 4/5");
        });
        await NwtTimer.timeout(1000);
        await test.run("1.0.5 - Test inicial 5", async (test, assertion) => {
          assertion(true, "Test suite is working 5/5");
        });
      });
      test.define("1.1 - Test de globales", async (test, assertion) => {
        await NwtTimer.timeout(1000);
        test.define("1.1.1 - Global NwtFramework", async () => {
          await NwtTimer.timeout(1000);
          assertion(typeof NwtFramework !== "undefined", "NwtFramework must exist");
        });
        await NwtTimer.timeout(1000);
        test.define("1.1.2 - Global NwtAsserter", async () => {
          await NwtTimer.timeout(1000);
          assertion(typeof NwtAsserter !== "undefined", "NwtAsserter must exist");
        });
        await NwtTimer.timeout(1000);
        test.define("1.1.3 - Global NwtTester", async () => {
          await NwtTimer.timeout(1000);
          assertion(typeof NwtTester !== "undefined", "NwtTester must exist");
        });
      });
      test.define("1.2 - Test de globales 2", async (test, assertion) => {
        await NwtTimer.timeout(1000);
        test.define("1.2.1 - Global NwtFramework", async () => {
          await NwtTimer.timeout(1000);
          assertion(typeof NwtFramework !== "undefined", "NwtFramework must exist");
        });
        await NwtTimer.timeout(1000);
        test.define("1.2.2 - Global NwtAsserter", async () => {
          await NwtTimer.timeout(1000);
          assertion(typeof NwtAsserter !== "undefined", "NwtAsserter must exist");
        });
        await NwtTimer.timeout(1000);
        test.define("1.2.3 - Global NwtTester", async () => {
          await NwtTimer.timeout(1000);
          assertion(typeof NwtTester !== "undefined", "NwtTester must exist");
        });
      });
    }, {
      onTestDefined: t => trace(`TEST: ${t.name}`),
      onTestSuccess: t => trace(`OK TEST: ${t.name}`),
      onTestFailure: e => trace(`FAIL TEST: ${e.name} ${e.message}`),
      onAssertionSuccess: (m) => trace(`OK ASSERTION ✔ ${m}`),
      onAssertionFailure: (e) => trace(`FAIL ASSERTION ✘ ${e}`),
    });
    return {
      toastCounter: 0,
      currentTester: NwtTester.global,
    };
  },
  methods: {
    showMultipleErrors() {
      trace("MainWindow.methods.showMultipleErrors");
      setTimeout(() => assertion(false, 'Error número 1'), 0);
      setTimeout(() => assertion(false, 'Error número 2'), 0);
      setTimeout(() => assertion(false, 'Error número 3'), 0);
      setTimeout(() => assertion(false, 'Error número 4'), 0);
      setTimeout(() => assertion(false, 'Error número 5'), 0);
    }
  },
  mounted() {
    trace("MainWindow.mounted");
    //this.$refs.btn1.click();
    this.currentTester.start();
  }
})