import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

class LinksScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
    this.arrayholder = [];
  }

  componentDidMount() {
    const documentList = [
      { key: 'death', name: 'Death Certificate' },
      { key: 'idp', name: 'International Driving Permit' },
    ];
    this.setState({
      data: documentList,
    });
    this.arrayholder = documentList;
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '92%',
          backgroundColor: '#CED0CE',
          marginLeft: '4%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Search here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              bottomDivider
              chevron
              onPress={() => this.props.navigation.navigate('DocumentView', item)}
            />
          )}
          // ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          stickyHeaderIndices={[0]}
        />
      </View>
    );
  }
}

export default LinksScreen;

LinksScreen.navigationOptions = {
  title: 'Saved Documents',
};
