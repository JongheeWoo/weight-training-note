import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../assets/colors";
import HomeCardHeader from "./HomeCardHeader";
import HomeExerciseList from "./HomeExerciseList";
import { withNavigation } from "react-navigation";

const HomeCard = props => {
  return (
    <TouchableOpacity
      style={styles.cardWrapper}
      onPress={() => {
        props.navigation.navigate("RoutineDetail");
      }}
    >
      <HomeCardHeader
        date={props.date}
        title={props.title}
        state={props.state}
      />
      <HomeExerciseList exercise={props.exercise} />
    </TouchableOpacity>
  );
};

export default withNavigation(HomeCard);

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
