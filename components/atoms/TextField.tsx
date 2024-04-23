import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useRef,
  useState,
} from "react";
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
} from "react-native";
import { theme } from "@/constants/theme";

import { scalePoint } from "@/utils/common";
import { COlORS } from "@/constants/Colors";

const Styles = StyleSheet.create({
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
  Disable: {
    backgroundColor: theme.color.gray[50],
  },
  Input: {
    borderRadius: scalePoint(14),
    fontSize: scalePoint(14),
    fontFamily: theme.font.default,
    fontWeight: "700",
    color: theme.color.black.default,
    height: "100%",
    width: "100%",
  },
  Focused: {
    borderWidth: 2,
    borderColor: COlORS.yellow[100],
    shadowColor: COlORS.yellow[100],
    elevation: 6,
  },
  Title: {
    lineHeight: scalePoint(22),
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
});

interface TextFieldProps {
  title?: string;
  value: string | number;
  placeholder?: string;
  onChange?: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  style?: object;
  type?: "text" | "password" | "number";
  errors?: string | any;
  center?: boolean;
  defaultValue?: string;
  keyboard?: KeyboardTypeOptions;
  isClear?: boolean;
  maximum?: number;
  numberOfLines?: number;
  editable?: boolean;
}
const regexNumber = /^[0-9]+$/;

const TextField: ForwardRefRenderFunction<TextInput, TextFieldProps> = (
  {
    type = "text",
    defaultValue = "0",
    numberOfLines = 1,
    editable = true,
    isClear = true,
    title,
    errors,
    value,
    placeholder,
    center,
    style,
    keyboard,
    onBlur,
    onChange,
    maximum,
    ...props
  }: any,
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);
  const refInput = useRef<TextInput>();
  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };
  const validateInputs = (text: any) => {
    if (type == "number") {
      if (!text) {
        onChange(defaultValue);
      }
      if (regexNumber.test(text)) {
        if (Number(text) > maximum) {
          onChange("");
        } else {
          onChange(text);
        }
      }
    } else {
      onChange(text);
    }
  };

  return (
    <View style={{ ...Styles.Container, ...style }}>
      {title && <Text style={Styles.Title}>{title}</Text>}
      <Pressable
        // onPress={() => refInput.current.focus()}
        style={[
          Styles.InputBox,
          isFocused && Styles.Focused,
          !editable && Styles.Disable,
          numberOfLines > 1 && { height: scalePoint(30 * numberOfLines) },
        ]}
      >
        <TextInput
          ref={(input) => {
            // refInput.current = input
            return ref;
          }}
          style={[
            Styles.Input,
            center && Styles.TextCenter,
            numberOfLines > 1 && { textAlignVertical: "top" },
          ]}
          numberOfLines={numberOfLines}
          autoComplete="off"
          autoCapitalize="none"
          multiline={numberOfLines > 1}
          value={value ? value.toString() : ""}
          keyboardType={type === "number" ? "numeric" : keyboard || "default"}
          secureTextEntry={type === "password"}
          placeholder={placeholder}
          onChangeText={validateInputs}
          placeholderTextColor={theme.color.black[20]}
          onFocus={(e) => {
            editable && setIsFocused(true);
            editable && type === "number" && isClear && onChange("");
            return e;
          }}
          clearTextOnFocus={type === "number" && editable && isClear}
          editable={editable}
          onBlur={handleBlur}
          {...props}
        />
      </Pressable>

      {errors && <Text style={Styles.ErrorMessage}>{errors}</Text>}
    </View>
  );
};

export default forwardRef(TextField);
