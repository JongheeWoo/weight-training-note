import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import CenterView from "./CenterView";
import HomeCard from "../../src/components/list/HomeCard";
import InputCard from "../../src/components/list/InputCard";
import {
  LargeheavywRed,
  Title1BlackprimaryBlue,
  Title1HeavywBlack,
  Title1HeavywGray,
  Body1HeavywGray,
  Body1BoldprimaryBlue,
  Body1Boldwhite,
  Body1SemiboldwGrayOpacity87,
  CaptionregularpaleBlueOpacity87,
  CaptionlightwGrayOpacity5,
  CaptionlightprimaryBlueOpacity87,
  CaptionthinprimaryBlue
} from "../../src/styles/typography";

const Container = styled.View`
  padding-top: 100px;
  flex: 1;
  flex-direction: column;
`;

storiesOf("Typography", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Typography1", () => (
    <Container>
      <LargeheavywRed>Hello World</LargeheavywRed>
      <Title1BlackprimaryBlue>Hello World</Title1BlackprimaryBlue>
      <Title1HeavywBlack>Hello World</Title1HeavywBlack>
      <Title1HeavywGray>Hello World</Title1HeavywGray>
      <Body1HeavywGray>Hello World</Body1HeavywGray>
      <Body1BoldprimaryBlue>Hello World</Body1BoldprimaryBlue>
      <Body1Boldwhite>Hello World</Body1Boldwhite>
      <Body1SemiboldwGrayOpacity87>Hello World</Body1SemiboldwGrayOpacity87>
      <CaptionregularpaleBlueOpacity87>
        Hello World
      </CaptionregularpaleBlueOpacity87>
      <CaptionlightwGrayOpacity5>Hello World</CaptionlightwGrayOpacity5>
      <CaptionlightprimaryBlueOpacity87>
        Hello World
      </CaptionlightprimaryBlueOpacity87>
      <CaptionthinprimaryBlue>Hello World</CaptionthinprimaryBlue>
    </Container>
  ));
