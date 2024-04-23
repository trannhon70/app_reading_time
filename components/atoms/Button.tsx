import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { scalePoint } from '@/utils/common'
import { COlORS } from '@/constants/Colors'

interface ButtonProps extends TouchableOpacityProps {
  mode?: 'default' | 'error' | 'success' | 'warning' | 'primary' | 'secondary'
  children: string
}

const Button: React.FC<ButtonProps> = ({ mode = 'default', children, ...props }) => {
  const Styles = StyleSheet.create({
    container: {
      // backgroundColor: COlORS.black,
      width: '100%',
      height: scalePoint(56),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      borderColor: COlORS.gray[50],
      borderWidth: 1
    },
    elevation: {
      shadowColor: COlORS.gray[100],
      elevation: 6
    },
    text: {
      color: COlORS.white,
      fontWeight: '600',
      fontSize: scalePoint(14)
    },
    shadowProp: {
      shadowOffset: { width: -2, height: 4 },
      shadowColor: '#171717',
      shadowOpacity: 0.2,
      shadowRadius: 3
    }
  })
  const bgColor = {
    default: COlORS.black,
    error: COlORS.red,
    success: COlORS.green,
    warning: COlORS.orange,
    primary: COlORS.primary,
    secondary: COlORS.white
  }

  const textColor = {
    default: COlORS.white,
    error: COlORS.white,
    success: COlORS.white,
    warning: COlORS.white,
    primary: COlORS.white,
    secondary: COlORS.primary
  }

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.9}
      style={[Styles.container, { backgroundColor: bgColor[mode] }, Styles.elevation, props.style]}
    >
      <Text style={[Styles.text, { color: textColor[mode] }]}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button
