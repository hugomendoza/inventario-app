import React from 'react';
import { StyledInput } from './Input.styles';

export const Input = (props) => {

  const {type, id, name, placeholder, value, onChange } = props

  return (
    <StyledInput
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    >
    </StyledInput>
  )
}
