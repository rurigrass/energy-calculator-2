import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  font-style: normal;
  font-weight: lighter;
  font-size: 14px;
  line-height: 22px;
  color: #003366;
`;

export default (props) => (
  <StyledTitle>{props.children}</StyledTitle>
)
