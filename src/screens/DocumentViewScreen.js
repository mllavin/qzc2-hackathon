import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';

const DocumentView = props => {
	return (
        <ScrollView style={styles.container}>
           <View style={styles.row}>
              <Text style={styles.header}>{props.navigation.state.params.name}</Text>
           </View>
           <View style={styles.row}>
               <Text style={{fontSize:15}}>Requirements:</Text>
               <CheckBox title="Your original and copy of valid Philippines Driver’s license"></CheckBox>
               <CheckBox title={"2 of your 2x2 or passport size coloured ID picture with white background"} ></CheckBox>
               <CheckBox title={"Your photocopy of the O.R and C.R of your vehicle registration"} ></CheckBox>
               <CheckBox title={"Your completed AAP membership application form (if applicable) or you can complete it at any AAP office."} ></CheckBox>
               <CheckBox title={"Your completed Philippine International Driving Permit (PIDP) Application Form (if applicable) or you can complete it at any AAP office"} ></CheckBox>
           </View>
           <View style={styles.row}>
               <Text style={{fontSize:15}}>Procedures:</Text>
               <Text>1 Prepare the requirements</Text>
               <Text>2 Visit a suitable AAP office. Present the required documents and follow all of officer’s guiding to apply for your PIDP. Pay the applicable fee then waiting for obtaining your PIDP.</Text>
           </View>
           <View style={styles.row}>
               <Text style={{fontSize:15}}>Office location:</Text>
           </View>
           <View style={styles.row}>
               <Image
                   style={{width: 350, height: 250}}
                   source={require('../../assets/images/map.jpeg')}
               />
               <Text style={{fontSize:15}}>Like  Comment  Watch  Save</Text>
           </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25
  },
  container : {
    paddingTop: 25,
  },
  row : {
    padding : 10
  },
  listContainerStyle : {
    marginTop : 0
  },
  listItemContainerStyle : {
    marginTop: 0,
    borderLeftWidth : 1,
    borderRightWidth : 1,
    borderColor : '#cbd2d9'
  }
});

export default DocumentView;