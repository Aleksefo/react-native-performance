import {Platform} from 'react-native'

const fontFamily =
  Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'RobotoMono-Regular'

export default {
  h1: {
    fontSize: 48,
    lineHeight: 56,
    fontWeight: 'bold' as 'bold',
    fontFamily,
  },
  h2: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: 'bold' as 'bold',
    fontFamily,
  },
  h3: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily,
  },
  h4: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily,
  },
  h5: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily,
  },
  body: {
    fontSize: 16,
    fontFamily,
  },
  bodyLarge: {
    fontSize: 20,
    fontFamily,
  },
  bodySmall: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily,
  },
}
