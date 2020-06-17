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
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import ListScreen from '../screens/ListScreen'

type RootStackParamList = {
  Home: undefined
  Profile: {userId: string}
  Feed: {sort: 'latest' | 'top'} | undefined
  Details: undefined
  List: undefined
}

const Stack = createStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator()

type ProfileScreenNavigationProp = StackScreenProps<RootStackParamList, 'Home'>

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
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />

        <Drawer.Screen name="List" component={ListScreen} />

        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
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
