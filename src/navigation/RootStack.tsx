import React, {useState} from 'react'
import {Image, Text, StatusBar, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
  DrawerNavigationProp,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'
import Animated from 'react-native-reanimated'
import HomeScreen from '../screens/HomeScreen'
import MovieListScreen, {IMovieData} from '../screens/MovieListScreen'
import MovieDetailsScreen from '../screens/MovieDetailsScreen'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import {Theme, Strings, Colors} from '../values'

export type RootStackParamList = {
  Home: undefined
  MovieList: undefined
  MovieDetails: {movieDataItem: IMovieData}
}

const MainStack = createStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator()

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      {/*<DrawerItemList {...props} />*/}
      <Image
        source={require('../../node_modules/react-native/Libraries/NewAppScreen/components/logo.png')}
        style={styles.logo}
      />
      <Text>RN performance</Text>
      <DrawerItem
        label="Home"
        // labelStyle={{marginLeft: -16}}
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

type MainStackNavigatorProps = {
  navigation: DrawerNavigationProp<RootStackParamList>
  style: {}
}

const MainStackNavigator = ({navigation, style}: MainStackNavigatorProps) => {
  return (
    <Animated.View style={[styles.stack, style]}>
      <MainStack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerStyle: {backgroundColor: 'transparent', height: 100},
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
          headerBackground: () => (
            <LinearGradient
              colors={['transparent', 'black', 'black']}
              style={styles.headerBackground}
              start={{x: 0, y: 1}}
              end={{x: 0, y: 0}}
            />
          ),
          headerTitleStyle: {
            color: '#fff',
            marginTop: Theme.sizeS,
            ...Theme.fonts.bodyLarge,
          },
        }}>
        <MainStack.Screen name="Home" component={HomeScreen} />
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
      </MainStack.Navigator>
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
        style={styles.mainContainer}>
        <Drawer.Navigator
          drawerType="slide"
          overlayColor="transparent"
          drawerStyle={styles.drawerStyles}
          drawerContent={(props) => {
            // @ts-ignore
            setProgress(props.progress)
            return <CustomDrawerContent {...props} />
          }}
          drawerContentOptions={{
            activeBackgroundColor: 'transparent',
            activeTintColor: 'white',
            inactiveTintColor: 'white',
          }}
          sceneContainerStyle={styles.sceneContainerStyle}>
          <Drawer.Screen name="MovieStack">
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
  stack: {flex: 1, overflow: 'hidden'},
  drawerStyles: {flex: 1, width: '50%', backgroundColor: Colors.transparent},
  sceneContainerStyle: {backgroundColor: Colors.transparent},
  headerBackground: {flex: 1},
  logo: {height: 100, width: 100},
})

export default RootStackNavigator
