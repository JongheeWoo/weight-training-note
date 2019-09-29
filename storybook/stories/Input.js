import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import CenterView from "./CenterView";
import HomeCard from "../../src/components/list/HomeCard";
import TitleInput from "../../src/components/Input/TitleInput";

storiesOf("Input", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("TitleInput", () => <TitleInput />);
