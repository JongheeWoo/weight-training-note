import React from "react";
import { Text, View, Dimensions } from "react-native";
import styled from "styled-components/native";
import Colors from "../../styles/colors";
import InputCardHeader from "./InputCardHeader";
import SetInputListItem from "./SetInputListItem";
import IconWithLabelButton from "../buttons/IconWithLabelButton";
import ExerciseNameInput from "../Input/ExerciseNameInput";

const InputCardWrapper = styled.View`
  background-color: ${Colors.lightNavy};
  padding: 16px;
  border-radius: 24;
  width: 100%;
`;

const InputCard = ({}) => (
  <InputCardWrapper>
    <InputCardHeader />
    <SetInputListItem />
    <SetInputListItem />
    <SetInputListItem />
    <IconWithLabelButton />
  </InputCardWrapper>
);

export default InputCard;
