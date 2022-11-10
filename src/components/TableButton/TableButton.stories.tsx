import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COMPONENTS_TITLE, INPUTS_TITLE } from '../../constants';
import TableButton from './TableButton';
import IuiThemeProvider from '../../system/IuiThemeProvider';
import RightArrowIcon from '../../icons/RightArrow';
import { ButtonProps } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `${COMPONENTS_TITLE}/${INPUTS_TITLE}/TableButton`,
  component: TableButton,
} as ComponentMeta<typeof TableButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TableButton> = (args) => {
  return (
    <IuiThemeProvider mode="admin">
      <TableButton {...args}>버튼</TableButton>
    </IuiThemeProvider>
  );
};

const LabelWithIconTemplate: ComponentStory<typeof TableButton> = (args) => {
  const endIconAgrs: ButtonProps = {
    ...args,
    endIcon: <RightArrowIcon />,
  };

  return (
    <IuiThemeProvider mode="admin">
      <TableButton {...endIconAgrs}>사진</TableButton>
    </IuiThemeProvider>
  );
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  variant: 'outlined',
  color: 'error',
};

export const LabelWithIcon = LabelWithIconTemplate.bind({});
LabelWithIcon.args = {
  variant: 'outlined',
  color: 'primary',
};
