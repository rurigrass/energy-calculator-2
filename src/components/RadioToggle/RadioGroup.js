import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;

  & > * {
    margin: 0 1.5rem 1rem 0;
  }
`;

const RadioGroup = props => {
  const { name, selectedOption, options, changeFn} = props;

  console.log('name: ', name);
  console.log('options: ', options);
  console.log('selectedOption: ', selectedOption);
  return (
    <Wrapper>
      <h5>{name}</h5>
      {
        options.map((option => {
          return (
            <div className="ui radio checkbox">
              <input
                type="radio"
                name={option}
                checked={selectedOption === option}
                onChange={changeFn}
              />
              <label>{option}</label>
            </div>
          );
      }))
      }
    </Wrapper>
  );
};
RadioGroup.propTypes = {
  name: PropTypes.string,
  selectedOption: PropTypes.string,
  options: PropTypes.array,
  changeFn: PropTypes.func,
}

export default RadioGroup;
