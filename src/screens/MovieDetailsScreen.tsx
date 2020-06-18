import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native'
import {RouteProp} from '@react-navigation/native'
import {MovieStackParamList} from '../navigation/RootStack'

type MovieDetailsScreenProp = RouteProp<MovieStackParamList, 'MovieDetails'>

type Props = {
  route: MovieDetailsScreenProp
}

const MovieDetailsScreen = ({route}: Props) => {
  const {movieDataItem} = route.params
  return (
    <View>
      <ImageBackground
        source={{
          uri: `http://image.tmdb.org/t/p/w500${movieDataItem.backdrop_path}`,
        }}
        // defaultSource={IMAGES.default}
        style={styles.backdrop}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
          }}>
          <Text>back</Text>
          <Text>{movieDataItem.title}</Text>
        </View>
      </ImageBackground>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: `http://image.tmdb.org/t/p/w500${movieDataItem.poster_path}`,
          }}
          // defaultSource={IMAGES.default}
          style={styles.poster}
        />
        <View>
          <Text>Orig lang {movieDataItem.original_language}</Text>
          <Text>Release date {movieDataItem.release_date}</Text>
          <Text>score {movieDataItem.vote_average}/10</Text>
        </View>
      </View>
      <Text>Overview:</Text>
      <Text>{movieDataItem.overview}</Text>
      <Text>Trailers:</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 1.78,
  },
  poster: {
    width: Dimensions.get('window').width / 4,
    height: (Dimensions.get('window').width / 4) * 1.5,
    marginTop: -((Dimensions.get('window').width / 4) * 1.5) / 2,
    marginLeft: 16,
  },
})

export default MovieDetailsScreen
