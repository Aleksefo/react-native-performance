import React, {useState} from 'react'
import {Button, Image, Text, StatusBar, StyleSheet, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer'
import Animated from 'react-native-reanimated'
import HomeScreen from '../screens/HomeScreen'
import MovieListScreen, {IMovieData} from '../screens/MovieListScreen'
import MovieDetailsScreen from '../screens/MovieDetailsScreen'
import Strings from '../values/Strings'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import Theme from '../values/Theme'

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

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/*<DrawerItemList {...props} />*/}
      <Image
        source={require('../../node_modules/react-native/Libraries/NewAppScreen/components/logo.png')}
        style={{height: 100, width: 100}}
      />
      <Text>RN performance</Text>
      <DrawerItem
        label="Home"
        labelStyle={{marginLeft: -16}}
        onPress={() => props.navigation.navigate('Home')}
        // icon={}
      />
      <DrawerItem
        label="MovieList"
        onPress={() => props.navigation.navigate('MovieList')}
      />
      <DrawerItem
        label="MovieDetails"
        onPress={() => props.navigation.navigate('MovieDetails')}
      />
    </DrawerContentScrollView>
  )
}

const MovieStackNavigator = ({navigation, style}) => {
  return (
    <Animated.View style={[styles.stack, style]}>
      <MovieStack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerStyle: {backgroundColor: 'transparent'},
          // headerTitle: null,
          headerLeft: () => (
            <Icon
              name="md-menu"
              size={30}
              color="white"
              onPress={() => navigation.toggleDrawer()}
              style={{marginLeft: Theme.sizeM, marginTop: Theme.sizeS}}
            />
          ),
        }}>
        <MovieStack.Screen name="Home" component={HomeScreen} />

        <MovieStack.Screen
          name="MovieList"
          component={MovieListScreen}
          options={{title: Strings.movieListScreen}}
        />
        <MovieStack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={{
            title: Strings.movieDetailsScreen,
            headerTitle: '',
            headerLeft: () => (
              <Icon
                name="md-arrow-back"
                size={30}
                color="white"
                onPress={() => navigation.goBack()}
                style={{marginLeft: Theme.sizeM, marginTop: Theme.sizeS}}
              />
            ),
          }}
        />
      </MovieStack.Navigator>
    </Animated.View>
  )
}

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
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{flex: 1}}>
        <Drawer.Navigator
          drawerType="slide"
          overlayColor="transparent"
          drawerStyle={styles.drawerStyles}
          drawerContent={(props) => {
            setProgress(props.progress)
            return <CustomDrawerContent {...props} />
          }}
          drawerContentOptions={{
            activeBackgroundColor: 'transparent',
            activeTintColor: 'white',
            inactiveTintColor: 'white',
          }}
          sceneContainerStyle={{backgroundColor: 'transparent'}}>
          <Drawer.Screen name="MovieStack">
            {(props) => (
              <MovieStackNavigator {...props} style={animatedStyle} />
            )}
          </Drawer.Screen>
        </Drawer.Navigator>
      </LinearGradient>
      <StatusBar barStyle="dark-content" />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  stack: {flex: 1, overflow: 'hidden'},
  drawerStyles: {flex: 1, width: '50%', backgroundColor: 'transparent'},
})

export default RootStackNavigator
