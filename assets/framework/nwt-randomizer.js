(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['NwtRandomizer'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['NwtRandomizer'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const NwtRandomizer = class {

    static fromNumbers(start, end) {
      if (typeof start !== "number" || typeof end !== "number") {
        throw new TypeError("Parámetros «start» y «end» deben ser números en «NwtRandomizer.fromNumbers»");
      }
      if (end < start) {
        throw new RangeError("end no puede ser menor que start");
      }
      return Math.floor(Math.random() * (end - start + 1)) + start;
    }

    // Devuelve un ítem aleatorio de la lista
    static fromList(list) {
      if (!Array.isArray(list)) {
        throw new TypeError("list debe ser un array");
      }
      if (list.length === 0) {
        return undefined;
      }
      const i = Math.floor(Math.random() * list.length);
      return list[i];
    }

    static alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    static numerical = "0123456789".split("");
    
    static alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789".split("");

    static fromAlphabet(len = 10, alphabet = this.alphabet) {
      let out = "";
      while(out.length < len) {
        out += this.fromList(alphabet);
      }
      return out;
    }

  };

  return NwtRandomizer;

});