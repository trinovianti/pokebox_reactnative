import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function MainHeader() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>POKEMON GUIDE</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 135,
    backgroundColor: "#FA6555",
    justifyContent: "center",
    alignItems: 'center',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20
  },
  title: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop:30,
    justifyContent: "center",
    alignItems: 'center'
  }
})