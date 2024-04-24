import { COlORS } from "@/constants/Colors";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
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

const DatePickerComponent = (props: ITextFeld) => {
  const { label } = props;
  const [date, setDate] = useState(dayjs());
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <Text style={styles.label}>{label} :</Text>
        </View>
        <View style={styles.inputcontainer}>
          <View>
            {/* <DateTimePicker
              mode="single"
              date={date}
              onChange={(params: any) => setDate(params.date)}
            /> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DatePickerComponent;
