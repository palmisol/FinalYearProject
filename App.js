/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import Amplify, { API, graphqlOperation } from 'aws-amplify';

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import * as queries from './src/graphql/queries';

// async function simpleQuery(){

// const allBookings = await API.graphql(graphqlOperation(queries.listBookingSystems));
// console.log("Bookings")
// console.log(allBookings);

// }

function App() {

  return (
    <View style={styles.container}>
      <View style = {styles.text}>
        <Text>Press the button</Text>
      </View>
      <View style = {styles.button}>
      <Button
          title="Press me please"
          onPress={() => console.log("Pressed")}/>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey'
  },
  button: {
    flex: 1,
    backgroundColor:"white"
  },
  text: {
    flex: 1,
  }

})


export default App;
