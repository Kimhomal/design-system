import React, { useState } from 'react';

import { Box, Stack } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { COMPONENTS_TITLE, INPUTS_TITLE } from '../../constants';
import { IuiThemeProvider } from '../../system';
import { blueGrey } from '../../system/colors';
import Button from '../Button';
import Typography from '../Typography';

import ContentDialog from './ContentDialog';

export default {
  title: `${COMPONENTS_TITLE}/${INPUTS_TITLE}/ContentDialog`,
  component: ContentDialog,
} as ComponentMeta<typeof ContentDialog>;

const StandAloneTemplate: ComponentStory<typeof ContentDialog> = (args) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <IuiThemeProvider mode="admin">
      <Stack spacing={2}>
        <Typography variant="caption">
          *컨텐츠 다이얼로그의 버튼은 직접 주입해야 하지만 제한 없이 자유롭게
          커스터마이징이 가능합니다.
        </Typography>
        <Button
          variant="contained"
          sx={{ width: 200 }}
          onClick={() => setOpenDialog(true)}
        >
          컨텐츠 다이얼로그
        </Button>
      </Stack>
      <ContentDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        title="재청구"
        content={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 568,
              backgroundColor: blueGrey[100],
              textAlign: 'center',
            }}
          >
            <Typography variant="caption1_r">
              콘텐츠의 길이에 따라
              <br />
              세로 길이는 모달마다 상이할 수 있음
            </Typography>
          </Box>
        }
        actions={
          <Button
            variant="contained"
            onClick={() => {
              console.log('청구하기');
              setOpenDialog(false);
            }}
          >
            청구하기
          </Button>
        }
      />
    </IuiThemeProvider>
  );
};

export const StandAlone = StandAloneTemplate.bind({});

StandAlone.args = {};
