import React from "react";
import { Text, View, TextInput } from "react-native";
import styled from "styled-components/native";

const StyledTitleInput = styled.TextInput`
  height: 55;
  background-color: #181e24;
  color: #fff;
  font-size: 24px;
  letter-spacing: 0;
  font-weight: 900;
  font-style: italic;
  border-radius: 12;
  padding: 0 16px;
`;

const TitleInput = ({ onChange, value }) => (
  <View>
    <StyledTitleInput
      placeholder={"Routine Name"}
      placeholderTextColor={"#788084"}
      onChange={onChange}
      value={value}
      keyboardAppearance={"dark"}
    ></StyledTitleInput>
  </View>
);

export default TitleInput;
