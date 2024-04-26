import * as React from "react";
import "react-native-svg";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import ToastManager, { Toast } from "toastify-react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FreeTryal from "@/pages/FreeTryal";
import Messenger from "@/pages/Messenger";
import SendMessager from "@/pages/SendMessager";
import { LocalStore } from "@/hooks/useLocalStore";

import { io } from "socket.io-client";

export const socket = io("https://backend-chat-latest.onrender.com");
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

function NotificationsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button
        onPress={() => navigation.navigate("FreeTryal")}
        title="Go to Home"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  socket.on("sendmess", (data) => {
    console.log("Nhận thông điệp từ máy chủ:", data);
    // Xử lý dữ liệu nhận được ở đây
  });
  const isLogin = LocalStore.gettokenLocalStore();

  console.log(isLogin, "isLogin");

  return (
    <Provider store={store}>
      <RootLayoutNav isLogin={isLogin} />
      <ToastManager />
    </Provider>
  );
}

function RootLayoutNav(props: any) {
  const { isLogin } = props;
  const Menu = [
    // ...(isLogin
    //   ? []
    //   : [
    //       {
    //         id: 3,
    //         name: "Login",
    //         layout: Login,
    //       },
    //     ]),
    {
      id: 0,
      name: "Login",
      layout: Login,
    },
    {
      id: 1,
      name: "Home",
      layout: Home,
    },
    {
      id: 2,
      name: "Notifications",
      layout: NotificationsScreen,
    },
    {
      id: 3,
      name: "FreeTryal",
      layout: FreeTryal,
    },
    {
      id: 4,
      name: "messenger",
      layout: Messenger,
    },
    {
      id: 5,
      name: "SendMessager",
      layout: SendMessager,
    },
  ] as any;
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: "blue",
        //   },
        //   headerTintColor: "white",
        //   headerTitleStyle: {
        //     fontWeight: "bold",
        //   },
        // }}
        screenOptions={{
          headerShown: false,
        }}
      >
        {Menu.map((item: any) => {
          return (
            <Drawer.Screen
              key={item.id}
              name={item.name}
              component={item.layout}
              options={({ navigation }: any) => ({
                headerTitle: item.name,
                headerTitleStyle: {
                  marginRight: 10,
                },
                headerRight: () => (
                  <FontAwesome
                    name="home"
                    size={24}
                    color="white"
                    style={{ marginRight: 10 }}
                  />
                ),
              })}
            />
          );
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
