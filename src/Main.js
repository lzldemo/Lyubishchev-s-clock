import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

import Clock from './Clock';

import Ionicons from 'react-native-vector-icons/Ionicons';


const Stat = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>计划</Text>
  </View>
);

const Action = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>统计</Text>
  </View>
);

const RootTabs = TabNavigator({
  Time: {
    screen: Clock,
    navigationOptions: {
      tabBarLabel: '时钟',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Stat: {
    screen: Stat,
    navigationOptions: {
      tabBarLabel: '统计',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Action: {
    screen: Action,
    navigationOptions: {
      tabBarLabel: '行动',
      tabBarIcon: ({ tintColor, focused }) => (
        Text
      ),
    },
  },
});

export default RootTabs;