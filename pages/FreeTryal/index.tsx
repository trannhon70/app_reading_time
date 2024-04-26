import TextFeldComponent from "@/components/TextFeldComponent";
import React, { useEffect, useState } from "react";
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
import CountryApi from "@/api/country";
import validator from "validator";
import FreeTryalApi from "@/api/freeTryal";
import { Toast } from "toastify-react-native";
import DatePickerComponent from "@/components/DatePickerComponent";
import dayjs from "dayjs";
import { Ionicons } from "@expo/vector-icons";
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

export interface IForm {
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

export interface IFormErr {
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
  userName: boolean;
  countryName: boolean;
  startDate: boolean;
  phone: boolean;
  age: boolean;
  bookType: boolean;
  hopeDay: boolean;
  timeTableId: boolean;
}

const FreeTryal = (props: any) => {
  const { navigation } = props;
  const icon = require("@/assets/images/book.svg");
  const logo = require("@/assets/images/header-logo.png");
  const [country, setCountry] = useState<any>([]);
  const [datePicker, setDatePicker] = useState<any>(dayjs());
  const [check, setCheck] = useState<boolean>(true);
  const [check1, setCheck1] = useState<boolean>(false);
  const [checkCount, setCheckCount] = useState<number>(0);
  const [errConfirm, setErrConFirm] = useState<boolean>(false);
  const [formErr, setFormErr] = useState<IFormErr>({
    email: false,
    password: false,
    confirmPassword: false,
    userName: false,
    countryName: false,
    startDate: false,
    phone: false,
    age: false,
    bookType: false,
    hopeDay: false,
    timeTableId: false,
  });
  const [form, setForm] = useState<IForm>({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
    countryName: "",
    startDate: "",
    phone: "",
    age: "",
    bookType: "RAZKID",
    hopeDay: "",
    timeTableId: "",
  });

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
    setFormErr({
      ...formErr,
      email: false,
    });
  };

  const onchangePassword = (e: any) => {
    setForm({
      ...form,
      password: e.target.value,
    });
    setFormErr({
      ...formErr,
      password: false,
    });
  };

  const onchangeComfirmPassword = (e: any) => {
    setForm({
      ...form,
      confirmPassword: e.target.value,
    });
    setFormErr({
      ...formErr,
      confirmPassword: false,
    });
    setErrConFirm(false);
  };

  const onchangeNickName = (e: any) => {
    setForm({
      ...form,
      userName: e.target.value,
    });
    setFormErr({
      ...formErr,
      userName: false,
    });
  };

  const onchangeAge = (e: any) => {
    setForm({
      ...form,
      age: e.target.value,
    });
    setFormErr({
      ...formErr,
      age: false,
    });
  };
  const onchangePhone = (e: any) => {
    setForm({
      ...form,
      phone: e.target.value,
    });
    setFormErr({
      ...formErr,
      phone: false,
    });
  };
  useEffect(() => {
    let count = 0;
    if (check) count++;
    if (check1) count++;
    setCheckCount(count);
    if (check === true) {
      setForm({
        ...form,
        bookType: "RAZKID",
      });
    }
    if (check1 === true) {
      setForm({
        ...form,
        bookType: "EPIC",
      });
    }
    // setCheck(true);
  }, [check, check1]);

  const onchangeStartDate = (e: any) => {
    setDatePicker(dayjs(e.date));
    const dateOnly = e.date.split(" ")[0];
    setForm({
      ...form,
      startDate: dateOnly,
    });
    setFormErr({
      ...formErr,
      startDate: false,
    });
  };

  const onchangeHopeDay = (e: any) => {
    setForm({
      ...form,
      hopeDay: e,
    });
    setFormErr({
      ...formErr,
      hopeDay: false,
    });
  };

  const onchangeDesiredTime = (e: any) => {
    const result = TimeDesired.filter((item) => item.value === e);
    setForm({
      ...form,
      timeTableId: result?.[0].key,
    });
    setFormErr({
      ...formErr,
      timeTableId: false,
    });
  };

  const onchangeCountry = (e: any) => {
    setForm({
      ...form,
      countryName: e,
    });
    setFormErr({
      ...formErr,
      countryName: false,
    });
  };

  useEffect(() => {
    if (form.password !== form.confirmPassword) {
      setErrConFirm(true);
    }
  }, [form.password, form.confirmPassword]);

