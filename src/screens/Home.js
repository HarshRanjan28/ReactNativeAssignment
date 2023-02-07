import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "../components/Menu";
const Home = (props) => {
  const description =
    "Here you get all the courses to kickstart your career as a web developer.";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          source={require("../../assets/onlineEducation.jpg")}
          resizeMode="contain"
        />
        <Text style={styles.mainHeader}>Welcome To </Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 20,
              marginTop: 20,
              color: "#4c5dab",
              fontWeight: "bold",
            },
          ]}
        >
          {props.channelName}
        </Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>
      <View>
        <Menu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    marginTop: 50,
    borderRadius: 20,
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    textTransform: "uppercase",
    marginTop: 0,
  },
  paraStyle: {
    marginTop: 30,
    fontSize: 19,
    color: "#7d7d7d",
    lineHeight: 20,
  },
});

export default Home;
