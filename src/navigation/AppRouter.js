import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Home, Search, Notifications } from '../screens';
import VideoDetails from '../screens/VideoDetails';
import { colors } from '../style';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Search') {
          iconName = 'search';
        } else if (route.name === 'Notifications') {
          iconName = 'bell';
        }
        return <FontAwesome name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.red,
      inactiveTintColor: colors.gray,
    }}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Notifications" component={Notifications} />
  </Tab.Navigator>
);

const AppRouter = () => {
  const mainScreenOptions = { header: () => null };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={BottomTabs} options={mainScreenOptions} />
      <Stack.Screen name="VideoDetails" component={VideoDetails} />
    </Stack.Navigator>
  );
};

export default AppRouter;
