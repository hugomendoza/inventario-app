import React from 'react';
import { StyledInputIcon } from './InputIcon.styles';

export const InputIcon = (props) => {

  const {type, id, name, placeholder, value, onChange} = props

  return (
    <StyledInputIcon
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    >
    </StyledInputIcon>
  )
}
