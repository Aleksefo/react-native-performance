import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native'
import APIKeys from '../values/APIKeys'
import Colors from '../values/Colors'
import Animated from 'react-native-reanimated'
import Config from '../values/Config'
import GridListItem from '../components/GridListItem'

const ListScreen = (props) => {
  const [isLoading, setLoading] = useState(true)
  const [sort, setSort] = useState('hot')
  const [data, setData] = useState([])
  // const [scrollY] = useState(new Animated.Value(0))

  useEffect(() => {
    setLoading(true)
    fetch(
      // `${Config.redditURL}${Config.subRedditName}${sort}.json?sort=new&t=month`,
      `${Config.movieDB}?api_key=${APIKeys.movieDB}`,
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [sort])

  const formatData = (data, numColumns) => {
    let numberOfElementsLastRow = data.length % numColumns
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({key: `blank-${numberOfElementsLastRow}`, empty: true})
      numberOfElementsLastRow++
    }

    return data
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'green',
      }}>
      <Text>List Screen</Text>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          style={styles.loading}
          color={Colors.primary}
        />
      ) : (
        <FlatList
          data={formatData(data.results, 2)}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          style={{
            flex: 1,
          }}
          renderItem={({item}) => (
            <GridListItem
              channelDataItem={item}
              navigation={props.navigation}
            />
          )}
        />
        // <FlatList
        //   data={data.results}
        //   keyExtractor={(data) => data.id.toString()}
        //   style={styles.flatListContainer}
        //   // contentContainerStyle={styles.flatListBottom}
        //   // onScroll={Animated.event([
        //   //   {
        //   //     nativeEvent: {
        //   //       contentOffset: {
        //   //         y: scrollY,
        //   //       },
        //   //     },
        //   //   },
        //   // ])}
        //   // scrollEventThrottle={16}
        //   renderItem={({item}) => (
        //     <TouchableOpacity
        //       key={item.id.toString()}
        //       onPress={() => handleLinkPress(item.data.permalink)}
        //       style={styles.postContainer}>
        //       <View style={styles.titleContainer}>
        //         <View style={{flex: 1, flexDirection: 'row'}}>
        //           <Text
        //             style={styles.titleText}
        //             numberOfLines={3}
        //             ellipsizeMode="tail">
        //             {item.original_title}
        //           </Text>
        //         </View>
        //         <Image
        //           source={{
        //             uri: `http://image.tmdb.org/t/p/w500${item.poster_path}`,
        //           }}
        //           style={styles.imageStyle}
        //         />
        //       </View>
        //       <View style={styles.infoContainer}>
        //         <View style={styles.infoTextContainer}>
        //           <Text
        //             style={styles.infoText}
        //             numberOfLines={3}
        //             ellipsizeMode="tail">
        //             {item.overview}
        //           </Text>
        //         </View>
        //         {/*<FontAwesome*/}
        //         {/*  name="comment"*/}
        //         {/*  size={16}*/}
        //         {/*  color={Colors.primary}*/}
        //         {/*  style={styles.iconStyle}*/}
        //         {/*/>*/}
        //         {/*<Text style={styles.infoText}>{item.data.ups}</Text>*/}
        //         {/*<AntDesign*/}
        //         {/*  name="like1"*/}
        //         {/*  size={17}*/}
        //         {/*  color={Colors.primary}*/}
        //         {/*  style={styles.iconStyle}*/}
        //         {/*/>*/}
        //         {/*<Text style={styles.infoText}>{item.data.num_comments}</Text>*/}
        //       </View>
        //     </TouchableOpacity>
        //   )}
        // />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  loading: {height: '80%'},
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerStyle: {
    paddingTop: 48,
    paddingBottom: 24,
    // shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 24,
    textAlign: 'center',
  },
  headerShadow: {
    height: 1,
    // shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.62,
    // backgroundColor: Colors.gray200,
    elevation: 4,
  },
  flatListContainer: {
    padding: 8,
    flex: 1,
  },
  flatListBottom: {
    paddingBottom: 256,
  },
  postContainer: {
    borderWidth: 1,
    borderRadius: 4,
    // borderColor: Colors.gray200,
    backgroundColor: Colors.white,
    margin: 4,
    padding: 4,
    // height: 96,
    width: '100%',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  titleContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 18,
  },
  imageStyle: {width: 50, height: 50},
  infoText: {
    fontSize: 14,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flairText: {
    // backgroundColor: Colors.gray100,
    // color: Colors.gray500,
    marginLeft: 4,
    paddingHorizontal: 2,
    fontSize: 14,
  },
  iconStyle: {marginHorizontal: 4},
  sortingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    width: '100%',
    bottom: 32,
  },
})

export default ListScreen
