import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

class DocumentsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
    this.arrayholder = [];
  }

  componentDidMount() {
    const documentList = [
      { key: 'birth', name: 'Birth Certificate' },
      { key: 'cedula', name: 'Community Tax Certificate (Cedula)' },
      { key: 'death', name: 'Death Certificate' },
      { key: 'idp', name: 'International Driving Permit' },
      { key: 'marriage', name: 'Marriage Certificate' },
      { key: 'nbi-clearance', name: 'NBI Clearance' },
      { key: 'non-prof-driv', name: 'Non-Professional Driver License' },
      { key: 'occupational-permit', name: 'Occupational Permit' },
      { key: 'passport', name: 'Passport' },
      { key: 'pwd', name: 'Person With Disability (PWD) ID Card' },
      { key: 'perm-resident', name: 'Permanent Resident Visa' },
      { key: 'police-clearance', name: 'Police Clearance' },
      { key: 'postal-id', name: 'Postal ID' },
      { key: 'prof-driv', name: 'Professional Driver License' },
      { key: 'reg-birth', name: 'Register a Birth' },
      { key: 'reg-nurse', name: 'Register as Nurse' },
      { key: 'reg-psych', name: 'Register as Psychologist' },
      { key: 'reg-social-worker', name: 'Register as Social Worker' },
      { key: 'reg-teacher', name: 'Register as Teacher' },
      { key: 'reg-chainsaw', name: 'Register Chainsaw' },
      { key: 'senior', name: 'Senior Citizen ID' },
      { key: 'solo-parent', name: 'Solo Parent ID' },
      { key: 'voter-id', name: 'Voter ID' }
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
              onPress={this.props.navigation.navigate('DocumentViewScreen')}
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

export default DocumentsScreen;

DocumentsScreen.navigationOptions = {
  title: 'Documents',
};
