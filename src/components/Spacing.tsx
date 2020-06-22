import * as React from 'react'
import {View} from 'react-native'
import {Theme} from '../values'

/**
 * Spacing component. Example of usage:
 *
 *  <Spacing size='m' />
 *
 */

type Props = {
  /**
   * Defines width and height of the component.
   */
  size: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
  style?: {}
}

export default (props: Props) => {
  let dimension
  switch (props.size) {
    case 'xxs':
      dimension = Theme.sizeXXS
      break
    case 'xs':
      dimension = Theme.sizeXS
      break
    case 's':
      dimension = Theme.sizeS
      break
    case 'm':
      dimension = Theme.sizeM
      break
    case 'l':
      dimension = Theme.sizeL
      break
    case 'xl':
      dimension = Theme.sizeXL
      break
    case 'xxl':
      dimension = Theme.sizeXXL
      break
    default:
      dimension = Theme.sizeM
      break
  }
  return <View style={[{height: dimension, width: dimension}, props.style]} />
}
