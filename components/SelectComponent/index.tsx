import { COlORS } from "@/constants/Colors";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
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
    width: "100%",
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
  label?: string;
  data?: any;
  onchange?: any;
  error?: boolean;
  text?: string;
}

const SelectComponent = (props: ITextFeld) => {
  const { label, data, onchange, error, text } = props;

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <Text style={styles.label}>{label} :</Text>
        </View>
        <View style={styles.inputcontainer}>
          <SelectList
            boxStyles={{ minWidth: "100%" }}
            setSelected={(val: any) => onchange(val)}
            data={data}
            save="value"
            search={false}
          />
        </View>
        <View>{error && <Text style={{ color: "red" }}>{text}</Text>}</View>
      </View>
    </View>
  );
};

export default SelectComponent;
