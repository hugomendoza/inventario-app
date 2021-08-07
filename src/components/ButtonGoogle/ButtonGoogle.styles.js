import styled from "styled-components";
import tw from "tailwind.macro";

export const StyledButtonGoogle = styled.button.attrs({
  className: "StyledButtonGoogle transition-colors duration-300",
})`
  ${tw `bg-secondary-500 border border-secondary-500 hover:bg-secondary-600`}
  &:focus {
    outline: none;
  }

  ${(props) => {
    return props.icon && tw `flex items-center`
  }}
`

export const StyledButtonIcon = styled.span.attrs({
  className: "StyledButtonIcon",
})`
  ${tw `w-8 h-8 mr-2 bg-white px-2 flex justify-center items-center`}
`