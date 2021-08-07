import styled from "styled-components";
import tw from "tailwind.macro";

export const StyledWrapper = styled.section.attrs({
  className: "StyledWrapper",
})`
  ${tw `w-full h-screen flex items-center justify-center`}
`
export const StyledDiv = styled.div.attrs({
  className: "StyledDiv",
})`
  ${tw `max-w-sm bg-white shadow-md relative rounded w-11/12 py-6 px-10`}
`