import React, {useEffect, useState} from 'react'
import {StyleSheet, ActivityIndicator, FlatList, View} from 'react-native'
import GridListItem from '../components/GridListItem'
import {Config, Colors, APIKeys} from '../values'

export interface IMovieData {
  title: string
  poster_path: string
  backdrop_path: string
  overview: string
  release_date: string
  original_language: string
  id: number
  vote_average: number
}

const MovieListScreen = () => {
  const [isLoading, setLoading] = useState(true)
  // const [sort, setSort] = useState('hot')
  const [data, setData] = useState<IMovieData[]>([])
  useEffect(() => {
    setLoading(true)
    fetch(`${Config.movieDB}?api_key=${APIKeys.movieDB}`)
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          style={styles.loading}
          color={Colors.primary}
        />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          style={styles.listContainer}
          renderItem={({item}) => <GridListItem movieDataItem={item} />}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {height: '80%'},
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  listContainer: {
    flex: 1,
  },
})

export default MovieListScreen