  const onPressApply = async () => {
    let newFormErr = { ...formErr };

    if (form.email === "") newFormErr = { ...newFormErr, email: true };
    if (form.password === "") newFormErr = { ...newFormErr, password: true };
    if (form.confirmPassword === "")
      newFormErr = { ...newFormErr, confirmPassword: true };
    if (form.userName === "") newFormErr = { ...newFormErr, userName: true };
    if (form.age === "") newFormErr = { ...newFormErr, age: true };
    if (form.phone === "") newFormErr = { ...newFormErr, phone: true };
    if (form.startDate === "") newFormErr = { ...newFormErr, startDate: true };
    if (form.hopeDay === "") newFormErr = { ...newFormErr, hopeDay: true };
    if (form.timeTableId === "")
      newFormErr = { ...newFormErr, timeTableId: true };
    if (form.countryName === "")
      newFormErr = { ...newFormErr, countryName: true };

    setFormErr(newFormErr);
    console.log(form, "form");
    console.log(formErr, "formErr");
    if (
      formErr.age === false &&
      formErr.bookType === false &&
      formErr.confirmPassword === false &&
      formErr.countryName === false &&
      formErr.email === false &&
      formErr.hopeDay === false &&
      formErr.password === false &&
      formErr.phone === false &&
      formErr.startDate === false &&
      formErr.timeTableId === false &&
      formErr.userName === false
    ) {
      FreeTryalApi.createFreeTryal(form)
        .then((res: any) => {
          Toast.success(`${res.message}`, "");
          setForm({
            ...form,
            email: "",
            password: "",
            confirmPassword: "",
            userName: "",
            countryName: "",
            startDate: datePicker,
            phone: "",
            age: "",
            bookType: "RAZKID",
            hopeDay: "",
            timeTableId: "",
          });
          setFormErr({
            ...formErr,
            email: false,
            password: false,
            confirmPassword: false,
            userName: false,
            countryName: false,
            startDate: false,
            phone: false,
            age: false,
            bookType: false,
            hopeDay: false,
            timeTableId: false,
          });
        })
        .catch((err: any) => {
          Toast.error(`${err?.response?.data?.message}`, "");
        });
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1, padding: 5 }}>
        <ScrollView>
          <View style={{ paddingHorizontal: "3%" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <View style={{ width: "10%" }}>
                <Text onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={32} color="grey" />
                  {/* <GrLinkPrevious size={20} color="#3d3535" /> */}
                </Text>
              </View>
              <View
                style={{
                  width: "90%",
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
              iconNot={
                <Ionicons name="mail" size={25} color="grey" />
              }
              label="Email"
              // placeholder="Nhập email"
              onchange={onchangeEmail}
              error={formErr.email}
              text="Email is not empty!"
              value={form.email}
            />
            <TextFeldComponent
              label="Password"
              placeholder=""
              password={true}
              onchange={onchangePassword}
              error={formErr.password}
              text="Password is not empty!"
              iconNot={
                <Ionicons name="lock-closed" size={25} color="grey" />
              }
              value={form.password}
            />
            <TextFeldComponent
              label="Confirm Password"
              placeholder=""
              password={true}
              onchange={onchangeComfirmPassword}
              error={formErr.confirmPassword}
              text="Confirm password is not empty!"
              errConfirm={errConfirm}
              iconNot={
                <Ionicons name="lock-closed" size={25} color="grey" />
              }
              value={form.confirmPassword}
            />
            <TextFeldComponent
              label="Nickname"
              placeholder=""
              onchange={onchangeNickName}
              error={formErr.userName}
              text="Nickname is not empty!"
              iconNot={
                <Ionicons name="person" size={25} color="grey" />
              }
              value={form.userName}
            />
            <TextFeldComponent
              icon={icon}
              label="Age or grade"
              placeholder=""
              onchange={onchangeAge}
              error={formErr.age}
              text="Age is not empty!"
              value={form.age}
              iconNot={
                <Ionicons name="add" size={25} color="grey" />
              }
            />
            <TextFeldComponent
              icon={icon}
              label="Phone Numbe"
              placeholder=""
              onchange={onchangePhone}
              error={formErr.phone}
              text="Phone is not empty!"
              iconNot={
                <Ionicons name="phone-portrait" size={25} color="grey" />
              }
              value={form.phone}
            />

            <View>
              <Text style={styles.label}>Hope Class :</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <CheckBox
                title="Raz-kids"
                checked={check}
                onPress={() => setCheck(!check)}
                disabled={checkCount >= 1 && !check}
              />
              <CheckBox
                title="Epic"
                checked={check1}
                onPress={() => setCheck1(!check1)}
                disabled={checkCount >= 1 && !check1}
              />
            </View>
            <DatePickerComponent
              label="Start Date"
              onchange={onchangeStartDate}
              error={formErr.startDate}
              text="Start date is not empty!"
              setDatePicker={setDatePicker}
              datePicker={datePicker}
            />
            {/* <TextFeldComponent
              icon={icon}
              label="Start Date"
              placeholder="dd/mm/yyy"
              onchange={onchangeStartDate}
              error={formErr.startDate}
              text="Start date is not empty!"
              iconNot={
                <BsCalendar2DateFill
                  size={30}
                  color="#5a5a61"
                  style={{ marginTop: 5 }}
                />
              }
            /> */}
            <CheckBoxComponent
              label="Hope day "
              onchange={onchangeHopeDay}
              error={formErr.hopeDay}
              text="hopeDay is not empty!"
            />

            <SelectComponent
              label="Desired time"
              data={TimeDesired}
              onchange={onchangeDesiredTime}
              error={formErr.timeTableId}
              text="Desired time is not empty!"
            />
            <SelectComponent
              label="Country"
              data={country}
              onchange={onchangeCountry}
              error={formErr.countryName}
              text="Country is not empty!"
            />

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
                onPress={onPressApply}
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
