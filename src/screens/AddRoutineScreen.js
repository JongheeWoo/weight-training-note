import React, { Component, useContext } from "react";
import { View, Text, SafeAreaView, ScrollView, Button } from "react-native";
import { withNavigation } from "react-navigation";

import Colors from "../styles/colors";
import { DataContext } from "../contexts/DataProvider";
import InputCard from "../components/list/InputCard";
import IconWithLabelButton from "../components/buttons/IconWithLabelButton";

// TODO react-native-vector-icons install: https://www.youtube.com/watch?v=B75yZwYS4z8

const AddRoutineScreen = props => {
  const [routine, setRoutine] = useContext(DataContext);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.bgNavy }}>
      <SafeAreaView style={{ backgroundColor: Colors.bgNavy }} />

      {/* SECTION ContentSection */}

      <View style={{ paddingHorizontal: 16 }}>
        <InputCard />
        <IconWithLabelButton label={"Add Exercise"} />
      </View>

      <SafeAreaView style={{ backgroundColor: Colors.lightGray }} />
    </ScrollView>
  );
};

export default withNavigation(AddRoutineScreen);
