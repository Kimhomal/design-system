import React, { MouseEvent } from 'react';

import {
  Box,
  Dialog as MuiDialog,
  DialogActions,
  dialogClasses,
  DialogContent,
  DialogProps as MuiDialogProps,
} from '@mui/material';

import { deepmerge } from '../../utils';
import Button from '../Button';
import Typography from '../Typography';

type MessageDialogProps = MuiDialogProps & {
  message: string;
  detail?: string;
  primary?: {
    text?: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  };
  secondary?: {
    text?: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  };
};

const MessageDialog = (props: MessageDialogProps) => {
  const {
    sx,
    open,
    onClose,
    message,
    detail,
    primary,
    secondary,
    children, // children 무시
    ...rest
  } = props;
  const hasDetail = !!detail;

  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      sx={deepmerge(
        {
          [`.${dialogClasses.paper}`]: {
            width: 400,
            borderRadius: 0,
            boxShadow: 'none',
          },
        },
        sx
      )}
      {...rest}
    >
      <DialogContent
        sx={{
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            paddingTop: hasDetail ? '32px' : '40px',
          }}
        >
          <Typography
            component="h2"
            variant={hasDetail ? 'title_b' : 'body1_b'}
          >
            {message}
          </Typography>
          {detail && (
            <Typography
              component="p"
              variant="body1_r"
              sx={{ marginTop: '8px' }}
            >
              {detail}
            </Typography>
          )}
        </Box>
      </DialogContent>
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
          {secondary && (
            <Button
              variant="outlined"
              color="secondary"
              onClick={(event) => {
                secondary.onClick(event);
              }}
            >
              {secondary.text ?? '취소'}
            </Button>
          )}
          {primary && (
            <Button
              variant="contained"
              onClick={(event) => {
                primary.onClick(event);
              }}
            >
              {primary.text ?? '확인'}
            </Button>
          )}
        </Box>
      </DialogActions>
    </MuiDialog>
  );
};

export default MessageDialog;
