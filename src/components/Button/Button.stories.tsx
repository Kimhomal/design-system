import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COMPONENTS_TITLE, INPUTS_TITLE } from '../../constants';
import Button from './Button';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '../../system';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `${COMPONENTS_TITLE}/${INPUTS_TITLE}/Button`,
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  const theme = createTheme({
    palette: {
      mode: args.mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button {...args} />
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
  variant: 'contained',
};
