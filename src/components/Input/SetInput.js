import React from "react";
import { Text, View, TextInput } from "react-native";
import styled from "styled-components/native";

const SetInputWrapper = styled.View`
  flex-direction: row;
  margin-left: 8;
`;

const StyledSetInput = styled.TextInput`
  height: 44;
  width: 50;
  background-color: #181e24;
  color: #fff;
  font-size: 18px;
  letter-spacing: 0;
  font-weight: 700;
  border-top-left-radius: 12;
  border-bottom-left-radius: 12;
  padding-left: 14px;
`;

const UnitTextArea = styled.View`
  height: 44;
  background-color: #181e24;
  border-top-right-radius: 12;
  border-bottom-right-radius: 12;
  padding-right: 14px;
  padding-left: 4px;
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
      value={value}
      numeric
      keyboardAppearance={"dark"}
      keyboardType={"numeric"}
    />
    <UnitTextArea>
      <UnitText>
        {type === "unit" ? "kg" : type === "reps" ? "Reps" : ""}
      </UnitText>
    </UnitTextArea>
  </SetInputWrapper>
);

export default SetInput;

SetInput.defaultProps = {
  value: 100,
  type: "unit"
};
