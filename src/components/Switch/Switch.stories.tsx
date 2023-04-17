import React from 'react';

import { Stack } from '@mui/system';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { COMPONENTS_TITLE, INPUTS_TITLE } from '../../constants';
import { IuiThemeProvider } from '../../system';

import Switch from './Switch';

export default {
  title: `${COMPONENTS_TITLE}/${INPUTS_TITLE}/Switch`,
  component: Switch,
} as ComponentMeta<typeof Switch>;

const StandAloneTemplate: ComponentStory<typeof Switch> = (args) => {
  return (
    <IuiThemeProvider mode="admin">
      <Stack direction="row">
        <Switch defaultChecked {...args} />
        <Switch {...args} />
      </Stack>
    </IuiThemeProvider>
  );
};

export const StandAlone = StandAloneTemplate.bind({});

StandAlone.args = {};
