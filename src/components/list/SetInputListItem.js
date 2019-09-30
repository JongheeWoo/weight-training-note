import React from "react";
import { Text, View } from "react-native";
import ButtonSmallSingle from "../buttons/ButtonSmallSingle";
import Typo from "../../styles/typography";
import SetInput from "../Input/SetInput";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

InputListWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

const SetInputListItem = ({ onPress, isEditing }) => (
  <InputListWrapper>
    <View style={{ flexDirection: "row" }}>
      <ButtonSmallSingle style={{ width: 68 }} onPress={onPress}>
        <Text style={Typo.smButtonLabel}>Set 1</Text>
      </ButtonSmallSingle>
      <SetInput type="unit" />
      <SetInput type="reps" />
    </View>
    <View>
      {isEditing ? (
        <ButtonSmallSingle style={{ width: 44 }} onPress={onPress}>
          <Ionicons name="ios-checkmark" size={32} color={"white"} />
        </ButtonSmallSingle>
      ) : (
        []
      )}
    </View>
  </InputListWrapper>
);

export default SetInputListItem;

SetInputListItem.defaultProps = {
  isEditing: true
};
