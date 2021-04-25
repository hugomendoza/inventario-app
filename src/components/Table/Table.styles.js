import styled from "styled-components";
import tw from 'tailwind.macro';

export const StyledTable = styled.table.attrs({
  className: "StyledTable"
})`
  ${tw` w-full`}
`

export const StyledHead = styled.thead.attrs({
  className: "StyledHead"
})`
  ${tw` border-b-2 border-primary-300`}
`

export const StyledBody = styled.tbody.attrs({
  className: "StyledBody"
})`
  ${tw` `}
`

export const StyledTh = styled.th.attrs({
  className: "StyledTh"
})`
  ${tw` font-sansLight text-xs text-center text-terciary-600 p-1`}
`

export const StyledTr = styled.tr.attrs({
  className: "StyledTr"
})`
  ${tw` font-sansLight text-xs text-center text-primary-400`}
`

export const StyledTd = styled.td.attrs({
  className: "StyledTd"
})`
  ${tw` border-b-2 border-primary-100 p-1`}
`

export const StyledFoot = styled.tfoot.attrs({
  className: "StyledFoot"
})`
  ${tw` `}
`

