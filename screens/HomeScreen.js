import React, { Component, useContext } from "react";
import { View, Text, SafeAreaView, ScrollView, Button } from "react-native";
import Colors from "../assets/colors";
import MonthIndicator from "../components/header/MonthIndicator";
import HomeCardList from "../components/list/HomeCardList";
import BottomBar from "../components/section/BottomBar";
import { DataContext } from "../DataProvider";
import { withNavigation } from "react-navigation";

// TODO react-native-vector-icons install: https://www.youtube.com/watch?v=B75yZwYS4z8

const HomeScreen = props => {
  const [routine, setRoutine] = useContext(DataContext);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bgNavy }}>
      <SafeAreaView style={{ backgroundColor: Colors.bgNavy }} />

      {/* SECTION ContentSection */}

      <MonthIndicator />
      <ScrollView>
        <HomeCardList
          routine={routine}
          onPress={key => () => {
            props.navigation.navigate("RoutineDetail");
          }}
        />
      </ScrollView>
      <BottomBar />
      {/* SECTION ContentSection End */}

      <SafeAreaView style={{ backgroundColor: Colors.lightGray }} />
    </View>
  );
};

export default withNavigation(HomeScreen);
