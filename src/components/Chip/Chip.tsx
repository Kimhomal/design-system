import React from 'react';
import { Chip as MuiChip, chipClasses, ChipProps } from '@mui/material';
import { blueGrey, common, insurBlue } from '../../system/colors';
import { deepmerge } from '../../utils';

type RequestStatus =
  | 'request'
  | 'confirmOrder'
  | 'billWait'
  | 'vehicleRelease'
  | 'billComplete'
  | 'canceled';

type AgentStatus = 'active' | 'deactive';

type AgentType = 'parts' | 'repairshop' | 'insurance';

type ChipType = {
  type?: RequestStatus & AgentStatus & AgentType;
};

const Chip = (props: ChipProps & ChipType) => {
  const { sx, type, ...rest } = props;

  function backgroundColor(type: ChipType['type']) {
    if (!type) {
      return;
    }

    switch (type) {
      // 요청 상태
      case 'request':
        return '#3F54D1';
      case 'confirmOrder':
        return '#2AD4AF';
      case 'billWait':
        return '#15CDCB';
      case 'vehicleRelease':
        return '#60BFF7';
      case 'billComplete':
        return '#5280E2';
      case 'canceled':
        return '#FF0400';
      // 업체 상태
      case 'active':
        return '#DCEBFF';
      case 'deactive':
        return '#D1D6DB';
      // 업체 타입
      case 'parts':
        return '#EDF3FF';
      case 'repairshop':
        return '#FFEFEF';
      case 'insurance':
        return '#EAFEF0';
    }
  }

  function textColor(type: ChipType['type']) {
    if (!type) {
      return;
    }

    switch (type) {
      // 요청 상태
      case 'request':
      case 'confirmOrder':
      case 'billWait':
      case 'vehicleRelease':
      case 'billComplete':
      case 'canceled':
        return '#FFF';
      // 업체 상태
      case 'active':
        return '#0046A5';
      case 'deactive':
        return '#6B7684';
      // 업체 타입
      case 'parts':
        return '#3B69E6';
      case 'repairshop':
        return '#FF0400';
      case 'insurance':
        return '#00864B';
    }
  }

  return (
    <MuiChip
      sx={deepmerge(
        {
          height: '26px',
          paddingInline: '14px',
          fontSize: '14px',
          [`& .${chipClasses.label}`]: {
            padding: 0,
          },
          [`&.${chipClasses.filledPrimary}`]: {
            '&:hover': {
              backgroundColor: insurBlue[500],
            },
          },
          [`&.${chipClasses.outlined}`]: {
            borderColor: blueGrey[200],
            color: blueGrey[500],
            '&:hover': {
              backgroundColor: common.white,
            },
          },

          backgroundColor: backgroundColor(type),
          color: textColor(type),
        },
        sx
      )}
      {...rest}
    />
  );
};

export default Chip;
