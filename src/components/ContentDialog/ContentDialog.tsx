import React, { ReactNode } from 'react';

import {
  Box,
  Dialog as MuiDialog,
  DialogActions,
  dialogClasses,
  DialogContent,
  DialogProps as MuiDialogProps,
  DialogTitle,
  ModalProps,
} from '@mui/material';

import Close from '../../icons/Close';
import { grey, lineGrey } from '../../system/colors';
import { deepmerge } from '../../utils';
import Typography from '../Typography';

type Reason = ModalProps['onClose'] | 'buttonClick';

type ContentDialogProps = MuiDialogProps & {
  onClose: (reason: Reason) => void; // props의 onClose 오버로드
  title: string;
  content: ReactNode;
  actions?: ReactNode;
};

const ContentDialog = (props: ContentDialogProps) => {
  const {
    open,
    onClose,
    sx,
    title,
    content,
    actions,
    children, // children 무시
    ...rest
  } = props;

  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      sx={deepmerge(
        {
          [`.${dialogClasses.paper}`]: {
            width: 500,
            borderRadius: 0,
            boxShadow: 'none',
          },
        },
        sx
      )}
      {...rest}
    >
      <DialogTitle sx={{ margin: 0, padding: 0 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '20px',
            paddingBottom: '17px',
            boxShadow: `0 1px ${lineGrey[100]}`,
          }}
        >
          <Typography variant="title_b">{title}</Typography>
          <Close
            sx={{ marginLeft: 'auto', color: grey[400], cursor: 'pointer' }}
            onClick={() => onClose('buttonClick')}
          />
        </Box>
      </DialogTitle>
      <DialogContent
        sx={{
          margin: 0,
          paddingInline: '20px',
          paddingBottom: 0,
          '&&': {
            paddingTop: '17px',
          },
        }}
      >
        {content}
        <DialogActions
          sx={{
            margin: 0,
            padding: 0,
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              paddingTop: '24px',
              paddingBottom: '32px',
            }}
          >
            {actions}
          </Box>
        </DialogActions>
      </DialogContent>
    </MuiDialog>
  );
};

export default ContentDialog;
