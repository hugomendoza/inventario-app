import styled from "styled-components";
import tw from "tailwind.macro";

export const StyledContainer = styled.section.attrs({
  className: "StyledContainer",
})`
  ${tw `mx-auto max-w-4xl`}
`

export const StyledGrid = styled.div.attrs({
  className: "StyledGrid",
})`
  ${tw `flex flex-wrap`}
`


export const StyledColumn = styled.div.attrs({
  className: "StyledColumn",
})`
  ${tw `w-1/2 p-4`}
`

export const StyledForm = styled.form.attrs({
  className: "StyledForm",
})`
  ${tw ``}
`

export const StyledFormGroup = styled.div.attrs({
  className: "StyledFormGroup",
})`
  ${tw ``}
`