import React from 'react';
import {
  StyledTable,
  StyledHead,
  StyledBody,
  StyledTd,
  StyledTh,
  StyledTr,
  StyledFoot
} from "./Table.styles";

export const Table = ({ children, ...rest}) => {
  return (
    <StyledTable {...rest}>
      {children}
    </StyledTable>
  )
};

Table.Head = ({ children, ...rest}) => {
  return (
    <StyledHead {...rest}>
      {children}
    </StyledHead>
  )
};

Table.Body = ({ children, ...rest}) => {
  return (
    <StyledBody {...rest}>
      {children}
    </StyledBody>
  )
};

Table.TD = ({ children, ...rest}) => {
  return (
    <StyledTd {...rest}>
      {children}
    </StyledTd>
  )
};

Table.TH = ({ children, ...rest}) => {
  return (
    <StyledTh {...rest}>
      {children}
    </StyledTh>
  )
};

Table.TR = ({onClick, children, ...rest}, props) => {

  // const {onClick} = props;

  return (
    <StyledTr
      {...rest}
      onClick={onClick}
    >
      {children}
    </StyledTr>
  )
};

Table.FOOT = ({ children, ...rest}) => {
  return (
    <StyledFoot {...rest}>
      {children}
    </StyledFoot>
  )
};
