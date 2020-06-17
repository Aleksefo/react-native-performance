import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native'

const HomeScreen = ({navigation}: ProfileScreenNavigationProp) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {},
})

export default HomeScreen
