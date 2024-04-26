import { COlORS } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";

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
  error?: boolean;
  text?: string;
  setDatePicker?: any;
  datePicker?: any;
}

const DatePickerComponent = (props: ITextFeld) => {
  const { label, onchange, error, text, datePicker } = props;

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <Text style={styles.label}>{label} :</Text>
        </View>
        <View style={styles.inputcontainer}>
          <View style={{ width: "100%" }}>
            <DateTimePicker
              mode="single"
              date={datePicker}
              onChange={(e) => onchange(e)}
              timePicker
            />
          </View>
        </View>
        <View>{error && <Text style={{ color: "red" }}>{text}</Text>}</View>
      </View>
    </View>
  );
};

export default DatePickerComponent;
