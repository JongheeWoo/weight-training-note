import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Colors from "../assets/colors";
import MonthIndicator from "../components/header/MonthIndicator";
import HomeCard from "../components/list/HomeCard";
import HomeCardList from "../components/list/HomeCardList";
import BottomBar from "../components/section/BottomBar";

// TODO react-native-vector-icons install: https://www.youtube.com/watch?v=B75yZwYS4z8

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: [
        {
          date: "TUE 14",
          title: "Back and Shoulder",
          state: "done",
          exercise: [
            {
              name: "Triceps Extention",
              minWeight: 30,
              maxWeight: 40,
              unit: "lbs",
              sets: 5,
              reps: 3
            },
            {
              name: "Reverse Dumbbell Fly",
              minWeight: 30,
              maxWeight: 40,
              unit: "lbs",
              sets: 5,
              reps: 3
            },
            {
              name: "Incline Dumbbell Press",
              minWeight: 30,
              maxWeight: 40,
              unit: "lbs",
              sets: 5,
              reps: 3
            }
          ]
        },
        {
          date: "Mon 13",
          title: "Legs and Back",
          state: "failed",
          exercise: [
            {
              name: "Triceps Extention",
              minWeight: 30,
              maxWeight: 40,
              unit: "lbs",
              sets: 5,
              reps: 3
            },
            {
              name: "Reverse Dumbbell Fly",
              minWeight: 30,
              maxWeight: 40,
              unit: "lbs",
              sets: 5,
              reps: 3
            },
            {
              name: "Incline Dumbbell Press",
              minWeight: 30,
              maxWeight: 40,
              unit: "lbs",
              sets: 5,
              reps: 3
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.bgNavy }}>
        <SafeAreaView style={{ backgroundColor: Colors.bgNavy }} />

        {/* SECTION ContentSection */}

        <MonthIndicator />
        <ScrollView>
          <HomeCardList routine={this.state.routine} />
        </ScrollView>
        <BottomBar />
        {/* SECTION ContentSection End */}

        <SafeAreaView style={{ backgroundColor: Colors.lightGray }} />
      </View>
    );
  }
}

// git test
