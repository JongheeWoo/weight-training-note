import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../assets/colors";

function getColorByState(state) {
  switch (state) {
    case "pending":
      return {
        backgroundColor: Colors.lightGray
      };
    case "done":
      return {
        backgroundColor: Colors.primaryBlue
      };
    case "failed":
      return {
        backgroundColor: Colors.red
      };
  }
}

// TODO Modify Icons

function getIconByState(state) {
  switch (state) {
    case "pending":
      return "ios-timer";
    case "done":
      return "ios-checkmark";
    case "failed":
      return "ios-close";
  }
}

const StateIcon = ({ state }) => {
  const stateIconColor = state ? getColorByState(state) : [];
  const stateIcon = getIconByState(state);
  return (
    <View style={[stateIconColor, styles.button]}>
      <Ionicons name={stateIcon} size={15} style={{ color: "white" }} />
    </View>
  );
};

export default StateIcon;

const styles = StyleSheet.create({
  button: {
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  }
});
