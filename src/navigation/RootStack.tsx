/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createStackNavigator, StackScreenProps} from '@react-navigation/stack'
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

type RootStackParamList = {
  Home: undefined
  Profile: {userId: string}
  Feed: {sort: 'latest' | 'top'} | undefined
  Details: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

type ProfileScreenNavigationProp = StackScreenProps<RootStackParamList, 'Home'>

const HomeScreen = ({navigation}: ProfileScreenNavigationProp) => (
  <SafeAreaView style={{flex: 1}}>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
)

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  )
}

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      <StatusBar barStyle="dark-content" />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
})

export default RootStack
