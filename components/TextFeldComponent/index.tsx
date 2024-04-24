import { COlORS } from "@/constants/Colors";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 5,
  },
  body: {
    borderColor: COlORS.gray[50],
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  inputcontainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
  },
  inputIcon: {
    width: "10%",
  },
  inputText: {
    width: "90%",
    fontSize: 16,
    paddingHorizontal: 10,
    borderColor: COlORS.yellow[100],
    shadowColor: COlORS.yellow[100],
    borderWidth: 1,
    fontWeight: "600",
    height: 40,
    borderRadius: 6,
  },
  focusedInput: {
    borderColor: "white",
    borderWidth: 1,
    elevation: 6,
  },
});

interface ITextFeld {
  icon?: any;
  label?: string;
  value?: string;
  placeholder?: string;
  onchange?: any;
  password?: boolean;
}

const TextFeldComponent = (props: ITextFeld) => {
  const { icon, label, value, placeholder, onchange, password = false } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <Text style={styles.label}>{label} :</Text>
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.inputIcon}>
            <Image style={{ minWidth: 30, maxWidth: 30 }} source={icon} />
          </Text>
          <TextInput
            style={[
              styles.inputText,
              isFocused === true && styles.focusedInput,
            ]}
            onChange={onchange}
            onFocus={handleFocus}
            value={value}
            placeholder={placeholder}
            onBlur={handleBlur}
            secureTextEntry={password}
          />
        </View>
      </View>
    </View>
  );
};

export default TextFeldComponent;
