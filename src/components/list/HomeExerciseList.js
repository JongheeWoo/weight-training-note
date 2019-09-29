import React from "react";
import { Text, View } from "react-native";
import HomeExerciseListItem from "./HomeExerciseListItem";

const HomeExerciseList = ({ exercise }) => {
  const exerciseList = exercise.map(
    ({ name, minWeight, maxWeight, unit, sets, reps }, key) => {
      return (
        <HomeExerciseListItem
          key={key}
          name={name}
          minWeight={minWeight}
          maxWeight={maxWeight}
          unit={unit}
          sets={sets}
          reps={reps}
        />
      );
    }
  );
  return <View>{exerciseList}</View>;
};

export default HomeExerciseList;
