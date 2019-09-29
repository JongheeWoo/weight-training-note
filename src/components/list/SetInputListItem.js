import React from "react";
import { Text, View } from "react-native";
import ButtonSmallSingle from "../buttons/ButtonSmallSingle";
import Typo from "../../styles/typography";
import SetInput from "../Input/SetInput";

const SetInputListItem = ({ onPress }) => (
  <View style={{ flexDirection: "row" }}>
    <ButtonSmallSingle style={{ width: 68 }} onPress={onPress}>
      <Text style={Typo.smButtonLabel}>Set 1</Text>
    </ButtonSmallSingle>
    <SetInput />
  </View>
);

export default SetInputListItem;
