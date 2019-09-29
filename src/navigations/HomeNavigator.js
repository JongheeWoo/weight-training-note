import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import RoutineDetailScreen from "../screens/RoutineDetailScreen";

const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  RoutineDetail: RoutineDetailScreen
});

export default createAppContainer(HomeNavigator);
