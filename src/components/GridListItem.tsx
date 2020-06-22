import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {Dimensions, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {IMovieData} from '../screens/MovieListScreen'
import Config from '../values/Config'
// import {hitSlop, numColumns, ss, styled, wid} from '../values/styles'

type Props = {
  movieDataItem: IMovieData
}

const GridListItem = ({movieDataItem}: Props) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      // hitSlop={hitSlop}
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
GridListItem.defaultProps = {
  channelDataItem: {
    // title: strings.title,
    thumbnail: 'Default',
    ID: 0,
    followers: 0,
    articles: [{}],
  },
}

const styles = StyleSheet.create({
  imageStyle: {
    width: Dimensions.get('window').width / 2 - 4,
    margin: 2,
    flex: 1,
    height: (Dimensions.get('window').width / 2) * 1.5 - 6,
  },
})

export default GridListItem
