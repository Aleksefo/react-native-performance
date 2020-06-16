/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const HomeScreen = () => (
  <SafeAreaView style={{flex: 1}}>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={{backgroundColor: 'pink', flex: 1}}>
        <Text>Hi</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      <StatusBar barStyle="dark-content" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});

export default App;
