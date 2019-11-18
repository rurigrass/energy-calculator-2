import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import SectionTitle from './SectionTitle';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 10px;
`;

const LabeledInput = styled.div`

  input {
    margin-top: 1rem !important;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button,
  input[type=date]::-webkit-inner-spin-button,
  input[type=date]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

const AddReadingSection = (props) => {
  const {title} = props;
  return (
<>
    <SectionTitle>{title}</SectionTitle>
    <Wrapper>
      <LabeledInput>
        <label>Date</label>
        <input name="date" type="date" onChange={props.onChangeDate} />
      </LabeledInput>

      <LabeledInput>
        <label>Value</label>
        <input type="number" onChange={props.onChangeValue} />
      </LabeledInput>
    </Wrapper>
  </>
  );
};


    {/* <EnergyInput
        energyAmount={e => {
          this.setState({ firstEnergyAmount: e.target.value });
        }}
        readingDate={e => {
          const firstReadingDate = new Date(`${e.target.value}`);
          this.setState({ firstReadingDate });
        }}
        energyType={this.state.energyType}
        readingType="first"
      />
        <div className="ui right labeled input" style={{ marginTop: "10px" }}> */}

{/* ------------------------- */}

      {/* {props.readingType === "first" ? (
        <div>
          <input
            type="number"
            max="999999"
            placeholder="First Reading"
            onChange={props.energyAmount}
          />
          <input type="date" onChange={props.readingDate} />
        </div>
      ) : (
        <div>
          <input
            type="number"
            max="999999"
            placeholder="Second Reading"
            onChange={props.energyAmount}
          />
          <input type="date" onChange={props.readingDate} />
        </div>
      )}
      {props.energyType === "Electricity" ? (
        <div className="ui basic label">kWh</div>
      ) : (
        <div className="ui basic label">m³</div>
      )}
    </div>
    </Wrapper> */}


AddReadingSection.propTypes = {
  title: PropTypes.string.isRequired,
}
export default AddReadingSection;
