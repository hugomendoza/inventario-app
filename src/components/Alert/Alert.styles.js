import styled from "styled-components";
import tw from "tailwind.macro";

export const StyledAlert = styled.div.attrs({
  className: "StyledAlert",
})`
  ${tw `bg-secondary-600 text-white shadow-md w-full py-1 text-center mt-2 font-sansRegular text-sm`}
`
