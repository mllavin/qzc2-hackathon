import React from 'react';
import ConfigView from '../components/ConfigView';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ConfigView />;
}

SettingsScreen.navigationOptions = {
  title: 'PDA: Philippine Documents Assistant',
};
