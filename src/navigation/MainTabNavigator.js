import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DocumentsScreen from '../screens/DocumentsScreen';
import SavedDocumentsScreen from '../screens/SavedDocumentsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const DocumentsStack = createStackNavigator(
  {
    Documents: DocumentsScreen,
  },
  config
);

DocumentsStack.navigationOptions = {
  tabBarLabel: 'Documents',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-document' : 'md-document'} />
  ),
};

DocumentsStack.path = '';

const SavedDocumentsStack = createStackNavigator(
  {
    SavedDocuments: SavedDocumentsScreen,
  },
  config
);

SavedDocumentsStack.navigationOptions = {
  tabBarLabel: 'Saved Documents',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-filing' : 'md-filing'} />
  ),
};

SavedDocumentsStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  DocumentsStack,
  SavedDocumentsStack,
  SettingsStack,
}, {
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: '#183693'
    }
  }
});

tabNavigator.path = '';

export default tabNavigator;
