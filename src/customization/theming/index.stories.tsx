import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Theming from '.';
import { CUSTOMIZATION_TITLE } from '../../constants';

export default {
  title: `${CUSTOMIZATION_TITLE}/Theming`,
  component: Theming,
} as ComponentMeta<typeof Theming>;

const Template: ComponentStory<typeof Theming> = (args) => (
  <Theming {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Custom = Template.bind({});
Custom.args = {
  typography: {
    fontFamily: 'wow',
    fontSize: 100,
    body1: {
      bold: {
        fontSize: 1,
        fontFamily: 'hochul',
      },
    },
  },
};
