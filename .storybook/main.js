module.exports = {
  "stories": ['../src/app/component/**/*.stories.ts'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "staticDirs": [{ from: '../src/assets', to: './../' }],
  "framework": "@storybook/angular"
}