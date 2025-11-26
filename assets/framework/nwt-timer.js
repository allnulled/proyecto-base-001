(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['NwtTimer'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['NwtTimer'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const NwtTimer = class {

    static fromDateToString(d, options = {}) {
      // d puede ser Date, número (timestamp) o cadena aceptada por Date
      const date = d instanceof Date ? d : new Date(d);
      const utc = !!options.utc;
      const Y = utc ? date.getUTCFullYear() : date.getFullYear();
      const M = (utc ? date.getUTCMonth() : date.getMonth()) + 1; // 0..11 -> 1..12
      const D = utc ? date.getUTCDate() : date.getDate();
      const hh = utc ? date.getUTCHours() : date.getHours();
      const mm = utc ? date.getUTCMinutes() : date.getMinutes();
      const ss = utc ? date.getUTCSeconds() : date.getSeconds();
      const ms = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
      const pad = (n, width = 2) => {
        const s = String(n);
        return s.length >= width ? s : '0'.repeat(width - s.length) + s;
      };
      return (
        String(Y).padStart(4, '0') + '-' +
        pad(M) + '-' +
        pad(D) + ' ' +
        pad(hh) + ':' +
        pad(mm) + ':' +
        pad(ss) + '.' +
        pad(ms, 3)
      );
    }

  };

  return NwtTimer;

});