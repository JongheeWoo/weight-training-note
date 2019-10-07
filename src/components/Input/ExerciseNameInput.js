import React from "react";
import { Text, View, TextInput } from "react-native";
import styled from "styled-components/native";

const StyledTitleInput = styled.TextInput`
  height: 44;
  flex: 1;

  /* min-width: 100%; */
  background-color: #181e24;
  color: #fff;
  font-size: 18px;
  letter-spacing: 0;
  font-weight: 700;
  border-radius: 12;
  padding: 0 14px;
  flex-grow: 1;
`;

const ExerciseNameInput = ({ onChange, value }) => (
  <StyledTitleInput
    placeholder={"Exercise Name"}
    placeholderTextColor={"#788084"}
    onChange={onChange}
    value={value}
    keyboardAppearance={"dark"}
  />
);

export default ExerciseNameInput;
