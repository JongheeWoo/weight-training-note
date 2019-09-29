import React from "react";
import { Text, View, TextInput } from "react-native";
import styled from "styled-components/native";

const StyledTitleInput = styled.TextInput`
  height: 44;
  background-color: #181e24;
  color: #fff;
  font-size: 18px;
  letter-spacing: 0;
  font-weight: 700;
  border-radius: 12;
  padding: 0 14px;
`;

const ExerciseNameInput = ({ onChange, value }) => (
  <View>
    <StyledTitleInput
      placeholder={"Exercise Name"}
      placeholderTextColor={"#788084"}
      onChange={onChange}
      value={value}
      keyboardAppearance={"dark"}
    ></StyledTitleInput>
  </View>
);

export default ExerciseNameInput;
