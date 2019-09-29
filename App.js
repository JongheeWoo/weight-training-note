import React from "react";
import HomeNavigator from "./src/navigations/HomeNavigator";
import { DataProvider } from "./src/contexts/DataProvider";
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
