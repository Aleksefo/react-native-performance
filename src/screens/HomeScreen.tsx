import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Colors} from '../values'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Movie List"
        onPress={() => navigation.navigate('MovieList')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
})

export default HomeScreen
