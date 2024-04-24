import TextFeldComponent from "@/components/TextFeldComponent";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { Button } from "@/components/atoms";
import SelectComponent from "@/components/SelectComponent";
import CheckBoxComponent from "@/components/CheckBoxComponent";
import DatePickerComponent from "@/components/DatePickerComponent";
const styles = StyleSheet.create({
  tryFreeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    backgroundColor: "rgb(233 219 235)",
    height: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
});

const DataCheck = [{ id: 1, value: 2 }] as any;

const FreeTryal = () => {
  const icon = require("@/assets/images/book.svg");
  const logo = require("@/assets/images/header-logo.png");
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1, padding: 5 }}>
        <ScrollView>
          <View style={{ paddingHorizontal: "5%" }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Image
                style={{ minWidth: 30, maxWidth: 240, maxHeight: 55 }}
                source={logo}
              />
            </View>
            <TextFeldComponent
              icon={icon}
              label="Email"
              placeholder="Nhập email"
            />
            <TextFeldComponent
              icon={icon}
              label="Password"
              placeholder=""
              password={true}
            />
            <TextFeldComponent
              icon={icon}
              label="Confirm Password"
              placeholder=""
              password={true}
            />
            <TextFeldComponent icon={icon} label="Nickname" placeholder="" />
            <TextFeldComponent
              icon={icon}
              label="Age or grade"
              placeholder=""
            />
            <TextFeldComponent icon={icon} label="Phone Numbe" placeholder="" />

            <View>
              <Text style={styles.label}>Hope Class :</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <CheckBox
                title="Raz-kids"
                checked={checked}
                onPress={() => setChecked(!checked)}
              />
              <CheckBox
                title="Epic"
                checked={checked}
                onPress={() => setChecked(!checked)}
              />
            </View>
            {/* <DatePickerComponent label="Start Date" /> */}
            <TextFeldComponent icon={icon} label="Start Date" />
            <CheckBoxComponent label="Hope day " />

            <SelectComponent label="Desired time" placeholder="" />

            <View style={styles.tryFreeContainer}>
              <Button
                style={{
                  height: "auto",
                  width: 150,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: 20,
                }}
                mode="primary"
              >
                Apply
              </Button>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default FreeTryal;
