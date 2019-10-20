import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const IconButton = ({ children, style }) => (
  <TouchableOpacity style={[styles.wrapper, style]}>
    {children}
  </TouchableOpacity>
);

export default IconButton;

const styles = StyleSheet.create({
  wrapper: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center"
  }
});

// ANCHOR set component as a defaultProps
// IconButton.defaultProps = {
//   children:
// };
