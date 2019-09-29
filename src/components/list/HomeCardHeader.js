import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StateIcon from "../icons/StateIcon";
import Colors from "../../styles/colors";
import IconButton from "../buttons/IconButton";
import { Ionicons } from "@expo/vector-icons";

const HomeCardHeader = ({ state, date, title }) => (
  <View style={styles.wrapper}>
    <View style={styles.stateAndDate}>
      <StateIcon state={state} />
      <Text style={styles.date}>{date}</Text>
    </View>
    <View style={styles.titleArea}>
      <Text style={styles.title}>{title}</Text>
      <IconButton style={styles.moreButton}>
        <Ionicons
          name="ios-more"
          style={{ color: Colors.lightGray }}
          size={22}
        />
      </IconButton>
    </View>
  </View>
);

export default HomeCardHeader;

const styles = StyleSheet.create({
  wrapper: {},
  stateAndDate: {
    flexDirection: "row",
    marginBottom: 8
  },
  date: {
    color: Colors.blueGray,
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "500",
    marginLeft: 6
  },
  titleArea: {
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    color: Colors.lightGray,
    fontSize: 24,
    fontStyle: "italic",
    fontWeight: "900"
  },
  moreButton: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 12,
    shadowColor: "#000611",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.35,
    shadowRadius: 6.27,

    elevation: 10
  }
});

HomeCardHeader.defaultProps = {
  date: "TUE 14",
  title: "Back and Shoulder",
  state: "done"
};
