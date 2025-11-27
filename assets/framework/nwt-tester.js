/**
 * 
 * # Nwt Tester API
 * 
 * API para ejecutar tests asíncronos encadenados.
 * 
 * Se expone a través de:
 * 
 * ```js
 * // Clase:
 * NwtTester
 * NwtFramework.Tester
 * Vue.prototype.$nwt.tester
 * 
 * // Instancia global:
 * NwtTester.global // instancia
 * Vue.prototype.$tester // instancia
 * Vue.prototype.$tester === NwtTester.global // instancia
 * ```
 * 
 * Se usa así:
 * 
 * ```js
 * NwtTester.global.run("1 - Test", async test => {
 *   await NwtTimer.timeout(1000);
 *   await test.run("1.0 - Test inicial", async (test, assertion) => {
 *     assertion(true, "Test suite is working");
 *     await test.run("1.0.1 - Test inicial 1", async (test, assertion) => {
 *       assertion(true, "Test suite is working 1/5");
 *     });
 *     await test.run("1.0.2 - Test inicial 2", async (test, assertion) => {
 *       assertion(true, "Test suite is working 2/5");
 *     });
 *     await test.run("1.0.3 - Test inicial 3", async (test, assertion) => {
 *       assertion(true, "Test suite is working 3/5");
 *     });
 *     await test.run("1.0.4 - Test inicial 4", async (test, assertion) => {
 *       assertion(true, "Test suite is working 4/5");
 *     });
 *     await test.run("1.0.5 - Test inicial 5", async (test, assertion) => {
 *       assertion(true, "Test suite is working 5/5");
 *     });
 *   });
 *   test.define("1.1 - Test de globales", async (test, assertion) => {
 *     test.define("1.1.1 - Global NwtFramework", async () => {
 *       assertion(typeof NwtFramework !== "undefined", "NwtFramework must exist");
 *     });
 *     test.define("1.1.2 - Global NwtAsserter", async () => {
 *       assertion(typeof NwtAsserter !== "undefined", "NwtAsserter must exist");
 *     });
 *     test.define("1.1.3 - Global NwtTester", async () => {
 *       assertion(typeof NwtTester !== "undefined", "NwtTester must exist");
 *     });
 *   });
 *   test.define("2.1 - Test de globales 2", async (test, assertion) => {
 *     test.define("2.1.1 - Global NwtFramework", async () => {
 *       assertion(typeof NwtFramework !== "undefined", "NwtFramework must exist");
 *     });
 *     test.define("2.1.2 - Global NwtAsserter", async () => {
 *       assertion(typeof NwtAsserter !== "undefined", "NwtAsserter must exist");
 *     });
 *     test.define("2.1.3 - Global NwtTester", async () => {
 *       assertion(typeof NwtTester !== "undefined", "NwtTester must exist");
 *     });
 *   });
 * }, {
 *   onTestDefined: t => trace(`TEST: ${t.name}`),
 *   onTestSuccess: t => trace(`OK TEST: ${t.name}`),
 *   onTestFailure: e => trace(`FAIL TEST: ${e.name} ${e.message}`),
 *   onAssertionSuccess: (m) => trace(`OK ASSERTION ✔ ${m}`),
 *   onAssertionFailure: (e) => trace(`FAIL ASSERTION ✘ ${e}`),
 * });
 * ```
 * 
 */
(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['NwtTester'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['NwtTester'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const NwtTester = class {

    static default = this;

    static createTest(...args) {
      return new this(...args);
    }

    constructor(name, callback, hooks = {}, parent = null, root = null, level = 0) {
      if (typeof name !== "string") {
        throw new NwtAsserter.AssertionError("Parameter «name» must be a string on «NwtTester.constructor»");
      }
      if (typeof callback !== "function") {
        throw new NwtAsserter.AssertionError("Parameter «callback» must be a function on «NwtTester.constructor»");
      }
      if (typeof hooks !== "object") {
        throw new NwtAsserter.AssertionError("Parameter «hooks» must be an object on «NwtTester.constructor»");
      }
      this.name = name;
      this.callback = callback;
      this.hooks = hooks || {};
      this.children = [];
      this.parent = parent;
      this.level = level;
      this.root = root;
      this.accumulatedErrors = [];
      this.status = "pending";
      this.startedAt = null;
    }

    define(name, callback) {
      const test = new NwtTester(name, callback, this.hooks, this, this.root || this, this.level+1);
      this.children.unshift(test);
      this.hooks.onTestDefined?.(test);
      return test;
    }

    async run(name, callback) {
      const test = this.define(name, callback);
      await test.start();
      return test;
    }

    failBranch(subtest, error) {
      let parent = subtest.parent;
      while(parent !== null) {
        subtest.status = "failed";
        subtest.accumulatedErrors.push(error);
        parent = subtest.parent;
      }
    }

    async start() {
      try {
        this.startedAt = new Date();
        const assertion = NwtAsserter.createAssertion(
          message => this.hooks.onAssertionSuccess?.(message),
          error => this.hooks.onAssertionFailure?.(error)
        );
        if (this.status === "pending") {
          try {
            this.status = "running";
            await this.callback(this, assertion);
          } catch (error) {
            this.failBranch(this, error);
          }
        }
        for (const subtest of this.children) {
          try {
            await subtest.start();
          } catch (error) {
            this.failBranch(subtest, error);
          }
        }
        if(this.accumulatedErrors.length) {
          throw new Error(`Test «${this.name}» failed with ${this.accumulatedErrors.length} errors`);
        }
        this.status = "ok";
        this.successMoment = NwtTimer.secondsDiff(new Date(), (this.root || this).startedAt);
        this.totalTime = NwtTimer.secondsDiff(new Date(), this.startedAt);
        this.hooks.onTestSuccess?.(this);
      } catch (err) {
        this.hooks.onTestFailure?.(this, err);
      }
    }

  };

  NwtTester.global = new NwtTester("Global tester instance", async function () {});

  return NwtTester;

});