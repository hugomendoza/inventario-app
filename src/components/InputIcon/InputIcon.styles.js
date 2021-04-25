import styled from "styled-components";
import tw from "tailwind.macro";
import searchImage from "../../assets/img/icon-search.png";

export const StyledInputIcon = styled.input.attrs({
  className: "StyledInputIcon",
})`
  ${tw `border-b-2 border-primary-200 p-1 pl-6 text-xs font-sansLight w-full text-primary-500`}
  background-image: url(${searchImage});
  background-size: 20px;
  background-position: center left 5px;
  background-repeat: no-repeat;
  &::placeholder {
    color: var(--color-primary-200);
  }
  &:focus {
    outline: none;
  }
`
