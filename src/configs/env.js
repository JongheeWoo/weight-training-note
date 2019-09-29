import _ from "lodash";
import * as config from "../../config.json";

const reactEnv = _.defaultTo(config.REACT_ENV, "staging");
const env = {
  isProduction: !__DEV__ || reactEnv === "production",
  isStaging: __DEV__ && reactEnv === "staging",
  isStorybook: __DEV__ && reactEnv === "storybook"
};

export default env;
