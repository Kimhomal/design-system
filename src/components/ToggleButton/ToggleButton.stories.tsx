import React, { MouseEvent, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ToggleButtonGroup } from '@mui/material';
import { IuiThemeProvider } from '../../system';
import { COMPONENTS_TITLE, INPUTS_TITLE } from '../../constants';
import ToggleButton from './ToggleButton';

export default {
  title: `${COMPONENTS_TITLE}/${INPUTS_TITLE}/ToggleButton`,
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

const ToggleButtonGroupTemplate: ComponentStory<typeof ToggleButton> = (
  args
) => {
  const { value, ...withoutValue } = args;
  const [selected, setSelected] = useState('all');

  const handleChange = (
    event: MouseEvent<HTMLElement>,
    newSelected: string
  ) => {
    if (newSelected !== null) {
      setSelected(newSelected);
    }
  };

  const children = [
    <ToggleButton value="all" key="all" {...withoutValue}>
      전체
    </ToggleButton>,
    <ToggleButton value="new" key="new" {...withoutValue}>
      새 메시지
    </ToggleButton>,
  ];

  const control = {
    value: selected,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <IuiThemeProvider mode="admin">
      <ToggleButtonGroup {...control}>{children}</ToggleButtonGroup>
    </IuiThemeProvider>
  );
};

export const WithToggleButtonGroup = ToggleButtonGroupTemplate.bind({});

WithToggleButtonGroup.args = {};
