import React from "react";
import { Text, View, TextInput } from "react-native";
import styled from "styled-components/native";
import { PropTypes } from "prop-types";

const SetInputWrapper = styled.View`
  flex-direction: row;
  border-radius: 12;
  background-color: #181e24;
  margin-left: 8;
`;

const StyledSetInput = styled.TextInput`
  height: 44;
  color: #fff;
  width: 54;
  font-size: 18px;
  letter-spacing: 0;
  font-weight: 700;
  padding-left: 14px;
`;

const UnitTextArea = styled.View`
  height: 44;
  padding-right: 14px;
  align-items: center;
  justify-content: center;
`;

const UnitText = styled.Text`
  color: #fff;
  font-size: 14px;
  letter-spacing: 0;
  font-weight: 700;
`;

const SetInput = ({ onChange, value, type, style }) => (
  <SetInputWrapper style={style}>
    <StyledSetInput
      placeholder={value}
      placeholderTextColor={"#788084"}
      onChange={onChange}
      // value={String()}
      numeric
      keyboardAppearance={"dark"}
      keyboardType={"numeric"}
      maxLength={3}
    />
    <UnitTextArea>
      <UnitText>
        {type === "unit" ? "kg" : type === "reps" ? "Reps" : ""}
      </UnitText>
    </UnitTextArea>
  </SetInputWrapper>
);

export default SetInput;

// ANCHOR Failed prop type: Invalid prop 'value' of type 'number' supplied to 'TextInput, expected 'string'

SetInput.defaultProps = {
  value: "100",
  type: "unit"
};

// SetInput.propTypes = {
//   value: PropTypes.number
// };
