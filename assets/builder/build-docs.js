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
      from: [`${PROJECT_ROOT}/assets/framework/nwt-pack.js`],
      to: `${PROJECT_ROOT}/documentation/globals-api.md`
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