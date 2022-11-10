import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COMPONENTS_TITLE, INPUTS_TITLE } from '../../constants';
import Button, { IuiButtonProps } from './Button';
import IuiThemeProvider from '../../system/IuiThemeProvider';
import ChevronRightIcon from '../../icons/ChevronRight';
import RefreshIcon from '../../icons/Refresh';
import { Box } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `${COMPONENTS_TITLE}/${INPUTS_TITLE}/Button`,
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <IuiThemeProvider mode="admin">
      <Button {...args}>버튼</Button>
    </IuiThemeProvider>
  );
};

const LabelWithIconTemplate: ComponentStory<typeof Button> = (args) => {
  const endIconAgrs: IuiButtonProps = {
    ...args,
    endIcon: <ChevronRightIcon />,
  };

  const startIconAgrs: IuiButtonProps = {
    ...args,
    startIcon: <RefreshIcon />,
  };

  return (
    <IuiThemeProvider mode="admin">
      <Box display="inline-flex" flexDirection="column" gap={2}>
        <Button {...endIconAgrs}>상세 정보</Button>
        <Button {...startIconAgrs}>재청구</Button>
      </Box>
    </IuiThemeProvider>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'contained',
  color: 'primary',
};

export const LabelWithIcon = LabelWithIconTemplate.bind({});
LabelWithIcon.args = {
  variant: 'outlined',
  color: 'secondary',
  iconsize: 20,
};
