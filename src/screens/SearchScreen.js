import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { SharedElement } from 'react-navigation-shared-element';
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../styles/colors";

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  width: 100%;
  flex-direction: row;
`;

const Text = styled.Text``;

class SearchScreen extends Component {
  static sharedElements = (navigation, otherNavigation, showing) => {
    return [{ id: 'search' }];
  }

  render() {
    return (
      <Container>
        <SharedElement id={`search`} style={StyleSheet.absoluteFill}>
          <Ionicons name="ios-search" size={100} color={Colors.primaryBlue} />
        </SharedElement>
      </Container>
    );
  }
}

export default SearchScreen;