import { COlORS } from "@/constants/Colors";
import { GrLinkPrevious } from "react-icons/gr";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { IoSend } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";

const SendMessager = (props: any) => {
  const { fromTo, sendTo, nameFromto } = useSelector(
    (state: RootState) => state.messager
  );
  // console.log(idChat, "idChat");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://backend-chat-latest.onrender.com/api/v1/chats/convesation/list-messages?sendTo=${sendTo}&fromTo=${fromTo}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data, "data");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: "2%", marginTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View style={{ width: "5%" }}>
            <Text onPress={() => navigation.navigate("messenger")}>
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
            <Text
              style={{ fontSize: 16, fontWeight: "700", marginRight: "6%" }}
            >
              {nameFromto}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.containerChat}>
        <SafeAreaView style={{ height: "100%", flex: 1 }}>
          <ScrollView style={{ height: "100%" }}>
            <View style={styles.containerChat_left}>
              <Text style={styles.containerChat_left_text}>
                ádaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </Text>
            </View>
            <View style={{ width: "100%", alignItems: "flex-end" }}>
              <View style={styles.containerChat_right}>
                <Text style={styles.containerChat_left_text}>
                  ádaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Text>
              </View>
            </View>
            <View style={styles.containerChat_left}>
              <Text style={styles.containerChat_left_text}>
                ádaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </Text>
            </View>
            <View style={{ width: "100%", alignItems: "flex-end" }}>
              <View style={styles.containerChat_right}>
                <Text style={styles.containerChat_left_text}>
                  ádaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>

      <View style={styles.containerInput}>
        <TextInput style={styles.TextInput} />
        <View style={styles.icon}>
          <IoSend color="rgba(211, 161, 231, 0.85)" size={35} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(233 219 235)",
  },
  containerChat: {
    flex: 1,
    backgroundColor: "white",
    borderColor: COlORS.gray[150],
    shadowColor: COlORS.gray[150],
    borderWidth: 1,
    padding: 10,
    width: "100%",
    height: "100%",
    marginVertical: 2,
  },
  containerInput: {
    flexDirection: "row",

    backgroundColor: "white",
  },
  TextInput: {
    height: 40,
    borderColor: COlORS.gray[120],
    shadowColor: COlORS.gray[120],
    borderWidth: 1,
    padding: 10,
    width: "90%",
  },
  icon: {
    borderColor: COlORS.gray[120],
    shadowColor: COlORS.gray[120],
    borderWidth: 1,
    width: "10%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerChat_left: {
    width: "70%",
    backgroundColor: "rgba(211, 161, 231, 0.85)",
    padding: 10,
    borderColor: COlORS.gray[50],
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
  },
  containerChat_right: {
    width: "70%",
    backgroundColor: "rgba(194, 189, 196, 0.85)",
    padding: 10,
    borderColor: COlORS.gray[50],
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
  },
  containerChat_left_text: {
    fontSize: 16,
    fontWeight: "500",
  },
});
export default SendMessager;
