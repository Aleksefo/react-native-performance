import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
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
    backgroundColor: 'pink',
  },
})

export default HomeScreen
