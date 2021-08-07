import styled from "styled-components";
import tw from 'tailwind.macro';

export const StyledTypography = styled.p.attrs({
  className: "",
})`
  /* Default */
  ${tw`text-black font-sansLight text-sm`}
  
  /* Variantes */
  ${(props) => {
    switch (props.variant) {
      case "h1":
        return tw`text-xl font-bold text-center font-sansBold text-primary-500 uppercase`
      case "h2":
        return tw`text-sm border-b-2 border-secondary-200 uppercase text-secondary-500 font-sansBold`
      case "h3":
        return tw`text-lg text-terciary-700 font-sansRegular`
      case "h4":
        return tw`text-sm text-white font-sansRegular`
      case "link":
        return tw`text-xs text-primary-500 font-sansRegular text-center mt-4`
      case "label":
        return tw` text-base bg-primary-500 text-white p-1 px-2 table`
      case "labelRound":
        return tw` text-base bg-terciary-500 text-white w-16 h-16 flex items-center justify-center mx-auto rounded-full`
      default:
        return tw``
    }
  }}
`