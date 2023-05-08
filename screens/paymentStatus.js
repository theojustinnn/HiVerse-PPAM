import React, { useState } from "react";
import { Dimensions, StyleSheet, View, Image, ActivityIndicator } from "react-native";
import { Appbar, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

// Get window size for ease
const win = Dimensions.get("window");

export default function PaymentStatus() {  
  // Declare navigations
  const navigation = useNavigation();

  // Variables used by default
  const [isWaiting, setWaiting] = useState(true)  // For loading screen
  setTimeout(() => {
    setWaiting(false);
  }, 2000)  // Set to 2000 ms

  return (
    <SafeAreaProvider>
      <Appbar.Header>
      <Appbar.Content title="Status Pembayaran" titleStyle={{fontSize: 18, fontWeight: "bold"}} />
      
      {isWaiting &&
      <Appbar.Action icon="close" disabled />}

      {!isWaiting &&
      <Appbar.Action icon="close" onPress={() => navigation.navigate("HomeConcert")} />}
      </Appbar.Header>
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        {isWaiting && 
        <ActivityIndicator size={win.width/3} color={"#FB648C"} />}
        {!isWaiting &&
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Image source={require("../assets/paymentSuccess.png")} 
          style={{width: win.width/2, height: win.width/2}}/> 
          <Text style={styles.title}>{"\n"}PEMBAYARAN BERHASIL!</Text>
        </View> }
      </View>
    </SafeAreaProvider>
  )
};
  
const styles = StyleSheet.create({
    title: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
  })