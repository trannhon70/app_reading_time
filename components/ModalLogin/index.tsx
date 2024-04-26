//@ts-nocheck
import React, { ReactNode, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Button } from "../atoms";
import { COlORS } from "@/constants/Colors";
import UserApi from "@/api/users";
import validator from "validator";
import { Toast } from "toastify-react-native";
import SyncStorage from "sync-storage";

export interface IModal {
  children: ReactNode;
  navigation?: any;
}
const ModalLogin = (props: IModal) => {
  const { children, navigation } = props;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassWord] = React.useState("");
  const [errEmail, setErrEmail] = React.useState<boolean>(false);
  const [errPassowr, setErrPassowr] = React.useState<boolean>(true);

  const onClickOpen = () => {
    setModalVisible(true);
  };

  const onPressLogin = async () => {
    if (validator.isEmail(email) === false) {
      return setErrEmail(true);
    }
    if (password === "") {
      return setErrPassowr(false);
    }

    const body = {
      email: email,
      password: password,
    };
    UserApi.Login(body)
      .then((res) => {
        console.log(res, "res");
        Toast.success(`${res?.message}`, "");
        SyncStorage.set("infoUser", JSON.stringify(res.data.infoUser));
        SyncStorage.set("refreshToken", JSON.stringify(res.data.refreshToken));
        SyncStorage.set("token", JSON.stringify(res.data.token));
        setModalVisible(false);
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err, "err");
        Toast.error(`${err?.response?.data?.message}`, "");
      }).finally;
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <SafeAreaView style={{ width: "100%" }}>
              <View style={{ display: "flex", alignItems: "center" }}>
                <Text
                  style={{ color: "black", fontSize: 25, fontWeight: "600" }}
                >
                  Login
                </Text>
              </View>

              <Text style={styles.label}>Email :</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => {
                  onChangeEmail(text);
                  setErrEmail(false);
                }}
                value={email}
                placeholder="Nhập email..."
              />
              {errEmail === true && (
                <Text style={{ color: "red" }}>Email invalidate!</Text>
              )}
              <Text style={styles.label}>Passowrd :</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => {
                  onChangePassWord(text);
                  setErrPassowr(true);
                }}
                value={password}
                keyboardType="numeric"
                placeholder="Nhập password..."
                secureTextEntry
              />
              {errPassowr === false && (
                <Text style={{ color: "red" }}>Password invalidate!</Text>
              )}
            </SafeAreaView>
            <View style={{ flexDirection: "row", marginTop: 30 }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={[styles.textStyle, , { color: "black" }]}>
                  Cancel
                </Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => onPressLogin()}
              >
                <Text style={styles.textStyle}>Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.tryFreeContainer}>
        <Button
          style={{
            height: "auto",
            minWidth: 200,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
          mode="default"
          onPress={() => onClickOpen()}
        >
          {children}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "rgb(233 219 235)",
    borderRadius: 20,
    padding: 20,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 4,
    padding: 10,
    elevation: 2,
    marginLeft: 5,
  },
  buttonOpen: {
    backgroundColor: "#2196F3",
  },
  buttonClose: {
    backgroundColor: "white",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonMoadl: {
    minWidth: 200,
  },
  tryFreeContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  input: {
    height: 40,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: COlORS.gray[100],
    shadowColor: COlORS.gray[100],
    padding: 10,
    borderRadius: 4,
    fontWeight: "500",
    fontSize: 15,
    fontFamily: "Open Sans",
  },
  label: {
    marginTop: 5,
    fontSize: 17,
    fontWeight: "500",
  },
});

export default ModalLogin;
