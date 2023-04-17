import React, { useState } from 'react';

import { FormControl, SelectChangeEvent, Stack } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { COMPONENTS_TITLE, INPUTS_TITLE } from '../../constants';
import { IuiThemeProvider } from '../../system';
import MenuItem from '../MenuItem';

import Select from './Select';

export default {
  title: `${COMPONENTS_TITLE}/${INPUTS_TITLE}/Select`,
  component: Select,
} as ComponentMeta<typeof Select>;

const WithFormControlTemplate: ComponentStory<typeof Select> = (args) => {
  const [dateFilter, setDateFilter] = useState('생성일');
  const [brandFilter, setBrandFilter] = useState<string>();

  const handleDateChange = (event: SelectChangeEvent<unknown>) => {
    setDateFilter(event.target.value as string);
  };

  const handleBrandChange = (event: SelectChangeEvent<unknown>) => {
    setBrandFilter(event.target.value as string);
  };

  return (
    <IuiThemeProvider mode="admin">
      <Stack gap="20px">
        <FormControl fullWidth>
          <Select value={dateFilter} onChange={handleDateChange}>
            <MenuItem value="생성일">생성일</MenuItem>
            <MenuItem value="사고 차량 입고일">사고 차량 입고일</MenuItem>
            <MenuItem value="배송 완료일">배송 완료일</MenuItem>
            <MenuItem value="청구일">청구일</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <Select
            value={brandFilter ?? ''}
            onChange={handleBrandChange}
            displayEmpty
            renderValue={
              brandFilter ? undefined : () => <span>차량브랜드 선택</span>
            }
            sx={{
              width: '155px',
            }}
          >
            <MenuItem value="닛산">닛산</MenuItem>
            <MenuItem value="닷지">닷지</MenuItem>
            <MenuItem value="로버">로버</MenuItem>
            <MenuItem value="루나">루나</MenuItem>
            <MenuItem value="르노">르노</MenuItem>
            <MenuItem value="링컨">링컨</MenuItem>
            <MenuItem value="미니">미니</MenuItem>
            <MenuItem value="벤츠">벤츠</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </IuiThemeProvider>
  );
};

export const WithFormControl = WithFormControlTemplate.bind({});

WithFormControl.args = {};
