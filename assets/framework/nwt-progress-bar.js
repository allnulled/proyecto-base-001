/**
 * 
 * # Nwt Progress Bar API
 * 
 * API para gestionar una barra de progreso.
 * 
 * ## Exposición
 * 
 * La API se expone a través de:
 * 
 * ```js
 * NwtProgressBar
 * NwtFramework.ProgressBar
 * Vue.prototype.$nwt.ProgressBar
 * ```
 * 
 * ## Ventajas
 * 
 * Permite algunas cosas como:
 * 
 * ```js
 * const progressBar = ProgressBar.create();
 * const subprogressBar = progressBar.subprogress({
 *   total: 5,
 *   current: 0,
 * });
 * subprogressBar.advance(1);
 * subprogressBar.advance(1);
 * subprogressBar.advance(1);
 * subprogressBar.advance(1);
 * subprogressBar.advance(1);
 * progressBar.advance(1);
 * ```
 * 
 */
(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['NwtProgressBar'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['NwtProgressBar'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const NwtProgressBar = class {

    static create(...args) {
      return new this(...args);
    }

    constructor({ total = 1, current = 0 } = {}, parent = null, weight = 1) {
      this.total = total;
      this.current = current;
      this.parent = parent;
      this.weight = weight;
      this.children = [];
      if (!this.parent) {
        this._updatePercentage();
      }
    }

    advance(n = 1) {
      this.current += n;
      if (this.current > this.total) this.current = this.total;
      if (this.parent) {
        this.parent._updateFromChild();
      } else {
        this._updatePercentage();
      }
    }

    subprogress({ total = 1, current = 0, weight = 1 } = {}) {
      const fraction = weight / this.total;
      const child = new NwtProgressBar({ total, current }, this, fraction);
      this._registerChild(child);
      return child;
    }

    _getRelativeProgress() {
      return this.total === 0 ? 0 : this.current / this.total;
    }

    _updateFromChild() {
      let sum = 0;
      for (const child of this.children) {
        sum += child._getRelativeProgress() * child.weight;
      }
      this.current = sum * this.total;
      if (this.parent) {
        this.parent._updateFromChild();
      } else {
        this._updatePercentage();
      }
    }

    _updatePercentage() {
      this.percent = (this._getRelativeProgress() * 100).toFixed(2) + "%";
    }

    _registerChild(child) {
      this.children.push(child);
    }

  };

  return NwtProgressBar;

});