import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../assets/colors";
import IconButton from "../buttons/IconButton";

export default class MonthIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: "September",
      year: 2019
    };
  }

  render() {
    return (
      <View style={styles.monthIndicatorArea}>
        <View style={styles.textWrapper}>
          <Text style={styles.monthText}>{this.state.month}</Text>
          <Text style={styles.yearText}>{this.state.year}</Text>
          <IconButton>
            <Ionicons
              name="ios-arrow-down"
              size={20}
              color={Colors.primaryBlue}
              style={styles.icon}
            />
          </IconButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  monthIndicatorArea: {
    height: 60,
    justifyContent: "flex-end",
    marginBottom: 9
  },
  textWrapper: {
    marginHorizontal: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  monthText: {
    color: Colors.primaryBlue,
    fontWeight: "900",
    fontStyle: "italic",
    fontSize: 24,
    letterSpacing: -0.9,
    marginRight: 4
  },
  yearText: {
    color: Colors.primaryBlue,
    fontWeight: "200",
    fontStyle: "italic",
    fontSize: 24,
    letterSpacing: -0.9
  },
  icon: { paddingTop: 3 }
});
