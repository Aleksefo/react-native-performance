import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {StyleSheet, TouchableOpacity, Image} from 'react-native'
import {IMovieData} from '../screens/MovieListScreen'
import Config from '../values/Config'
import Theme from '../values/Theme'

type Props = {
  movieDataItem: IMovieData
}

const GridListItem = ({movieDataItem}: Props) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MovieDetails', {movieDataItem})}>
      <Image
        source={{
          uri: `${Config.movieDBImage}${movieDataItem.poster_path}`,
        }}
        // defaultSource={IMAGES.default}
        style={styles.imageStyle}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    width: Theme.w / 2 - 4,
    margin: 2,
    flex: 1,
    height: (Theme.w / 2 - 4) * 1.5,
  },
})

export default GridListItem
