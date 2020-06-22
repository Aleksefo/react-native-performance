import React from 'react'
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native'
import {RouteProp} from '@react-navigation/native'
import Spacing from '../components/Spacing'
import {RootStackParamList} from '../navigation/RootStack'
import Colors from '../values/Colors'
import Strings from '../values/Strings'
import Theme from '../values/Theme'

type MovieDetailsScreenProp = RouteProp<RootStackParamList, 'MovieDetails'>

type Props = {
  route: MovieDetailsScreenProp
}

const MovieDetailsScreen = ({route}: Props) => {
  const {movieDataItem} = route.params
  return (
    <SafeAreaView>
      <ImageBackground
        source={{
          uri: `http://image.tmdb.org/t/p/w500${movieDataItem.backdrop_path}`,
        }}
        // defaultSource={IMAGES.default}
        style={styles.backdrop}>
        <View style={styles.backgroundContainer}>
          <Text style={styles.title}>{movieDataItem.title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Image
            source={{
              uri: `http://image.tmdb.org/t/p/w500${movieDataItem.poster_path}`,
            }}
            // defaultSource={IMAGES.default}
            style={styles.poster}
          />
          <View>
            <Text style={styles.details}>
              {Strings.originalLanguage}
              {movieDataItem.original_language.toUpperCase()}
            </Text>
            <Text style={styles.details}>
              {Strings.releaseDate}
              {movieDataItem.release_date}
            </Text>
            <Text style={styles.details}>
              {Strings.score}
              {movieDataItem.vote_average}/10
            </Text>
          </View>
        </View>
        <Spacing size="m" />
        <Text style={styles.details}>{Strings.overview}</Text>
        <Spacing size="m" />
        <Text style={styles.description}>{movieDataItem.overview}</Text>
        <Spacing size="m" />
        <Text style={styles.details}>{Strings.trailers}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Theme.sizeM,
  },
  backdrop: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 1.78,
  },
  poster: {
    width: Dimensions.get('window').width / 3.5,
    height: (Dimensions.get('window').width / 3.5) * 1.5,
    marginTop: -((Dimensions.get('window').width / 3.5) * 1.5) / 2,
    borderWidth: 2,
    borderColor: Colors.white,
    marginRight: Theme.sizeM,
  },
  title: {
    ...Theme.fonts.h2,
    color: Colors.white,
  },
  backgroundContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingLeft: Theme.sizeM,
  },
  detailsContainer: {
    flexDirection: 'row',
    height: ((Dimensions.get('window').width / 3.5) * 1.5) / 2,
    alignItems: 'flex-end',
  },
  details: {
    ...Theme.fonts.bodyLarge,
  },
  description: {
    ...Theme.fonts.body,
  },
})

export default MovieDetailsScreen
