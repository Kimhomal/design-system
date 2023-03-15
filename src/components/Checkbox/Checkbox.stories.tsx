import React from 'react';

import { FormControl, FormControlLabel } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { COMPONENTS_TITLE, INPUTS_TITLE } from '../../constants';
import { IuiThemeProvider } from '../../system';

import Checkbox from './Checkbox';

export default {
  title: `${COMPONENTS_TITLE}/${INPUTS_TITLE}/Checkbox`,
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const StandAloneTemplate: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <IuiThemeProvider mode="admin">
      <Checkbox {...args} />
      <Checkbox {...args} defaultChecked />
      <Checkbox {...args} disabled checked />
    </IuiThemeProvider>
  );
};

const WithFormControlTemplate: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <IuiThemeProvider mode="admin">
      <FormControl>
        <FormControlLabel
          control={<Checkbox {...args} />}
          label="공업사에서 타업체 연결 요청"
        />
        <FormControlLabel
          control={<Checkbox {...args} defaultChecked />}
          label="공업사에서 타업체 연결 요청"
        />
        <FormControlLabel
          control={<Checkbox {...args} disabled checked />}
          label="공업사에서 타업체 연결 요청"
        />
      </FormControl>
    </IuiThemeProvider>
  );
};

export const StandAlone = StandAloneTemplate.bind({});
export const WithFormControl = WithFormControlTemplate.bind({});

StandAlone.args = {};

WithFormControl.args = {};
