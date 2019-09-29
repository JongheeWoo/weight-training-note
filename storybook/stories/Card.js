import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import CenterView from "./CenterView";
import HomeCard from "../../src/components/list/HomeCard";
import InputCard from "../../src/components/list/InputCard";

storiesOf("Card", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("HomeCard", () => (
    <HomeCard date="test" title="title" state="state" exercise={[]} />
  ))
  .add("InputCard", () => <InputCard />);
