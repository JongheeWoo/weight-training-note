import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../assets/colors";

const ActionButtons = ({ children, style }) => (
  <TouchableOpacity style={[styles.background, style]}>
    {children}
  </TouchableOpacity>
);

export default ActionButtons;

const styles = StyleSheet.create({
  background: {
    width: 52,
    height: 52,
    backgroundColor: Colors.primaryBlue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    shadowColor: "#1C2F4A",
    shadowOffset: {
      width: 0,
      height: 8,
      elevation: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.2
  }
});
