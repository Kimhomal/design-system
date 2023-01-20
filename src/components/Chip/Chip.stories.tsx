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
      <Stack spacing={2}>
        <Stack direction="row" spacing={1}>
          <Chip
            label="연결중"
            clickable={false}
            type="request"
            onClick={handleClick}
            {...args}
          />
          <Chip
            label="주문확정"
            clickable={false}
            type="confirmOrder"
            onClick={handleClick}
            {...args}
          />
          <Chip
            label="청구대기"
            clickable={false}
            type="billWait"
            onClick={handleClick}
            {...args}
          />
          <Chip
            label="출고완료"
            clickable={false}
            type="vehicleRelease"
            onClick={handleClick}
            {...args}
          />
          <Chip
            label="청구완료"
            clickable={false}
            type="billComplete"
            onClick={handleClick}
            {...args}
          />
          <Chip
            label="취소"
            clickable={false}
            type="canceled"
            onClick={handleClick}
            {...args}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip
            label="활성화"
            clickable={false}
            type="active"
            onClick={handleClick}
            {...args}
          />
          <Chip
            label="비활성화"
            clickable={false}
            type="deactive"
            onClick={handleClick}
            {...args}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip
            label="부품사"
            clickable={false}
            type="parts"
            onClick={handleClick}
            {...args}
          />
          <Chip
            label="공업사"
            clickable={false}
            type="repairshop"
            onClick={handleClick}
            {...args}
          />
          <Chip
            label="보험사"
            clickable={false}
            type="insurance"
            onClick={handleClick}
            {...args}
          />
          <Chip
            label="셀프"
            clickable={false}
            type="selfclaim"
            onClick={handleClick}
            {...args}
          />
        </Stack>
      </Stack>
    </IuiThemeProvider>
  );
};

export const StandAlone = ChipTehmplate.bind({});

StandAlone.args = {
  onDelete: undefined,
};
