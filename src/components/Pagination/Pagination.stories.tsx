import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IuiThemeProvider } from '../../system';
import { COMPONENTS_TITLE, INPUTS_TITLE } from '../../constants';
import Pagination from './Pagination';
import { Stack } from '@mui/material';

export default {
  title: `${COMPONENTS_TITLE}/${INPUTS_TITLE}/Pagination`,
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const StandAloneTemplate: ComponentStory<typeof Pagination> = (args) => {
  return (
    <IuiThemeProvider mode="admin">
      <Stack spacing={2}>
        <Pagination color="primary" count={5} />
        <Pagination color="primary" count={10} />
      </Stack>
    </IuiThemeProvider>
  );
};

export const StandAlone = StandAloneTemplate.bind({});

StandAlone.args = {};
