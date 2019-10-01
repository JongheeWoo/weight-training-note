import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../styles/colors";

const Wrapper = styled.TouchableOpacity`
  background-color: ${Colors.lightGrayOpacity10};
  color: #fff;
  border-radius: 12;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  padding-right: 20;
  margin-top: 16;
`;

const IconArea = styled.View`
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
`;
const ButtonLabel = styled.Text`
  font-size: 18px;
  color: #dae3e5;
  letter-spacing: 0;
  font-weight: 700;
`;

const IconWithLabelButton = ({ onPress, label }) => (
  <Wrapper onPress={onPress} label={label}>
    <IconArea>
      <Ionicons name="ios-add" size={18} color={"white"} />
    </IconArea>
    <ButtonLabel>{label}</ButtonLabel>
  </Wrapper>
);

export default IconWithLabelButton;

IconWithLabelButton.defaultProps = {
  label: "Hello Press"
};
