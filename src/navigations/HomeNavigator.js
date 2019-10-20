import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import HomeScreen from "../screens/HomeScreen";
import RoutineDetailScreen from "../screens/RoutineDetailScreen";
import AddRoutineScreen from "../screens/AddRoutineScreen";
import SearchScreen from "../screens/SearchScreen";
import Colors from "../styles/colors";
import IconButton from "../components/buttons/IconButton";

const HomeNavigator = createSharedElementStackNavigator(
  createStackNavigator,
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    RoutineDetail: RoutineDetailScreen,
    SearchScreen: SearchScreen,
    AddRoutine: {
      screen: AddRoutineScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#04080F"
        }
      }
    }
  }
);

export default createAppContainer(HomeNavigator);
