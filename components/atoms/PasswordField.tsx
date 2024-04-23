import { useHeaderHeight } from "@react-navigation/elements";
import React, { forwardRef, ForwardRefRenderFunction, useState } from "react";
import {
  KeyboardAvoidingView,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
} from "react-native";
import { scalePoint } from "@/utils/common";
import { COlORS } from "@/constants/Colors";
import { theme } from "@/constants/theme";
// import { Eye, EyeHide } from '@/images/index'

interface PasswordFieldProps {
  title?: string;
  value: string;
  placeholder?: string;
  onChange: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  style?: object;
  errors?: string | any;
  center?: boolean;
  defaultValue?: string;
  keyboard?: KeyboardTypeOptions;
  showPass?: boolean;
}

export const Styles = StyleSheet.create({
  Container: {},
  TextCenter: { textAlign: "center" },
  InputBox: {
    height: scalePoint(56),
    width: "100%",
    paddingHorizontal: scalePoint(8),
    backgroundColor: COlORS.gray[150],
    marginTop: scalePoint(4),
    borderRadius: scalePoint(14),
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  Input: {
    borderRadius: scalePoint(14),
    fontSize: scalePoint(14),
    fontFamily: theme.font.default,
    fontWeight: "700",
    color: theme.color.black.default,
    height: "100%",
    width: "90%",
  },
  Focused: {
    borderWidth: 2,
    borderColor: COlORS.yellow[100],
    shadowColor: COlORS.yellow[100],
    elevation: 6,
  },
  Title: {
    lineHeight: 20,
    fontSize: scalePoint(14),
    color: COlORS.black,
    fontFamily: theme.font.default,
    fontWeight: "600",
  },
  ErrorMessage: {
    color: theme.color.red.default,
    fontSize: scalePoint(14),
    fontFamily: "Open Sans",
    fontWeight: "600",
  },

  ShowPass: {
    width: 30,
    height: "40%",
    justifyContent: "center",
  },
});

const PasswordField: ForwardRefRenderFunction<TextInput, PasswordFieldProps> = (
  {
    title,
    errors,
    value,
    placeholder,
    center,
    style,
    onBlur,
    onChange,
    ...props
  },
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const height = useHeaderHeight();
  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };
  const Eye = require("@/assets/images/logo-signature.png");
  const EyeHide = require("@/assets/images/logo-signature.png");

  return (
    <KeyboardAvoidingView
      style={[Styles.Container, style]}
      keyboardVerticalOffset={height + 47}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
    >
      {title && <Text style={Styles.Title}>{title}</Text>}
      <View style={[Styles.InputBox, isFocused && Styles.Focused]}>
        <TextInput
          ref={ref}
          style={[Styles.Input, center && Styles.TextCenter]}
          autoComplete="off"
          autoCapitalize="none"
          value={value}
          secureTextEntry={!isShow}
          placeholder={placeholder}
          onChangeText={onChange}
          placeholderTextColor={theme.color.black[20]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        <Pressable
          style={Styles.ShowPass}
          onPress={() => setIsShow((curr) => !curr)}
        >
          <View style={{ width: 40, height: 20 }}>
            {/* {isShow ? <Eye /> : <EyeHide />} */}
          </View>
        </Pressable>
      </View>

      {errors && <Text style={Styles.ErrorMessage}>{errors}</Text>}
    </KeyboardAvoidingView>
  );
};

export default forwardRef(PasswordField);
