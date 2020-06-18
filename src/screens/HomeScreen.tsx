import React from 'react'
import {View, Text, SafeAreaView, Button} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('MovieStack')}
        />
      </View>
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({
//   container: {},
// })

export default HomeScreen
