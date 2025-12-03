const path = require("path");
const fs = require("fs");
const JavadocBrute = require("@allnulled/javadoc-brute");

const main = async function () {

  const PROJECT_ROOT = path.resolve(__dirname, "..", "..");

  const apis = [
    {
      from: [`${PROJECT_ROOT}/assets/components/common-dialogs`],
      to: `${PROJECT_ROOT}/documentation/dialogs-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/components/common-toasts`],
      to: `${PROJECT_ROOT}/documentation/toasts-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/components/common-errors`],
      to: `${PROJECT_ROOT}/documentation/errors-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-asserter.js`],
      to: `${PROJECT_ROOT}/documentation/asserter-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-globalizer.js`],
      to: `${PROJECT_ROOT}/documentation/globalizer-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-importer.js`],
      to: `${PROJECT_ROOT}/documentation/importer-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-randomizer.js`],
      to: `${PROJECT_ROOT}/documentation/randomizer-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-environment.js`],
      to: `${PROJECT_ROOT}/documentation/environment-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-json-storer.js`],
      to: `${PROJECT_ROOT}/documentation/json-storer-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-settings.js`],
      to: `${PROJECT_ROOT}/documentation/settings-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-tester.js`],
      to: `${PROJECT_ROOT}/documentation/tester-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-process.js`],
      to: `${PROJECT_ROOT}/documentation/process-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-process-manager.js`],
      to: `${PROJECT_ROOT}/documentation/process-manager-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/components/nwt-process-manager-viewer/nwt-process-manager-viewer.js`],
      to: `${PROJECT_ROOT}/documentation/process-manager-viewer-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-dialog-definition.js`],
      to: `${PROJECT_ROOT}/documentation/dialog-definition-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/components/nwt-tester-ui/nwt-tester-viewer/nwt-tester-viewer.js`],
      to: `${PROJECT_ROOT}/documentation/tester-viewer-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-timer.js`],
      to: `${PROJECT_ROOT}/documentation/timer-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-utils.js`],
      to: `${PROJECT_ROOT}/documentation/utils-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-lazy-loader.js`],
      to: `${PROJECT_ROOT}/documentation/lazy-loader-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-pack.js`],
      to: `${PROJECT_ROOT}/documentation/globals-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-progress-bar.js`],
      to: `${PROJECT_ROOT}/documentation/progress-bar-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/components/nwt-progress-bar-viewer/nwt-progress-bar-viewer.js`],
      to: `${PROJECT_ROOT}/documentation/progress-bar-viewer-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/directives/v-draggable.js`],
      to: `${PROJECT_ROOT}/documentation/v-draggable-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/directives/v-resizable.js`],
      to: `${PROJECT_ROOT}/documentation/v-resizable-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/components/common-injections/common-injections.js`],
      to: `${PROJECT_ROOT}/documentation/common-injections-api.md`
    },
    {
      from: [`${PROJECT_ROOT}/assets/framework/nwt-injection.js`],
      to: `${PROJECT_ROOT}/documentation/injection-api.md`
    }
  ];

  const generateMarkdownTree = function (baseDir, ignores = [], depth = 0) {
    const entries = fs.readdirSync(baseDir, { withFileTypes: true })
      .filter(e => !ignores.includes(e.name))
      .sort((a, b) => (a.isDirectory() ? -1 : 1)); // carpetas primero
    let md = "";
    const indent = "  ".repeat(depth);
    for (const entry of entries) {
      const prefix = entry.isDirectory() ? "📁" : "📄";
      md += `${indent}- ${prefix} ${entry.name}\n`;
      if (entry.isDirectory()) {
        const subdir = path.join(baseDir, entry.name);
        md += generateMarkdownTree(subdir, ignores, depth + 1);
      }
    }
    return md;
  };

  const generateTOCFromMarkdown = function (mdText) {
    const lines = mdText.split(/\r?\n/);
    const toc = [];
    const headingRegex = /^(#{1,6})\s+(.*)$/; // Coincide con # H1, ## H2, etc.
    for (const line of lines) {
      const match = line.match(headingRegex);
      if (match) {
        const level = match[1].length; // número de #
        let title = match[2].trim();
        // Genera un id-friendly para link ancla
        const anchor = title.toLowerCase()
          .replace(/[^\w\s-]/g, "")  // quita caracteres raros
          .replace(/\s+/g, "-");     // espacios -> guiones
        const indent = "  ".repeat(level - 1);
        toc.push(`${indent}- [${title}](#${anchor})`);
      }
    }
    return toc.join("\n");
  };

  let llmMd = "";

  for (let index = 0; index < apis.length; index++) {
    const api = apis[index];
    await JavadocBrute.extractComments({
      include: api.from,
      exclude: api.exclude || [],
      output: api.to,
    });
    llmMd += fs.readFileSync(api.to).toString();
  }

  const tableOfContents = generateTOCFromMarkdown(llmMd);
  const structureOfProject = generateMarkdownTree(__dirname + "/../..", ["node_modules"]);

  llmMd = `# Documentación en fichero único

Este documento contiene toda la documentación del proyecto en un solo fichero.

Orientado a informar a un LLM desde una URL del proyecto.

Además, hace una tabla de contenidos general e imprime la estructura del proyecto.

# Tabla de contenidos

${tableOfContents}

# Estructura del proyecto

${structureOfProject}

${llmMd}`;

  fs.writeFileSync(`${PROJECT_ROOT}/llm.md`, llmMd, "utf8");

};

main();