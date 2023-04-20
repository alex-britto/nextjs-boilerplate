const fs = require("fs");

const backstopCurrentJSON = require("../backstop.jsonn");

const createBackstopScenarios = (linksArray = []) => {
  const backStopScenarios = [];

  linksArray.forEach((component) => {
    component.links.forEach((story) => {
      const componentName = component.name.toUpperCase();
      const storyName = story.name.toUpperCase();

      backStopScenarios.push({
        label: `${componentName} ${storyName}`,
        cookiePath: "backstop_data/engine_scripts/cookies.json",
        url: story.url,
        referenceUrl: "",
        readyEvent: "",
        readySelector: "#component-container",
        delay: 0,
        hideSelectors: [],
        removeSelectors: [],
        hoverSelector: "",
        clickSelector: "",
        postInteractionWait: 2000,
        selectors: ["#component-container"],
        selectorExpansion: true,
        expect: 0,
        misMatchThreshold: 0.1,
        requireSameDimensions: true,
      });
    });
  });

  backstopCurrentJSON.scenarios = backStopScenarios;
  fs.writeFileSync(
    "../backstop.json",
    JSON.stringify(backstopCurrentJSON),
    null,
    2
  );
};

module.exports = createBackstopScenarios;
