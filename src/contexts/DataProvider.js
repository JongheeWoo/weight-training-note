import React, { useState, createContext } from "react";

export const DataContext = createContext({});

export const DataProvider = props => {
  const [routine, setRoutine] = useState([
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
  ]);

  return (
    <DataContext.Provider value={[routine, setRoutine]}>
      {props.children}
    </DataContext.Provider>
  );
};
