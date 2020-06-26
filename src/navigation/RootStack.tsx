import React, {useState} from 'react'
import {StatusBar, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Animated from 'react-native-reanimated'
import {IMovieData} from '../screens/MovieListScreen'
import LinearGradient from 'react-native-linear-gradient'
import {Colors} from '../values'
import {CustomDrawerContent} from './CustomDrawerContent'
import MainStackNavigator from './MainStackNavigator'

export type RootStackParamList = {
  Home: undefined
  MovieList: undefined
  MovieDetails: {movieDataItem: IMovieData}
}

const Drawer = createDrawerNavigator()

const RootStackNavigator = () => {
  const [progress, setProgress] = useState(new Animated.Value(0))
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  })
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  })
  const animatedStyle = {borderRadius, transform: [{scale}]}

  return (
    <NavigationContainer>
      <LinearGradient
        //todo set proper colors
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.mainContainer}>
        <Drawer.Navigator
          drawerType="slide"
          overlayColor={Colors.transparent}
          drawerStyle={styles.drawerStyles}
          drawerContent={(props) => {
            // @ts-ignore
            setProgress(props.progress)
            return <CustomDrawerContent {...props} />
          }}
          drawerContentOptions={{
            activeBackgroundColor: Colors.transparent,
            activeTintColor: Colors.white,
            inactiveTintColor: Colors.white,
          }}
          sceneContainerStyle={styles.sceneContainerStyle}>
          <Drawer.Screen name="MainStack">
            {(props) => <MainStackNavigator {...props} style={animatedStyle} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </LinearGradient>
      <StatusBar barStyle="light-content" />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  drawerStyles: {flex: 1, width: '50%', backgroundColor: Colors.transparent},
  sceneContainerStyle: {backgroundColor: Colors.transparent},
})

export default RootStackNavigator
