import React from "react";
import { Text, View } from "react-native";
import ButtonSmallSingle from "../buttons/ButtonSmallSingle";
import ExerciseNameInput from "../Input/ExerciseNameInput";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../styles/colors";

const HeaderArea = styled.View`
  flex-direction: row;
  /* align-items: stretch; */
  width: 100%;
`;

const InputCardHeader = () => (
  <HeaderArea>
    <ButtonSmallSingle
      style={{
        marginRight: 8,
        width: 44
        // flexBasis: 44,
        // flexGrow: 0,
        // flexShrik: 0,
        // flex: 1
      }}
    >
      <Ionicons name="ios-add" size={18} color={Colors.lightGray} />
    </ButtonSmallSingle>
    <ExerciseNameInput />
  </HeaderArea>
);

export default InputCardHeader;
