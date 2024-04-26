import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import { CommonActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import SyncStorage from "sync-storage";

const Header = (props: any) => {
  const { navigation } = props;
  const logo = require("@/assets/images/header-logo.png");
  const width = Dimensions.get("window").width;
  
  const onClickLogout = () => {
    SyncStorage.remove('infoUser')
    SyncStorage.remove('refreshToken')
    SyncStorage.remove('token')

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Login" }],
      })
    );
  };
  return (
    <View style={[styles.container, ]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <View>
          <Text onPress={() => navigation.navigate("messenger")}>
            <Ionicons name="mail" size={32} color="grey" />
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ minWidth: 30, maxWidth: 200, maxHeight: 45 }}
            source={logo}
          />
        </View>
        <View>
          <Text onPress={onClickLogout}>
            
            <Ionicons name="log-out" size={32} color="grey" />
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: "2%",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Header;
