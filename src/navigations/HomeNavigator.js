import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import RoutineDetailScreen from "../screens/RoutineDetailScreen";
import AddRoutineScreen from "../screens/AddRoutineScreen";
import Colors from "../styles/colors";
import IconButton from "../components/buttons/IconButton";

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
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#04080F"
      }
    }
  }
});

export default createAppContainer(HomeNavigator);
