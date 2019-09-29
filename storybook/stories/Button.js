import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import CenterView from "./CenterView";
import ActionButton from "../../components/buttons/ActionButton";
import IconButton from "../../components/buttons/IconButton";

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("with ActionButton", () => (
    <ActionButton>
      <Text>Hello WOrld</Text>
    </ActionButton>
  ))
  .add("with IconButton", () => (
    <IconButton>
      <Text>Hello WOrld</Text>
    </IconButton>
  ));
