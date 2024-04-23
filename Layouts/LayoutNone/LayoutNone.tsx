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
      <LinearGradient
        style={[
          {
            width: "100%",
            height: "100%",
            flex: 1,
          },
        ]}
        colors={["#FFC5DB", "white"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Animated.View
          style={[
            {
              width: "100%",
              height: "100%",
              flex: 1,
            },
            { transform: [{ scale: fadeLayout }] },
          ]}
        >
          {/* <Toaster />
          <Loading /> */}
          {/* <KeyboardAvoidingView
            style={Styles.Outer}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={20}
          >
            <View style={{ ...Styles.Container }}>
              <View style={Styles.ContainerBody}>
                <ScrollView
                  style={Styles.Main}
                  contentContainerStyle={Styles.MainChild}
                >
                  {children}
                </ScrollView>
              </View>
            </View>
          </KeyboardAvoidingView>
          <FooterWrapper>
            <>{footer}</>
          </FooterWrapper> */}
        </Animated.View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LayoutNone;
