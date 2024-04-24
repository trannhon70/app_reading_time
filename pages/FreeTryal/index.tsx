import TextFeldComponent from "@/components/TextFeldComponent";
import { useEffect, useState } from "react";
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
import { TimeDesired } from "@/utils";
import { GrLinkPrevious } from "react-icons/gr";
import CountryApi from "@/api/country";
import validator from "validator";
// import DatePickerComponent from "@/components/DatePickerComponent";
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

interface IForm {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
  countryName: string;
  startDate: string;
  phone: string;
  age: string;
  bookType: string;
  hopeDay: string;
  timeTableId: string;
}

const FreeTryal = (props: any) => {
  const { navigation } = props;
  const icon = require("@/assets/images/book.svg");
  const logo = require("@/assets/images/header-logo.png");
  const [checked, setChecked] = useState(false);
  const [country, setCountry] = useState<any>([]);
  const [form, setForm] = useState<IForm>({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
    countryName: "",
    startDate: "",
    phone: "",
    age: "",
    bookType: "",
    hopeDay: "",
    timeTableId: "",
  });

  console.log(form, "form");

  useEffect(() => {
    const fecth = async () => {
      const result = await CountryApi.getAllCountry();
      setCountry(
        result.data.map((item: any) => ({
          key: item?._id,
          value: item?.countryName,
        }))
      );
    };
    fecth();
  }, []);

  const onchangeEmail = (e: any) => {
    // validator.isEmail(e.target.value) === false
    setForm({
      ...form,
      email: e.target.value,
    });
  };

  const onchangePassword = (e: any) => {
    setForm({
      ...form,
      password: e.target.value,
    });
  };

  const onchangeComfirmPassword = (e: any) => {
    setForm({
      ...form,
      confirmPassword: e.target.value,
    });
  };
  const onchangeAge = (e: any) => {
    setForm({
      ...form,
      age: e.target.value,
    });
  };
  const onchangeHope = (e: any) => {
    console.log(e.target.value, "e");

    // setForm({
    //   ...form,
    //   age: e.target.value,
    // });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1, padding: 5 }}>
        <ScrollView>
          <View style={{ paddingHorizontal: "5%" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <View style={{ width: "5%" }}>
                <Text onPress={() => navigation.goBack()}>
                  <GrLinkPrevious size={20} color="#3d3535" />
                </Text>
              </View>
              <View
                style={{
                  width: "95%",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ minWidth: 30, maxWidth: 240, maxHeight: 55 }}
                  source={logo}
                />
              </View>
            </View>
            <TextFeldComponent
              icon={icon}
              label="Email"
              // placeholder="Nhập email"
              onchange={onchangeEmail}
            />
            <TextFeldComponent
              icon={icon}
              label="Password"
              placeholder=""
              password={true}
              onchange={onchangePassword}
            />
            <TextFeldComponent
              icon={icon}
              label="Confirm Password"
              placeholder=""
              password={true}
              onchange={onchangeComfirmPassword}
            />
            <TextFeldComponent icon={icon} label="Nickname" placeholder="" />
            <TextFeldComponent
              icon={icon}
              label="Age or grade"
              placeholder=""
              onchange={onchangeAge}
            />
            <TextFeldComponent icon={icon} label="Phone Numbe" placeholder="" />

            <View>
              <Text style={styles.label}>Hope Class :</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <CheckBox
                title="Raz-kids"
                checked={checked}
                // onPress={() => setChecked(!checked)}
                onPress={(e) => onchangeHope(e)}
              />
              <CheckBox
                title="Epic"
                checked={!checked}
                onPress={() => setChecked(!checked)}
              />
            </View>
            {/* <DatePickerComponent label="Start Date" /> */}
            <TextFeldComponent
              icon={icon}
              label="Start Date"
              placeholder="dd/mm/yyy"
            />
            <CheckBoxComponent label="Hope day " />

            <SelectComponent label="Desired time" data={TimeDesired} />
            <SelectComponent label="Country" data={country} />

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
