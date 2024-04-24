import { COlORS } from "@/constants/Colors";
import moment from "moment";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
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
  const dateDefault = new Date();
  const [dateVal, setDateVal] = useState(dateDefault);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const hideDatePicker = () => {
    // setDatePickerVisibility(false)
  };

  const handleConfirm = (date: any) => {
    // editable && onChange?.(moment(date).toDate().toISOString())
    hideDatePicker();
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <Text style={styles.label}>{label} :</Text>
        </View>
        <View style={styles.inputcontainer}>
          <Button title="Open" onPress={() => setOpen(true)} />
          <DateTimePickerModal
            // ref={ref}
            // isVisible={isDatePickerVisible}
            mode="time"
            date={moment(dateVal).toDate()}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            minuteInterval={30} // set the step to 10 minutes
            is24Hour={false}
            locale="vi_VI"
            // disabled={!editable}
            display="spinner" // display a spinner instead of a scroll for minutes
            // timeZoneOffsetInMinutes={timeZoneOffset} // display AM/PM in the picker
          />
        </View>
      </View>
    </View>
  );
};

export default DatePickerComponent;
