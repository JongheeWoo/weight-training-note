import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import CenterView from "./CenterView";

import TitleInput from "../../src/components/Input/TitleInput";
import ExerciseNameInput from "../../src/components/Input/ExerciseNameInput";
import IconButton from "../../src/components/buttons/IconButton";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

storiesOf("Test", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("IconTest", () => (
    <IconButton>
      <FontAwesome name="ellipsis-h" size={32} color="green" />
    </IconButton>
  ));
