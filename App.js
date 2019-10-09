import React from "react";

import HomeNavigator from "./src/navigations/HomeNavigator";
import { DataProvider } from "./src/contexts/DataProvider";
import env from "./src/configs/env";
import { initialize as firebaseInitialize } from "./src/configs/firebase";
import { saveRoutine } from "./src/configs/database";

firebaseInitialize();

// saveRoutine({
//   userId: "test",
//   title: "Back and Shoulder",
//   status: "done",
//   exercises: [
//     {
//       name: "Triceps Extention",
//       minWeight: 30,
//       maxWeight: 40,
//       unit: "lbs",
//       sets: 5,
//       reps: 3
//     },
//     {
//       name: "Reverse Dumbbell Fly",
//       minWeight: 30,
//       maxWeight: 40,
//       unit: "lbs",
//       sets: 5,
//       reps: 3
//     },
//     {
//       name: "Incline Dumbbell Press",
//       minWeight: 30,
//       maxWeight: 40,
//       unit: "lbs",
//       sets: 5,
//       reps: 3
//     }
//   ]
// });

let App = props => (
  <DataProvider>
    <HomeNavigator {...props} />
  </DataProvider>
);

if (env.isStorybook) {
  // tslint:disable-next-line:no-var-requires
  App = require("./storybook").default;
}
export default App;
