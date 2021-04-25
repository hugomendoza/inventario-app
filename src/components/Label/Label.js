import React from 'react'
import { StyledLabel } from './Label.styles'

export const Label = (props) => {

  const { value } = props

  return (
    <StyledLabel>
      {value}
    </StyledLabel>
  )
}
