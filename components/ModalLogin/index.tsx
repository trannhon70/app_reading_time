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
// import validator from 'validator';
export interface IModal {
  children: ReactNode;
}
const ModalLogin = (props: IModal) => {
  const { children } = props;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassWord] = React.useState("");

  const onClickOpen = () => {
    setModalVisible(true);
  };

  const onPressLogin = () => {
    // if (validator.isEmail(email)) {
    //   Alert.alert('Email hợp lệ');
    // } else {
    //   Alert.alert('Email không hợp lệ');
    // }
    const body = {
      email: email,
      password: password,
    };
    console.log(body, "body");
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
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
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Nhập email..."
              />
              <Text style={styles.label}>Passowrd :</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangePassWord}
                value={password}
                keyboardType="numeric"
                placeholder="Nhập password..."
                secureTextEntry
              />
            </SafeAreaView>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
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
    backgroundColor: "#f0582a",
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
    borderColor: "blue",
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
