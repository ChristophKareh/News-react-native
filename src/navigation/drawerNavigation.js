import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator initialRouteName="Home">
    {/* <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
  </Drawer.Navigator>
);

export default DrawerNavigation;
