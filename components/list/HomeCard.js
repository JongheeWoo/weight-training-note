import React, { PureComponent } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../assets/colors";
import HomeCardHeader from "./HomeCardHeader";
import HomeExerciseListItem from "./HomeExerciseListItem";
import HomeExerciseList from "./HomeExerciseList";

export default class HomeCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity style={styles.cardWrapper}>
        <HomeCardHeader
          date={this.props.date}
          title={this.props.title}
          state={this.props.state}
        />
        <HomeExerciseList exercise={this.props.exercise} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: Colors.lightNavy,
    margin: 16,
    paddingHorizontal: 24,
    paddingVertical: 32,
    borderRadius: 24,
    shadowColor: "#000611",
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.35,
    shadowRadius: 2
  }
});
