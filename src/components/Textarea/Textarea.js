import React from 'react';
import { StyledTextaerea } from './Textarea.styles';

export const Textarea = (props) => {

  const {type, id, name, placeholder, value, onChange } = props

  return (
    <StyledTextaerea
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    >
    </StyledTextaerea>
  )
}
