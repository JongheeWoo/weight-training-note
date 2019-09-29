import React from "react";
import { Text, View, TextInput } from "react-native";
import styled from "styled-components/native";

const StyledSetInput = styled.TextInput`
  height: 44;
  background-color: #181e24;
  color: #fff;
  font-size: 18px;
  letter-spacing: 0;
  font-weight: 700;
  border-radius: 12;
  padding: 0 14px;
`;

const SetInput = ({ onChange, value }) => (
  <View>
    <StyledSetInput
      placeholder={value}
      placeholderTextColor={"#788084"}
      onChange={onChange}
      value={value}
      keyboardAppearance={"dark"}
    ></StyledSetInput>
  </View>
);

export default SetInput;

SetInput.defaultProps = {
  value: "100 lbs"
};
