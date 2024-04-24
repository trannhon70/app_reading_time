import React, { ReactNode, useEffect, useRef } from "react";
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FooterWrapper } from "@/components/organisms";
import { theme } from "@/constants/theme";
import { Styles } from "./Styles";
export interface LayoutNoneProps {
  children: ReactNode;
  footer?: ReactNode;
  disableAnimation?: boolean;
}

const LayoutNone = ({
  children,
  footer,
  disableAnimation,
}: LayoutNoneProps) => {
  const fadeLayout = useRef(
    new Animated.Value(disableAnimation ? 1 : 0.5)
  ).current;

  const fadeIn = () => {
    Animated.spring(fadeLayout, {
      toValue: 1,
      friction: 10,
      tension: 80,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    !disableAnimation && fadeIn();
  }, []);
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.color.white.default }}
    >
      {children}
    </SafeAreaView>
  );
};

export default LayoutNone;
