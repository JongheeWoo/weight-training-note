import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

import Colors from "../../styles/colors";
import IconButton from "../buttons/IconButton";

const MonthIndicatorArea = styled.View`
  height: 60px;
  justify-content: flex-end;
  margin-bottom: 9px;
`;

const TextWrapper = styled.View`
  margin-horizontal: 24px;
  flex-direction: row;
  align-items: center;
`;

const DateText = styled.Text`
  font-weight: 200;
  font-style: italic;
  font-size: 24px;
  color: ${Colors.primaryBlue};
  letter-spacing: -0.9;
`;

const MonthText = styled(DateText)`
  font-weight: 900;
  margin-right: 4px;
`;

const IoniconsView = styled(Ionicons)`
  padding-top: 3px;
`;

export default class MonthIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: "September",
      year: 2019
    };
  }

  render() {
    return (
      <MonthIndicatorArea>
        <TextWrapper>
          <MonthText>{this.state.month}</MonthText>
          <DateText>{this.state.year}</DateText>
          <IconButton>
            <IoniconsView
              name="ios-arrow-down"
              size={20}
              color={Colors.primaryBlue}
            />
          </IconButton>
        </TextWrapper>
      </MonthIndicatorArea>
    );
  }
}
