import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import * as Styled from './Loading.styled';

export const Loading = () => {
  return (
    <Styled.Background>
      <CircularProgress disableShrink color="inherit" size={80} />
    </Styled.Background>
  );
}