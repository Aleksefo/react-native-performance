import {DrawerNavigationProp} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Animated from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../screens/HomeScreen'
import MovieDetailsScreen from '../screens/MovieDetailsScreen'
import MovieListScreen from '../screens/MovieListScreen'
import {Colors, Strings, Theme} from '../values'
import {RootStackParamList} from './RootStack'

type MainStackNavigatorProps = {
  navigation: DrawerNavigationProp<RootStackParamList>
  style: {}
}
const MainStack = createStackNavigator<RootStackParamList>()

const MainStackNavigator = ({navigation, style}: MainStackNavigatorProps) => {
  return (
    <Animated.View style={[styles.stack, style]}>
      <MainStack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerStyle: {backgroundColor: Colors.transparent, height: 100},
          // headerTitle: null,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              hitSlop={Theme.hitSlop}
              style={styles.iconContainer}>
              <Icon name="md-menu" size={30} color={Colors.white} />
            </TouchableOpacity>
          ),
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.transparent, Colors.black, Colors.black]}
              style={styles.headerBackground}
              start={{x: 0, y: 1}}
              end={{x: 0, y: 0}}
            />
          ),
          headerTitleStyle: styles.headerTitle,
        }}>
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: Strings.homeScreen.toUpperCase()}}
        />
        <MainStack.Screen
          name="MovieList"
          component={MovieListScreen}
          options={{title: Strings.movieListScreen.toUpperCase()}}
        />
        <MainStack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={{
            title: Strings.movieDetailsScreen,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                hitSlop={Theme.hitSlop}
                style={styles.iconContainer}>
                <Icon name="md-arrow-back" size={30} color={Colors.white} />
              </TouchableOpacity>
            ),
          }}
        />
      </MainStack.Navigator>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    color: Colors.white,
    marginTop: Theme.sizeS,
    ...Theme.fonts.bodyLarge,
  },
  stack: {flex: 1, overflow: 'hidden'},
  headerBackground: {flex: 1},
  iconContainer: {marginLeft: Theme.sizeM, marginTop: Theme.sizeS},
})

export default MainStackNavigator
