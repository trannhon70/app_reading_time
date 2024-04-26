import { Image, StyleSheet, Text, View } from "react-native";
// import { FaMessage } from "react-icons/fa6";
// import { TbLogout2 } from "react-icons/tb";
import { CommonActions } from "@react-navigation/native";

const Header = (props: any) => {
  const { navigation } = props;
  const logo = require("@/assets/images/header-logo.png");

  const onClickLogout = () => {
    localStorage.clear();
    
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Login" }],
      })
    );
  };
  return (
    <View style={styles.container}>
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
            {/* <FaMessage
              size={30}
              color="rgb(228 142 233)"
              style={{ marginTop: 5 }}
            /> */}
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
            {/* <TbLogout2
              size={30}
              color="rgb(228 142 233)"
              style={{ marginTop: 5 }}
            /> */}
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
