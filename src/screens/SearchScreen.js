import React, { Component } from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../styles/colors";

const Container = styled.View``;

const Header = styled.View`
  width: 100%;
  flex-direction: row;
`;

const Text = styled.Text``;

class SearchScreen extends Component {
  static sharedElements = (navigation, otherNavigation, showing) => {
    console.log(navigation, otherNavigation, showing);
    return [`search`];
  }

  render() {
    return (
      <Container>
        <Header>
          <SharedElement id={`search`}>
            <Ionicons name="ios-search" size={22} color={Colors.lightGray} />
          </SharedElement>
          <Text>Hello World</Text>
        </Header>
      </Container>
    );
  }
}

export default SearchScreen;