import React, { Component, useContext } from "react";
import { View, Text, SafeAreaView, ScrollView, Button } from "react-native";
import { withNavigation } from "react-navigation";

import Colors from "../styles/colors";
import MonthIndicator from "../components/header/MonthIndicator";
import HomeCardList from "../components/list/HomeCardList";
import BottomBar from "../components/section/BottomBar";
import { DataContext } from "../contexts/DataProvider";
import InputCard from "../components/list/InputCard";

// TODO react-native-vector-icons install: https://www.youtube.com/watch?v=B75yZwYS4z8

const AddRoutineScreen = props => {
  const [routine, setRoutine] = useContext(DataContext);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bgNavy }}>
      <SafeAreaView style={{ backgroundColor: Colors.bgNavy }} />

      {/* SECTION ContentSection */}

      <View style={{ paddingHorizontal: 16 }}>
        <InputCard />
        <InputCard />
      </View>

      <SafeAreaView style={{ backgroundColor: Colors.lightGray }} />
    </View>
  );
};

export default withNavigation(AddRoutineScreen);
