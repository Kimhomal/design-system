import React, { ChangeEvent, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IuiThemeProvider } from '../../system';
import { COMPONENTS_TITLE, INPUTS_TITLE } from '../../constants';
import Radio from './Radio';
import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';

export default {
  title: `${COMPONENTS_TITLE}/${INPUTS_TITLE}/Radio`,
  component: Radio,
} as ComponentMeta<typeof Radio>;

const StandAloneTemplate: ComponentStory<typeof Radio> = (args) => {
  const [selectedValue, setSelectedValue] = React.useState('b');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <IuiThemeProvider mode="admin">
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
        {...args}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
        {...args}
      />
      <Radio checked={true} disabled />
    </IuiThemeProvider>
  );
};

const WithFormControlTemplate: ComponentStory<typeof Radio> = (args) => {
  const [value, setValue] = useState('1');

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setValue(value);
  };

  return (
    <IuiThemeProvider mode="admin">
      <FormControl>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel
            value="0"
            control={<Radio {...args} />}
            label="공업사에서 타업체 연결 요청"
          />
          <FormControlLabel
            value="1"
            control={<Radio {...args} />}
            label="공업사에서 타업체 연결 요청"
          />
        </RadioGroup>
        <RadioGroup>
          <FormControlLabel
            control={<Radio />}
            label="공업사에서 타업체 연결 요청"
            defaultChecked
            disabled
          />
        </RadioGroup>
      </FormControl>
    </IuiThemeProvider>
  );
};

export const StandAlone = StandAloneTemplate.bind({});
export const WithFormControl = WithFormControlTemplate.bind({});

StandAlone.args = {};

WithFormControl.args = {};
