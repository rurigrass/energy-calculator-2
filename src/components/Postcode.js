import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  width: 50%;

  & > * {
    margin: 0 0 1rem 0;
  }
`;
export const Postcode = () => {

  return (
  <Wrapper>
    <label>Postcode</label>
    <div class="ui input">
      <input type="text" />
    </div>
  </Wrapper>
  )
}
