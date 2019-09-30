import React from "react";
import { Text, View } from "react-native";
import ButtonSmallSingle from "../buttons/ButtonSmallSingle";
import ExerciseNameInput from "../Input/ExerciseNameInput";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../styles/colors";

const HeaderArea = styled.View`
  flex-direction: row;
  display: flex;
`;

const InputCardHeader = () => (
  <HeaderArea>
    <ButtonSmallSingle
      style={{
        marginRight: 8,
        width: 44
      }}
    >
      <Ionicons name="ios-add" size={18} color={Colors.lightGray} />
    </ButtonSmallSingle>
    <ExerciseNameInput />
  </HeaderArea>
);

export default InputCardHeader;