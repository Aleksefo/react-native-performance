import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer'
import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Spacing from '../components/Spacing'
import {Colors, Strings, Theme} from '../values'

export function CustomDrawerContent(props: DrawerContentComponentProps) {
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

const styles = StyleSheet.create({
  logo: {height: 50, width: 50},
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
