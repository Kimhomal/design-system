// import { ThemeProvider } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { COMPONENTS_TITLE, DISPLAY_TITLE } from '../../constants';
import { IuiThemeProvider } from '../../system';

import Typography from './Typography';

export default {
  title: `${COMPONENTS_TITLE}/${DISPLAY_TITLE}/Typograhy`,
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: 'Insurparts Typography',
      },
      source: {
        code: `
import { Typography } from '@insurparts-team/ui';

const Component = () => {
  return(
    <>
      <Typography component="h1" variant="header_b" gutterBottom>
        Header. Bold.
      </Typography>
      <Typography component="h2" variant="title_b" gutterBottom>
        Title. Bold.
      </Typography>
      <Typography component="h6" variant="subtitle_b" gutterBottom>
        SubTitle. Bold. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos blanditiis tenetur
      </Typography>
      <Typography component="h6" variant="subtitle_m" gutterBottom>
        SubTitle. Medium. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos blanditiis tenetur
      </Typography>
      <Typography component="h6" variant="subtitle_r" gutterBottom>
        SubTitle. Regular. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1_b" style={{ display: 'block' }} gutterBottom>
        Body1. Bold. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body1_m" style={{ display: 'block' }} gutterBottom>
        Body1. Medium. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
        inventore consectetur, neque doloribus, cupiditate numquam dignissimos
        laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body1_r" style={{ display: 'block' }} gutterBottom>
        Body1. Regular. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
        inventore consectetur, neque doloribus, cupiditate numquam dignissimos
        laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2_m" style={{ display: 'block' }} gutterBottom>
        Body2. Medium. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
        inventore consectetur, neque doloribus, cupiditate numquam dignissimos
        laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2_r" style={{ display: 'block' }} gutterBottom>
        Body2. Regular. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
        inventore consectetur, neque doloribus, cupiditate numquam dignissimos
        laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography
        variant="caption1_m"
        style={{ display: 'block' }}
        gutterBottom
      >
        Caption1. Medium. Text
      </Typography>
      <Typography
        variant="caption1_r"
        style={{ display: 'block' }}
        gutterBottom
      >
        Caption1. Regular. Text
      </Typography>
    </>
  )
}
        `,
      },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = () => {
  return (
    <IuiThemeProvider mode="admin">
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <Typography component="h1" variant="header_b" gutterBottom>
          Header. Bold.
        </Typography>
        <Typography component="h2" variant="title_b" gutterBottom>
          Title. Bold.
        </Typography>
        <Typography component="h6" variant="subtitle_b" gutterBottom>
          SubTitle. Bold. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Quos blanditiis tenetur
        </Typography>
        <Typography component="h6" variant="subtitle_m" gutterBottom>
          SubTitle. Medium. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Quos blanditiis tenetur
        </Typography>
        <Typography component="h6" variant="subtitle_r" gutterBottom>
          SubTitle. Regular. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1_b" style={{ display: 'block' }} gutterBottom>
          Body1. Bold. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body1_m" style={{ display: 'block' }} gutterBottom>
          Body1. Medium. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
          inventore consectetur, neque doloribus, cupiditate numquam dignissimos
          laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body1_r" style={{ display: 'block' }} gutterBottom>
          Body1. Regular. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
          inventore consectetur, neque doloribus, cupiditate numquam dignissimos
          laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2_m" style={{ display: 'block' }} gutterBottom>
          Body2. Medium. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
          inventore consectetur, neque doloribus, cupiditate numquam dignissimos
          laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2_r" style={{ display: 'block' }} gutterBottom>
          Body2. Regular. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
          inventore consectetur, neque doloribus, cupiditate numquam dignissimos
          laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography
          variant="caption1_m"
          style={{ display: 'block' }}
          gutterBottom
        >
          Caption1. Medium. Text
        </Typography>
        <Typography
          variant="caption1_r"
          style={{ display: 'block' }}
          gutterBottom
        >
          Caption1. Regular. Text
        </Typography>
      </div>
    </IuiThemeProvider>
  );
};

export const Default = Template.bind({});
