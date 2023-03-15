import React, { MouseEvent, useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { COMPONENTS_TITLE, INPUTS_TITLE } from '../../constants';
import { IuiThemeProvider } from '../../system';
import ToggleChipGroup from '../ToggleChipGroup';

import ToggleChip from './ToggleChip';

export default {
  title: `${COMPONENTS_TITLE}/${INPUTS_TITLE}/ToggleChip`,
  component: ToggleChip,
} as ComponentMeta<typeof ToggleChip>;

const StandAloneTemplate: ComponentStory<typeof ToggleChip> = (args) => {
  const { value, onChange, ...rest } = args;
  const [selected, setSelected] = useState(true);

  return (
    <IuiThemeProvider mode="admin">
      <ToggleChip
        value={selected ? '공개' : '비공개'}
        selected={selected}
        onChange={() => setSelected(!selected)}
        {...rest}
      >
        {selected ? '공개' : '비공개'}
      </ToggleChip>
    </IuiThemeProvider>
  );
};

const ToggleChipGroupTemplate: ComponentStory<typeof ToggleChip> = (args) => {
  const { value, ...withoutValue } = args;
  const [selected, setSelected] = useState([
    '플랫폼',
    '구분',
    '요청번호',
    '생성일',
    '상태',
    '차대번호',
    '보험사',
    '새 메시지',
    '차량번호',
    '배송완료',
    '공업사',
    '배송예정일',
    '총액',
    '부품사',
    '출고상태',
    '청구일',
  ]);

  const handleChange = (
    event: MouseEvent<HTMLElement>,
    newSelected: string[]
  ) => {
    setSelected(newSelected);
  };

  const children = [
    <ToggleChip value="플랫폼" key="플랫폼" {...withoutValue}>
      플랫폼
    </ToggleChip>,
    <ToggleChip value="구분" key="구분" {...withoutValue}>
      구분
    </ToggleChip>,
    <ToggleChip value="요청번호" key="요청번호" {...withoutValue}>
      요청번호
    </ToggleChip>,
    <ToggleChip value="생성일" key="생성일" {...withoutValue}>
      생성일
    </ToggleChip>,
    <ToggleChip value="상태" key="상태" {...withoutValue}>
      상태
    </ToggleChip>,
    <ToggleChip value="차대번호" key="차대번호" {...withoutValue}>
      차대번호
    </ToggleChip>,
    <ToggleChip value="보험사" key="보험사" {...withoutValue}>
      보험사
    </ToggleChip>,
    <ToggleChip value="새 메시지" key="새 메시지" {...withoutValue}>
      새 메시지
    </ToggleChip>,
    <ToggleChip value="차량번호" key="차량번호" {...withoutValue}>
      차량번호
    </ToggleChip>,
    <ToggleChip value="배송완료" key="배송완료" {...withoutValue}>
      배송완료
    </ToggleChip>,
    <ToggleChip value="공업사" key="공업사" {...withoutValue}>
      공업사
    </ToggleChip>,
    <ToggleChip value="배송예정일" key="배송예정일" {...withoutValue}>
      배송예정일
    </ToggleChip>,
    <ToggleChip value="총액" key="총액" {...withoutValue}>
      총액
    </ToggleChip>,
    <ToggleChip value="부품사" key="부품사" {...withoutValue}>
      부품사
    </ToggleChip>,
    <ToggleChip value="출고상태" key="출고상태" {...withoutValue}>
      출고상태
    </ToggleChip>,
    <ToggleChip value="청구일" key="청구일" {...withoutValue}>
      청구일
    </ToggleChip>,
    <ToggleChip value="접수번호" key="접수번호" {...withoutValue}>
      접수번호
    </ToggleChip>,
    <ToggleChip value="사고차량 입고일" key="사고차량 입고일" {...withoutValue}>
      사고차량 입고일
    </ToggleChip>,
  ];

  return (
    <IuiThemeProvider mode="admin">
      <ToggleChipGroup value={selected} onChange={handleChange}>
        {children}
      </ToggleChipGroup>
    </IuiThemeProvider>
  );
};

export const StandAlone = StandAloneTemplate.bind({});
export const WithToggleChipGroup = ToggleChipGroupTemplate.bind({});

WithToggleChipGroup.args = {};
StandAlone.args = {};
