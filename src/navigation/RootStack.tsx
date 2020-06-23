import React, {useState} from 'react'
import {
  Image,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
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
import Spacing from '../components/Spacing'
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
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={styles.contentContainer}>
      <Spacing size="xl" />
      <View style={{marginLeft: Theme.sizeM}}>
        <Image
          source={require('../../node_modules/react-native/Libraries/NewAppScreen/components/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.appName}>{Strings.appName}</Text>
      </View>
      <Spacing size="xl" />
      <View style={styles.drawerItemList}>
        <DrawerItem
          label={Strings.homeScreen}
          labelStyle={styles.drawerLabel}
          onPress={() => props.navigation.navigate('Home')}
          icon={() => <Icon name="md-home" size={24} color="white" />}
        />
        <DrawerItem
          label={Strings.movieListScreen}
          labelStyle={styles.drawerLabel}
          onPress={() => props.navigation.navigate('MovieList')}
          icon={() => <Icon name="ios-film" size={24} color="white" />}
        />
      </View>
      <DrawerItem
        label={Strings.aboutScreen}
        labelStyle={styles.drawerLabel}
        onPress={() => props.navigation.navigate('About')}
        icon={() => (
          <Icon name="md-help-circle-outline" size={24} color="white" />
        )}
      />
      <Spacing size="l" />
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
  headerTitle: {
    color: Colors.white,
    marginTop: Theme.sizeS,
    ...Theme.fonts.bodyLarge,
  },
  stack: {flex: 1, overflow: 'hidden'},
  drawerStyles: {flex: 1, width: '50%', backgroundColor: Colors.transparent},
  sceneContainerStyle: {backgroundColor: Colors.transparent},
  headerBackground: {flex: 1},
  logo: {height: 50, width: 50},
  iconContainer: {marginLeft: Theme.sizeM, marginTop: Theme.sizeS},
  drawerLabel: {
    color: Colors.white,
    ...Theme.fonts.body,
    marginLeft: -Theme.sizeM,
  },
  appName: {
    color: Colors.white,
    ...Theme.fonts.bodySmall,
  },
  drawerItemList: {flex: 1},
  contentContainer: {flex: 1},
})

export default RootStackNavigator
