import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IuiThemeProvider } from '../../system';
import { COMPONENTS_TITLE, INPUTS_TITLE } from '../../constants';
import Switch from './Switch';
import { Stack } from '@mui/system';

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
