import { ThemeProvider } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Theming from '.';
import { CUSTOMIZATION_TITLE } from '../../constants';
import { createTheme } from '../../system';

export default {
  title: `${CUSTOMIZATION_TITLE}/Theming`,
  component: Theming,
  parameters: {
    docs: {
      description: {
        component: 'emotion Themeprovider',
      },
      source: {
        code: `
import { createTheme } from '@insurparts-team/ui';
import { ThemeProvider, useTheme } from '@emotion/react';

const Template = () => {
  const theme = createTheme({
    typography: {
    fontFamily: 'All font change',
    fontSize: 100,
    body1: {
      bold: {
        fontSize: 1,
        fontFamily: 'hochul',
      },
    },
  },
  });

  return (
    <ThemeProvider theme={theme}>
      <YourComponent />
    </ThemeProvider>
  );
};

const YourComponent = () => {
  const theme = useTheme();

  return (
    <div style={{...theme.typography.body1.bold}}>typography</div>
  )
}
        `,
      },
    },
  },
} as ComponentMeta<typeof Theming>;

const Template: ComponentStory<typeof Theming> = (args) => {
  const theme = createTheme({
    ...args,
    ...(args.mode && { palette: { mode: args.mode } }),
  });

  return (
    <ThemeProvider theme={theme}>
      <pre>
        <code>{JSON.stringify(theme, null, 2)}</code>
      </pre>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Custom = Template.bind({});
Custom.args = {
  palette: {
    mode: 'self',
  },
  typography: {
    fontFamily: 'All font change',
    fontSize: 100,
    body1: {
      bold: {
        fontSize: 1,
        fontFamily: 'hochul',
      },
    },
  },
};
