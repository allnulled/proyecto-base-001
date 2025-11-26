/**
 * 
 * # Nwt Importer API
 * 
 * API para importar scripts y estilos.
 * 
 * Se expone a través de:
 * 
 * ```js
 * NwtImporter
 * ```
 * 
 * Puede usarse así:
 * 
 * ```js
 * await NwtImporter.scriptSrc("https://domain.com/script.js");
 * await NwtImporter.linkStylesheet("https://domain.com/styles.css");
 * ```
 * 
 */
(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['NwtImporter'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['NwtImporter'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const NwtImporter = class {

    static scriptSrc(url) {
      return new Promise((resolve, reject) => {
        if (!url) return reject(new Error("URL no válida"));
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("Error cargando script: " + url));
        document.head.appendChild(script);
      });
    }

    static linkStylesheet(url) {
      return new Promise((resolve, reject) => {
        if (!url) return reject(new Error("URL no válida"));
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        link.onload = () => resolve(link);
        link.onerror = () => reject(new Error("Error cargando stylesheet: " + url));
        document.head.appendChild(link);
      });
    }

  };

  return NwtImporter;

});