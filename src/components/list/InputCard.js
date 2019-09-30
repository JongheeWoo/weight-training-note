import React from "react";
import { Text, View, Dimensions } from "react-native";
import styled from "styled-components/native";
import Colors from "../../styles/colors";
import InputCardHeader from "./InputCardHeader";
import SetInputListItem from "./SetInputListItem";

const InputCardWrapper = styled.View`
  background-color: ${Colors.lightNavy};
  padding: 16px;
  border-radius: 24;
  width: ${Dimensions.get("window").width - 16};
`;

const InputCard = ({ params }) => (
  <InputCardWrapper>
    <InputCardHeader />
    <SetInputListItem />
    <SetInputListItem />
    <SetInputListItem />
  </InputCardWrapper>
);

export default InputCard;
