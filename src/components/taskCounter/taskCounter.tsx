import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

import { ITaskCounter } from './interfaces/ITaskCounter';

export const TaskCounter: FC<ITaskCounter> = (
  props,
): ReactElement => {
  //  Destructure props
  const { status, count = 0 } = props;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: 'warning.light',
          }}
        >
          <Typography color="#ffffff" variant="h4">
            10
          </Typography>
        </Avatar>
        <Typography
          color="#ffffff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          Subtitle
        </Typography>
      </Box>
    </>
  );
};
