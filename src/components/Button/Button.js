import React from 'react';

import { StyledButton } from './Button.styles';
import PropTypes from 'prop-types';

export const Button = (props) => {

  const { label, className, variant, onClick } = props;

  return (
    <StyledButton
      className={`${className}`}
      variant={variant}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  )
};

Button.propTypes = {
  variant: PropTypes.oneOf(["danger", "add","minus"]),
};

