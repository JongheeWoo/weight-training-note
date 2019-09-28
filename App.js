import React from "react";
import HomeNavigator from "./navigation/HomeNavigator";
import { DataProvider } from "./DataProvider";

const App = props => (
  <DataProvider>
    <HomeNavigator {...props} />
  </DataProvider>
);

export default App;
