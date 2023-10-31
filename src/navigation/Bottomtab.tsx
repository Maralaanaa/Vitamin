import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';
import Control from '../screens/Control';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'black',
          },
          tabBarInactiveTintColor: 'white',
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({color}) => {
            let Icon;
            if (route.name === 'Control') {
              Icon = <Foundation name="home" size={25} color={color} />;
            } else if (route.name === 'Advice') {
              Icon = (
                <MaterialCommunityIcons
                  name="android-messages"
                  size={25}
                  color={color}
                />
              );
            } else if (route.name === 'Add') {
              Icon = (
                <Entypo
                  name="plus"
                  size={45}
                  color={color}
                  style={styles.plusStyle}
                />
              );
            } else if (route.name === 'History') {
              Icon = <Fontisto name="history" size={25} color={color} />;
            } else {
              Icon = <FontAwesome5 name="user-alt" size={25} color={color} />;
            }
            return Icon;
          },
        })}>
        <Tab.Screen name="Control" component={Control} />
        <Tab.Screen name="Advice" component={Control} />
        <Tab.Screen name="Add" component={Control} />
        <Tab.Screen name="History" component={Control} />
        <Tab.Screen name="Profile" component={Control} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  plusStyle: {
    height: 55,
    width: 55,
    // backgroundColor: 'green',
    borderColor: 'pink',
    borderRadius: 27,
    borderWidth: 5,
    // bottom: 10,
  },
});
export default BottomTab;
