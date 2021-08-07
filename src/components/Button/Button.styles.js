import styled from "styled-components";
import tw from 'tailwind.macro';


export const StyledButton = styled.button.attrs({
  className: "StyledButton transition-colors duration-300",
})`
  ${tw` py-1 text-white text-sm bg-primary-500 font-sansLight text-center uppercase hover:bg-primary-700`}
  &:focus {
    outline: none;
  }

  ${(props) => {
    switch (props.variant) {
      case "danger":
        return tw`bg-red-500 hover:bg-red-600`
      case "add":
        return tw`bg-primary-500 hover:bg-primary-600`
      case "minus":
        return tw`bg-primary-300 hover:bg-primary-400`
      case "profile":
        return tw`px-4 bg-secondary-500 hover:bg-secondary-600`
      default:
        return tw``
    }
  }}
`