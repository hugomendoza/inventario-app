import React from "react";
// import PropTypes from "prop-types";

import { StyledTypography } from "./Typography.styles";

export const Typography = (props) => {

  const { children, variant, className, title } = props

  return (
    <StyledTypography
      variant={variant}
      className={className}
      titleMode={title}
    >
      {children}
    </StyledTypography>
  )
}

// Typography.propTypes = {
//   children: PropTypes.string.isRequired,
//   variant: PropTypes.oneOf([
//     "h1",
//     "h2"
//   ]),
// }

// Typography.defaultProps = {
//   className: "StyledTypography",
//   variant: "h1",
//   children: null,
//   title:false,
// }
