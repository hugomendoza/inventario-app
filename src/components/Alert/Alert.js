import React from 'react'
import { StyledAlert } from './Alert.styles'

export const Alert = (props) => {
  
  const {label} = props
  
  return (
    <StyledAlert>
      <p>{label}</p>
    </StyledAlert>
  )
};
