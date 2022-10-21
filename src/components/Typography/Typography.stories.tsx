import { ThemeProvider } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { COMPONENTS_TITLE, DISPLAY_TITLE } from '../../constants';
import createTheme from '../../system/createTheme';
// import ThemeProvider from '../../system/ThemeProvider';

import Typography from './Typography';

export default {
  title: `${COMPONENTS_TITLE}/${DISPLAY_TITLE}/Typograhy`,
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = () => {
  const theme = createTheme({
    typography: {
      header: {
        bold: { color: 'red' },
      },
      title: {
        bold: { color: 'red' },
      },
    },
  });

  const anotherTheme = createTheme({
    typography: {
      header: {
        bold: { color: 'blue' },
      },
      title: {
        bold: { color: 'blue' },
      },
    },
  });

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      {/* <ThemeProvider theme={theme}> */}
      <Typography component="h1" variant="header" weight="bold" gutterBottom>
        Header. Bold.
      </Typography>
      {/* <ThemeProvider theme={anotherTheme}> */}
      <Typography component="h2" variant="title" weight="bold" gutterBottom>
        Title. Bold.
      </Typography>
      {/* </ThemeProvider> */}
      {/* </ThemeProvider> */}
      <Typography component="h6" variant="subtitle" weight="bold" gutterBottom>
        SubTitle. Bold. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos blanditiis tenetur
      </Typography>
      <Typography
        component="h6"
        variant="subtitle"
        weight="medium"
        gutterBottom
      >
        SubTitle. Medium. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos blanditiis tenetur
      </Typography>
      <Typography
        component="h6"
        variant="subtitle"
        weight="regular"
        gutterBottom
      >
        SubTitle. Regular. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos blanditiis tenetur
      </Typography>
      <Typography
        variant="body1"
        weight="bold"
        style={{ display: 'block' }}
        gutterBottom
      >
        Body1. Bold. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography
        variant="body1"
        weight="medium"
        style={{ display: 'block' }}
        gutterBottom
      >
        Body1. Medium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography
        variant="body1"
        weight="regular"
        style={{ display: 'block' }}
        gutterBottom
      >
        Body1. Regular. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography
        variant="body2"
        weight="medium"
        style={{ display: 'block' }}
        gutterBottom
      >
        Body2. Medium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography
        variant="body2"
        weight="regular"
        style={{ display: 'block' }}
        gutterBottom
      >
        Body2. Regular. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography
        variant="caption1"
        weight="medium"
        style={{ display: 'block' }}
        gutterBottom
      >
        Caption1. Medium. Text
      </Typography>
      <Typography
        variant="caption1"
        weight="regular"
        style={{ display: 'block' }}
        gutterBottom
      >
        Caption1. Regular. Text
      </Typography>
    </div>
  );
};

export const Default = Template.bind({});
