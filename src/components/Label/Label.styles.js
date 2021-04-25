import styled from "styled-components";
import tw from 'tailwind.macro';

export const StyledLabel = styled.label.attrs({
  className: "StyledLabel",
})`
  ${tw `text-xs text-terciary-500 uppercase font-sansLight w-full block`}
`