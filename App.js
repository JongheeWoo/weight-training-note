import React from "react";
import HomeNavigator from "./navigation/HomeNavigator";
import { DataProvider } from "./DataProvider";
import env from "./src/configs/env";

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
