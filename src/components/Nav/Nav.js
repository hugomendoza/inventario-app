import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyledNav } from './Nav.styles';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import { startLogout } from '../../actions/auth';



export const Nav = () => {

  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch( startLogout() );
  }
  
  return (
    <StyledNav>
      <Typography
        variant="h4"
        className="mr-4 text-white"
      >
        { name }
      </Typography>
      <Button
        variant="profile"
        label="Cerrar Sésión"
        onClick={handleLogout}
      >
      </Button>
    </StyledNav>
  )
}