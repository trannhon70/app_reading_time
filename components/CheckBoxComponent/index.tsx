import { COlORS } from "@/constants/Colors";
import { IForm } from "@/pages/FreeTryal";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { CheckBox } from "react-native-elements";

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
}

const CheckBoxComponent = (props: ITextFeld) => {
  const { label, onchange, error, text } = props;
  const [checkCount, setCheckCount] = useState(0);
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);

  useEffect(() => {
    let count = 0;
    if (check) count++;
    if (check1) count++;
    if (check2) count++;
    if (check3) count++;
    if (check4) count++;
    if (check5) count++;
    if (check6) count++;
    // Cập nhật giá trị của checkCount
    setCheckCount(count);
    if (check === true) {
      onchange(2);
    }
    if (check1 === true) {
      onchange(3);
    }
    if (check2 === true) {
      onchange(4);
    }
    if (check3 === true) {
      onchange(5);
    }
    if (check4 === true) {
      onchange(6);
    }
    if (check5 === true) {
      onchange(7);
    }
    if (check6 === true) {
      onchange(8);
    }
  }, [check, check1, check2, check3, check4, check5, check6]);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <Text style={styles.label}>{label} :</Text>
        </View>
        <View style={[styles.inputcontainer, { flexWrap: "wrap" }]}>
          <CheckBox
            title="T2"
            checked={check}
            onPress={() => setCheck(!check)}
            disabled={checkCount >= 1 && !check}
          />
          <CheckBox
            title="T3"
            checked={check1}
            onPress={() => setCheck1(!check1)}
            disabled={checkCount >= 1 && !check1}
          />
          <CheckBox
            title="T4"
            checked={check2}
            onPress={() => setCheck2(!check2)}
            disabled={checkCount >= 1 && !check2}
          />
          <CheckBox
            title="T5"
            checked={check3}
            onPress={() => setCheck3(!check3)}
            disabled={checkCount >= 1 && !check3}
          />
          <CheckBox
            title="T6"
            checked={check4}
            onPress={() => setCheck4(!check4)}
            disabled={checkCount >= 1 && !check4}
          />
          <CheckBox
            title="T7"
            checked={check5}
            onPress={() => setCheck5(!check5)}
            disabled={checkCount >= 1 && !check5}
          />
          <CheckBox
            title="CN"
            checked={check6}
            onPress={() => setCheck6(!check6)}
            disabled={checkCount >= 1 && !check6}
          />
        </View>
        <View>{error && <Text style={{ color: "red" }}>{text}</Text>}</View>
      </View>
    </View>
  );
};

export default CheckBoxComponent;
