import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Colors from "../../styles/colors";

const StyledTouchableOpacity = styled.TouchableOpacity`
  height: 44;
  background-color: ${Colors.lightGrayOpacity10};
  color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 12;
`;

const ButtonSmallSingle = ({ style, onPress, children }) => (
  <View style={style}>
    <StyledTouchableOpacity onPress={onPress}>
      <View>{children}</View>
    </StyledTouchableOpacity>
  </View>
);

export default ButtonSmallSingle;
