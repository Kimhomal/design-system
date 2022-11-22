import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IuiThemeProvider } from '../../system';
import { COMPONENTS_TITLE, INPUTS_TITLE } from '../../constants';
import Chip from './Chip';
import { Stack } from '@mui/material';

export default {
  title: `${COMPONENTS_TITLE}/${INPUTS_TITLE}/Chip`,
  component: Chip,
} as ComponentMeta<typeof Chip>;

const ChipTehmplate: ComponentStory<typeof Chip> = (args) => {
  const handleClick = () => {
    console.info('You clicked the chip.');
  };

  return (
    <IuiThemeProvider mode="admin">
      <Stack direction="row" spacing={1}>
        <Chip
          label="배송예정일"
          color="primary"
          onClick={handleClick}
          {...args}
        />
        <Chip
          label="사고차량 입고일"
          variant="outlined"
          onClick={handleClick}
          {...args}
        />
      </Stack>
    </IuiThemeProvider>
  );
};

export const StandAlone = ChipTehmplate.bind({});

StandAlone.args = {
  onDelete: undefined,
};
