import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import RoutineDetailScreen from "../screens/RoutineDetailScreen";
import AddRoutineScreen from "../screens/AddRoutineScreen";

const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  RoutineDetail: RoutineDetailScreen,
  AddRoutine: {
    screen: AddRoutineScreen,
    navigationOptions: {}
  }
});

// const ModalStack = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         header: null
//       }
//     },
//     AddRoutine: {
//       screen: AddRoutineScreen,
//       navigationOptions: {
//         header: null
//       }
//     }
//   },
//   {
//     mode: "modal"
//   }
// );

export default createAppContainer(HomeNavigator);
