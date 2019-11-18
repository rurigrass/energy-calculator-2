import React from 'react';
import styled from 'styled-components';

import SectionTitle from './SectionTitle';

const Wrapper = styled.div`
  display: grid;
  width: 50%;

  & > * {
    margin: 0 0 1rem 0;
  }
`;
const Postcode = () => {

  return (
  <Wrapper>
    <SectionTitle>Postcode</SectionTitle>
    <div className="ui input">
      <input type="text" />
    </div>
  </Wrapper>
  )
}
export default Postcode;
