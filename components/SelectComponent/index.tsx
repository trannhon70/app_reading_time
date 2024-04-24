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
  value?: string;
  placeholder?: string;
  onchange?: any;
}
const data = [
  { key: "1", value: "Mobiles", disabled: true },
  { key: "2", value: "Appliances" },
  { key: "3", value: "Cameras" },
  { key: "4", value: "Computers", disabled: true },
  { key: "5", value: "Vegetables" },
  { key: "6", value: "Diary Products" },
  { key: "7", value: "Drinks" },
];
const SelectComponent = (props: ITextFeld) => {
  const { label, value, placeholder, onchange } = props;
  const [selected, setSelected] = React.useState("");
  console.log(selected, "selec");

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <Text style={styles.label}>{label} :</Text>
        </View>
        <View style={styles.inputcontainer}>
          {/* <Text style={styles.inputIcon}>
            <Image style={{ minWidth: 30, maxWidth: 30 }} source={icon} />
          </Text> */}
          <SelectList
            boxStyles={{ minWidth: 320 }}
            setSelected={(val: any) => setSelected(val)}
            data={data}
            save="value"
          />
        </View>
      </View>
    </View>
  );
};

export default SelectComponent;
