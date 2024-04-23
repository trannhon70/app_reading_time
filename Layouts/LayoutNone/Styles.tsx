import { StyleSheet } from 'react-native'
import { scalePoint } from '@/utils/common'
import { theme } from '@/constants/theme'

export const Styles = StyleSheet.create({
  BorderNone: {
    borderBottomWidth: 0
  },

  Outer: {
    flex: 1,
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: 7
  },
  ContainerBody: { flex: 1 },
  Container: {
    // backgroundColor: theme.color.white.default,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'
  },
  Main: {
    flex: 1
  },
  MainChild: {
    flexGrow: 1
  },
  NavBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: scalePoint(60),
    width: '100%',
    paddingTop: scalePoint(6),
    paddingBottom: scalePoint(6)
    // backgroundColor: 'red'
  },
  NavBarContainer: {
    paddingHorizontal: scalePoint(20),
    borderBottomWidth: scalePoint(1),
    borderBottomColor: theme.color.gray.default,
    borderStyle: 'solid'
  },
  Heading: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  TitleScreen: {
    fontWeight: '700',
    fontSize: scalePoint(24),
    paddingHorizontal: scalePoint(10),
    color: theme.color.black.default
    // marginTop: 7,
  },
  TitleLeft: {
    color: theme.color.black[200],
    fontWeight: '600',
    fontSize: scalePoint(14)
    // lineHeight: 30,
    // marginTop: 7,
    // paddingLeft: 12
  },

  Handler: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  HandlerLeft: {
    width: scalePoint(164)
  },
  HandlerRight: {
    width: scalePoint(76),
    padding: 0
  }
})
