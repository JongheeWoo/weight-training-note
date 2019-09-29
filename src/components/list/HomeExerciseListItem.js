import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const HomeExerciseListItem = ({
  name,
  minWeight,
  maxWeight,
  unit,
  sets,
  reps
}) => (
  <View style={styles.wrapper}>
    <View style={styles.nameArea}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.weightArea}>
        <Text style={styles.weight}>{minWeight}</Text>
        <Text style={styles.weight}>-</Text>
        <Text style={styles.weight}>{maxWeight}</Text>
        <Text style={styles.weight}>{unit}</Text>
      </View>
    </View>
    <View style={styles.setsAndRepsArea}>
      <Text style={styles.setsAndReps}>{sets}</Text>
      <Text style={styles.setsAndReps}> Sets</Text>
      <Text style={styles.setsAndReps}> x </Text>
      <Text style={styles.setsAndReps}>{reps}</Text>
      <Text style={styles.setsAndReps}> Reps</Text>
    </View>
  </View>
);

export default HomeExerciseListItem;

HomeExerciseListItem.defaultProps = {
  name: "Triceps Extention",
  minWeight: 32,
  maxWeight: 40,
  unit: "lbs",
  sets: 3,
  reps: 8
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16
  },
  nameArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  name: {
    color: Colors.lightGray,
    fontSize: 18,
    fontWeight: "600",
    opacity: 0.87
  },
  weightArea: {
    flexDirection: "row"
  },
  weight: {
    fontSize: 14,
    fontWeight: "300",
    color: Colors.primaryBlue
  },
  setsAndRepsArea: {
    flexDirection: "row",
    marginTop: 3
  },
  setsAndReps: {
    color: Colors.lightGray,
    opacity: 0.5,
    fontSize: 14,
    fontWeight: "300"
  }
});
