import React from 'react'
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import MovieListScreen, {IMovieData} from '../screens/MovieListScreen'
import MovieDetailsScreen from '../screens/MovieDetailsScreen'
import Strings from '../values/Strings'

export type RootStackParamList = {
  Home: undefined
  MovieStack: MovieStackParamList
}
export type MovieStackParamList = {
  MovieList: undefined
  MovieDetails: {movieDataItem: IMovieData}
}

const MovieStack = createStackNavigator<MovieStackParamList>()
const Drawer = createDrawerNavigator<RootStackParamList>()

const MovieStackNavigator = () => {
  return (
    <MovieStack.Navigator>
      <MovieStack.Screen
        name="MovieList"
        component={MovieListScreen}
        options={{title: Strings.movieListScreen}}
      />
      <MovieStack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={{title: Strings.movieDetailsScreen}}
      />
    </MovieStack.Navigator>
  )
}

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="MovieStack" component={MovieStackNavigator} />
      </Drawer.Navigator>
      <StatusBar barStyle="dark-content" />
    </NavigationContainer>
  )
}

export default RootStackNavigator
