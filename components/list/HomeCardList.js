import React from "react";
import { Text, View, Button } from "react-native";
import HomeCard from "./HomeCard";

const HomeCardList = ({ routine }, props) => {
  const homeCardList = routine.map(({ date, title, state, exercise }, key) => {
    return (
      <HomeCard
        date={date}
        title={title}
        state={state}
        key={key}
        exercise={exercise}
        navigation={props.navigation}
      />
    );
  });
  return <View>{homeCardList}</View>;
};

export default HomeCardList;
