import { COlORS } from "@/constants/Colors";
import { scalePoint } from "@/utils/common";
// import { yupResolver } from '@hookform/resolvers/yup'
// import { LayoutNone } from 'layouts'
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, StyleSheet, Text, View } from "react-native";
import { schema } from "@/resolvers/login";
import { Button, PasswordField, TextField } from "@/components/atoms";
import LayoutNone from "@/Layouts/LayoutNone";
import ModalLogin from "@/components/ModalLogin";
const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    padding: scalePoint(20),
    paddingTop: scalePoint(20),
  },
  mainContent: {
    flexGrow: 1,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: scalePoint(200),
    height: scalePoint(200),
    resizeMode: "contain",
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    gap: scalePoint(10),
    width: "100%",
    paddingHorizontal: scalePoint(30),
  },
  title: {
    fontWeight: "700",
    fontSize: scalePoint(20),
    color: COlORS.black,
    textAlign: "center",
    textTransform: "uppercase",
  },
  formContainer: {
    gap: 10,
  },
  description: {
    fontWeight: "500",
    fontSize: scalePoint(14),
    color: COlORS.gray[100],
  },
  tryFreeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  text: {
    fontWeight: "500",
    fontSize: scalePoint(14),
    color: COlORS.black,
    textAlign: "center",
  },
});

type FormType = {
  email: string;
  password: string;
};

const Login = () => {
  const logo = require("@/assets/images/logo-signature.png");
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    // resolver: yupResolver(schema)
  });
  const onSubmit = async (data: any) => {};
  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.mainContent}>
          <Image source={logo} style={Styles.logo} />
          <Text style={Styles.title}>Chào mừng tới Reading Time</Text>
          <Text style={Styles.text}>
            Họ tiếng Anh qua 1 quyển truyện mỗi ngày.
          </Text>
          <Text style={Styles.text}>
            Cùng khám phá thới giới với Reading Time nào!
          </Text>

          <View style={Styles.tryFreeContainer}>
            <Button
              style={{
                height: "auto",
                width: 200,
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginTop: 50,
              }}
              mode="primary"
            >
              Học thử miễn phí
            </Button>
          </View>
          <ModalLogin>
            
                Đăng nhập
             
          </ModalLogin>
          {/* <View style={Styles.formContainer}>
            <Controller
              name="email"
              control={methods.control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  title="Email"
                  errors={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={methods.control}
              render={({ field, fieldState }) => (
                <PasswordField
                  {...field}
                  title="Password"
                  errors={fieldState.error?.message}
                />
              )}
            />
          </View> */}
        </View>
      </View>
    </>
  );
};

export default Login;
