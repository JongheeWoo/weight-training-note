import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Colors from "../assets/colors";

// TODO react-native-vector-icons install: https://www.youtube.com/watch?v=B75yZwYS4z8

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.bgNavy }}>
        <SafeAreaView style={{ backgroundColor: Colors.bgNavy }} />
        {/* SECTION monthIndicatorArea */}
        <View style={styles.monthIndicatorArea}>
          <Text>September 2019</Text>
          {/* <FontAwesomeIcon icon="coffee" /> */}
        </View>
        <SafeAreaView style={{ backgroundColor: Colors.bgNavy }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  monthIndicatorArea: {
    height: 60,
    backgroundColor: "red"
  },
  monthIndicatorText: {}
});

// git test
