import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stack } from '@mui/material';
import { IuiThemeProvider } from '../../system';
import { COMPONENTS_TITLE, INPUTS_TITLE } from '../../constants';
import MessageDialog from './MessageDialog';
import Button from '../Button';
import Typography from '../Typography';

export default {
  title: `${COMPONENTS_TITLE}/${INPUTS_TITLE}/MessageDialog`,
  component: MessageDialog,
} as ComponentMeta<typeof MessageDialog>;

const StandAloneTemplate: ComponentStory<typeof MessageDialog> = (args) => {
  const [openDialog1, setOpenDialog1] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);

  return (
    <IuiThemeProvider mode="admin">
      <Stack spacing={2}>
        <Typography variant="caption">
          *메시지 다이얼로그의 버튼은 1개 또는 2개로 한정되어 있으며 각각
          primary와 secondary로 구분됩니다.
        </Typography>
        <Button
          variant="contained"
          sx={{ width: 200 }}
          onClick={() => setOpenDialog1(true)}
        >
          메시지 다이얼로그 1
        </Button>
        <Button
          variant="contained"
          sx={{ width: 200 }}
          onClick={() => setOpenDialog2(true)}
        >
          메시지 다이얼로그 2
        </Button>
      </Stack>
      <MessageDialog
        open={openDialog1}
        onClose={() => setOpenDialog1(false)}
        message="선택하신 단락을 삭제하시겠습니까?"
        primary={{
          onClick: () => {
            console.log('확인');
            setOpenDialog1(false);
          },
        }}
        secondary={{
          onClick: () => {
            console.log('취소');
            setOpenDialog1(false);
          },
        }}
      />
      <MessageDialog
        open={openDialog2}
        onClose={() => setOpenDialog2(false)}
        message="권한삭제"
        detail="해당 회원의 권한을 삭제하시겠습니까?"
        primary={{
          onClick: () => {
            console.log('확인');
            setOpenDialog2(false);
          },
        }}
        secondary={{
          text: '닫기',
          onClick: () => {
            console.log('닫기');
            setOpenDialog2(false);
          },
        }}
      />
    </IuiThemeProvider>
  );
};

export const StandAlone = StandAloneTemplate.bind({});

StandAlone.args = {};
