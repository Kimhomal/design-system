import '../fonts/font.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// export const argTypes = {
//   mode: { control: 'select', options: ['admin', 'self'] },
// };
