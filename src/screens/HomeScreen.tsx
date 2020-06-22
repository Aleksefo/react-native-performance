import React from 'react'
import {View, Text, SafeAreaView, Button, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('MovieList')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default HomeScreen
