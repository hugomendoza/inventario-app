import React from 'react'
import { StyledButtonGoogle, StyledButtonIcon } from './ButtonGoogle.styles';

export const ButtonGoogle = (props) => {

  const { label, icon, className, onClick } = props;

  return (
    <StyledButtonGoogle
      icon={icon}
      onClick={onClick}
      className={`${className}`}
    >
      {icon && <StyledButtonIcon>{icon}</StyledButtonIcon>}
      <div className="text-center w-full">
        <p className="text-white font-sansLight text-sm uppercase">{label}</p>
      </div>
    </StyledButtonGoogle>
  )
}
