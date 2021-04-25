import styled from "styled-components";
import tw from "tailwind.macro";

export const StyledInput = styled.input.attrs({
  className: "StyledInput",
})`
  ${tw `border-b-2 border-terciary-300 p-1 text-xs font-sansLight w-full text-terciary-500`}
  &::placeholder {
    color: var(--color-terciary-200);
  }
  &:focus {
    outline: none;
  }
`
