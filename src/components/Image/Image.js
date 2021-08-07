import React from 'react';

import { StyledImage } from './Image.styles';

export const Image = (props) => {

  const { className, imageAlt, imageSrc } = props;

  return(
    <StyledImage
      loading="lazy"
      className={className}
      src={imageSrc}
      alt={imageAlt}
      title={imageAlt}
    >
    </StyledImage>
  )

}