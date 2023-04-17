import React from 'react';

import { Box } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { COMPONENTS_TITLE, INPUTS_TITLE } from '../../constants';
import ChevronRightIcon from '../../icons/ChevronRight';
import RefreshIcon from '../../icons/Refresh';
import IuiThemeProvider from '../../system/IuiThemeProvider';

import Button, { IuiButtonProps } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `${COMPONENTS_TITLE}/${INPUTS_TITLE}/Button`,
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FmGvbsx7PuFRgjtQZKlPj8/%EC%9D%B8%EC%8A%88%EC%96%B4%ED%8C%8C%EC%B8%A0-%EA%B4%80%EB%A6%AC%EC%9E%90%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=4840-2502&t=wj0bNoE9LWUXIzAu-4',
    },
  },
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

export const LabelWithIcon = LabelWithIconTemplate.bind({});
export const Primary = Template.bind({});
LabelWithIcon.args = {
  variant: 'outlined',
  color: 'secondary',
  iconsize: 20,
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'contained',
  color: 'primary',
};
