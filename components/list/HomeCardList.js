import React from "react";
import { Text, View } from "react-native";
import HomeCard from "./HomeCard";

const HomeCardList = ({ routine }) => {
  const homeCardList = routine.map(({ date, title, state, exercise }, key) => {
    return (
      <HomeCard
        date={date}
        title={title}
        state={state}
        key={key}
        exercise={exercise}
      />
    );
  });
  return <View>{homeCardList}</View>;
};

export default HomeCardList;
