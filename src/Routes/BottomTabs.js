import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// screens
import Rooms from '../screens/RoomsScreen';
import Calendar from '../screens/CalendarScreen';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Rooms" component={Rooms} />
        <Tab.Screen name="Calendar" component={Calendar} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabs;
