import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box, InputLabel, Stack } from '@mui/material';
import { IuiThemeProvider } from '../../system';
import { COMPONENTS_TITLE, INPUTS_TITLE } from '../../constants';
import TextField from './TextField';

export default {
  title: `${COMPONENTS_TITLE}/${INPUTS_TITLE}/TextField`,
  component: TextField,
} as ComponentMeta<typeof TextField>;

const StandAloneTemplate: ComponentStory<typeof TextField> = (args) => {
  return (
    <IuiThemeProvider mode="admin">
      <Box component="form" noValidate autoComplete="off" sx={{ width: 460 }}>
        <Stack spacing={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="default-empty">Default / Empty</InputLabel>
            <TextField id="default-empty" />
          </Stack>

          <Stack spacing={1}>
            <InputLabel htmlFor="default-info">Default / Info</InputLabel>
            <TextField
              id="default-info"
              placeholder="'-'을 제외한 숫자만 입력해 주세요."
            />
          </Stack>

          <Stack spacing={1}>
            <InputLabel htmlFor="filled">Filled</InputLabel>
            <TextField id="filled" defaultValue="홍길동" />
          </Stack>

          <Stack spacing={1}>
            <InputLabel htmlFor="press">Press</InputLabel>
            <TextField id="press" />
          </Stack>

          <Stack spacing={1}>
            <InputLabel htmlFor="disabled">Disabled</InputLabel>
            <TextField id="disabled" defaultValue="대표자 아이디" disabled />
          </Stack>

          <Stack spacing={1}>
            <InputLabel htmlFor="focus">Focus</InputLabel>
            <TextField id="focus" defaultValue="입력중입니" autoFocus />
          </Stack>

          <Stack spacing={1}>
            <InputLabel htmlFor="error">Error</InputLabel>
            <TextField
              id="error"
              defaultValue="01012345678"
              error
              helperText="업체 전화번호를 입력해 주세요."
            />
          </Stack>
          <Stack spacing={1}>
            <InputLabel htmlFor="hover">Hover</InputLabel>
            <TextField id="hover" />
          </Stack>

          <Stack spacing={1}>
            <InputLabel htmlFor="search-info">Search / Info</InputLabel>
            <TextField
              id="search-info"
              placeholder="카테고리에 부합하는 검색어를 입력해주세요"
              InputProps={{
                sx: {
                  width: 400,
                },
              }}
              showSearchIcon
            />
          </Stack>

          <Stack spacing={1}>
            <InputLabel htmlFor="search-focus">Search / Focus</InputLabel>
            <TextField
              id="search-focus"
              defaultValue="입력중입니"
              InputProps={{
                sx: {
                  width: 400,
                },
              }}
              showSearchIcon
            />
          </Stack>
        </Stack>
      </Box>
    </IuiThemeProvider>
  );
};

export const StandAlone = StandAloneTemplate.bind({});

StandAlone.args = {};
