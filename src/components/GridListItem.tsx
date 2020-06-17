import React from 'react'
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native'
import Colors from '../values/Colors'
// import {hitSlop, numColumns, ss, styled, wid} from '../values/styles'

type Props = {
  channelDataItem: {
    title?: string
    thumbnail?: string
    ID?: number
    followers?: number
    articles?: Array<Object>
  }
  navigation: Object
}

const GridListItem = (props: Props) => {
  const {navigation, channelDataItem} = props
  const {imageStyle, itemStyle, itemInvisibleStyle, titleStyle} = styles
  // Renders an empty ListItem if there are not enough items in last row of GridList
  if (channelDataItem.empty === true) {
    return <View style={[itemStyle, itemInvisibleStyle]} />
  }
  return (
    <TouchableOpacity
      // hitSlop={hitSlop}
      onPress={() =>
        navigation.navigate('Channel', {channelDataItem: channelDataItem})
      }>
      <ImageBackground
        source={{
          uri: `http://image.tmdb.org/t/p/w500${channelDataItem.poster_path}`,
        }}
        // defaultSource={IMAGES.default}
        style={imageStyle}>
        <View style={itemStyle}>
          <Text style={[styles.titleThumbnailFontStyle, titleStyle]}>
            {channelDataItem.original_title.toUpperCase()}
          </Text>
        </View>
      </ImageBackground>
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
  itemStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flex: 1,
    height: (Dimensions.get('window').width / 2) * 1.5,
  },
  imageStyle: {
    width: Dimensions.get('window').width / 2,
    // height: 50,
    backgroundColor: 'green',
  },
  itemInvisibleStyle: {
    backgroundColor: 'transparent',
  },
  titleStyle: {
    margin: 15,
  },
  titleThumbnailFontStyle: {
    color: Colors.white,
    // fontFamily: 'HelveticaNeue',
    fontSize: 12,
    // textTransform: 'uppercase', // supported only in iOS
  },
})

export default GridListItem
