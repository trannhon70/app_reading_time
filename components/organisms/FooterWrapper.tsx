import React, { ReactNode, useEffect, useState } from 'react'
import { Keyboard, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { scalePoint } from '@/utils/common'
interface FooterWrapperProps {
  children: ReactNode
}
export const Styles = StyleSheet.create({
  NavFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    width: '100%',
    paddingBottom: scalePoint(40),
    height: scalePoint(120),
    backgroundColor: 'transparent'
  }
})
const FooterWrapper: React.FC<FooterWrapperProps> = ({ children }) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true)
    })
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false)
    })

    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])
  if (isKeyboardVisible) return <View style={{ opacity: 0 }}></View>
  return (
    <SafeAreaView>
      <View style={Styles.NavFooterContainer}>{children}</View>
    </SafeAreaView>
  )
}

export default FooterWrapper
