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
const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    padding: scalePoint(30),
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
    fontSize: scalePoint(30),
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
    <LayoutNone
     
    >
      <View style={Styles.container}>
        <View style={Styles.tryFreeContainer}>
          <Button
            style={{ height: 30, width: 100 }}
            //   onPress={() => navigator.push('TryFreeStep1')}
            mode="primary"
          >
            Try for free
          </Button>
        </View>
        <View style={Styles.mainContent}>
          <Text style={Styles.title}>Login</Text>
          <Image source={logo} style={Styles.logo} />
          <View style={Styles.formContainer}>
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
          </View>
        </View>
      </View>
    </LayoutNone>
  );
};

export default Login;
