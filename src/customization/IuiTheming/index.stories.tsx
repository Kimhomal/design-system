import { useTheme } from '@mui/material/styles';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import IuiTheming from '.';
import { CUSTOMIZATION_TITLE } from '../../constants';

export default {
  title: `${CUSTOMIZATION_TITLE}/IuiTheming`,
  component: IuiTheming,
  parameters: {
    docs: {
      description: {
        component: 'Material-UI 기반 Insurparts Themeprovider',
      },
    },
  },
} as ComponentMeta<typeof IuiTheming>;

const Template: ComponentStory<typeof IuiTheming> = (args) => {
  const Component = () => {
    const theme = useTheme();

    return (
      <pre>
        <code>{JSON.stringify(theme, null, 2)}</code>
      </pre>
    );
  };

  return (
    <IuiTheming {...args}>
      <Component />
    </IuiTheming>
  );
};

export const Default = Template.bind({});
Default.args = {
  mode: 'admin',
};
