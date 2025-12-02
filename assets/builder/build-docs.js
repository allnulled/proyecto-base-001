const path = require("path");
const JavadocBrute = require("@allnulled/javadoc-brute");

const main = async function() {
  
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
      from: [`${PROJECT_ROOT}/assets/framework/nwt-process-manager-viewer.js`],
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
      from: [`${PROJECT_ROOT}/assets/framework/nwt-injection.js`],
      to: `${PROJECT_ROOT}/documentation/injection-api.md`
    }
  ];

  for(let index=0; index<apis.length; index++) {
    const api = apis[index];
    await JavadocBrute.extractComments({
      include: api.from,
      exclude: api.exclude || [],
      output: api.to,
    });
  }


};

main();