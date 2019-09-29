import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../styles/colors";

const NavButton = ({ isOn, style, label }) => (
  <TouchableOpacity style={styles.wrapper}>
    <View style={isOn ? styles.dotActive : styles.dotDeactive} />
    <Text style={isOn ? styles.textActive : styles.textDeactive}>{label}</Text>
  </TouchableOpacity>
);

export default NavButton;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 18,
    marginTop: 2,
    height: 52
  },
  dotActive: {
    backgroundColor: Colors.bgNavy,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 4
  },
  dotDeactive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 4,
    backgroundColor: "transparent"
  },
  textActive: {
    fontSize: 18,
    fontWeight: "900",
    color: Colors.bgNavy
  },
  textDeactive: {
    fontSize: 18,
    fontWeight: "900",
    color: Colors.bgNavy,
    opacity: 0.2
  }
});
