import styled from "styled-components";
import tw from "tailwind.macro";

export const StyledTextaerea = styled.textarea.attrs({
  className: "StyledTextaerea",
})`
  ${tw `border-b-2 border-terciary-300 p-1 text-xs font-sansLight w-full text-terciary-500 resize-none h-16`}
  &::placeholder {
    color: var(--color-terciary-200);
  }
  &:focus {
    outline: none;
  }
`
