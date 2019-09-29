import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import CenterView from "./CenterView";
import HomeCard from "../../src/components/list/HomeCard";

storiesOf("Card", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("with HomeCard", () => (
    <HomeCard date="test" title="title" state="state" exercise={[]} />
  ));
