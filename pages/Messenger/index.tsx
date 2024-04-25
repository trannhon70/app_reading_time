import { COlORS } from "@/constants/Colors";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FaUserAlt } from "react-icons/fa";
import { GrLinkPrevious } from "react-icons/gr";
import { ScrollView } from "react-native";

const Messenger = (props: any) => {
  const logo = require("@/assets/images/header-logo.png");
  const { navigation } = props;
  const message = "Chao bajn sadsaddddddddddddddddddddddddddddddddddd";
  const truncatedMessage =
    message.length > 30 ? message.slice(0, 30) + "..." : message;

  const onPressChat = () => {
    navigation.navigate("SendMessager");
  };
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: "2%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View style={{ width: "5%" }}>
            <Text onPress={() => navigation.navigate("Home")}>
              <GrLinkPrevious
                size={20}
                style={{ fontWeight: "700" }}
                color="#3d3535"
              />
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
              style={{ minWidth: 30, maxWidth: 200, maxHeight: 45 }}
              source={logo}
            />
          </View>
        </View>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <TouchableOpacity onPress={onPressChat}>
            <View style={styles.card}>
              <View style={styles.cardLeft}>
                <FaUserAlt size={30} color="#d3a1e7" />
              </View>
              <View style={styles.cardRight}>
                <View>
                  <Text style={styles.name}>Nguyễn Van A</Text>
                </View>
                <View>
                  <Text style={styles.chat}>{truncatedMessage}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(233 219 235)",
    padding: 10,
  },
  card: {
    flexDirection: "row",
    borderColor: COlORS.gray[150],
    shadowColor: COlORS.gray[150],
    borderWidth: 1,
    padding: 10,
    width: "100%",
    marginVertical: 5,
  },
  cardLeft: {
    width: "10%",
  },
  cardRight: {
    width: "90%",
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
  },
  chat: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "500",
    opacity: 0.5,
  },
});

export default Messenger;
