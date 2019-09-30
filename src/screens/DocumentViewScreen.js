import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const DocumentView = props => {
	return (
      <View>
        <Text>{props.item.name}</Text>
      </View>
    );
};

const styles = StyleSheet.create({});

export default DocumentView;