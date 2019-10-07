import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../styles/colors";
import ActionButton from "../buttons/ActionButton";
import NavButton from "../buttons/NavButton";
import { Ionicons } from "@expo/vector-icons";

const BottomBar = ({
  onPress,
  onPressRecord,
  onPressMemo,
  onPressAddRoutine
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.navBtnArea}>
        <NavButton label={"Memo"} isOn={true} />
        <NavButton label={"Records"} isOn={false} />
      </View>

      <View style={styles.buttonArea}>
        <ActionButton>
          <Ionicons name="ios-search" size={22} color={Colors.lightGray} />
        </ActionButton>
        <ActionButton style={{ marginLeft: 14 }} onPress={onPressAddRoutine}>
          <Ionicons name="ios-add" size={22} color={Colors.lightGray} />
        </ActionButton>
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  wrapper: {
    height: 96,
    backgroundColor: Colors.lightGray,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    alignItems: "center"
  },
  navBtnArea: {
    flexDirection: "row"
  },
  buttonArea: {
    flexDirection: "row"
  }
});
