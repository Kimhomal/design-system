module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/customization/**/*.stories.mdx',
    '../src/customization/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
  ],
  staticDirs: ['../src/public'],
  framework: '@storybook/react',
};
