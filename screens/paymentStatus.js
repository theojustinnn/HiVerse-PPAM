import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View, Image, ActivityIndicator } from "react-native";
import { Appbar, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { doc, updateDoc } from "firebase/firestore"; 
import { db } from "../config/config";

// Get window size for ease
const win = Dimensions.get("window");

export default function PaymentStatus() {  
  // Declare navigations
  const navigation = useNavigation();
  const route = useRoute();

  // Storing passed parameter from previous screen
  const [kuota, setKuota] = useState(route.params?.kuota);
  const [ticket, setTicket] = useState(route.params?.ticket);
  const [namakonser, setNamaKonser] = useState(route.params?.namakonser);
  const [artis, setArtis] = useState(route.params?.artis);
  const [tanggal, setTanggal] = useState(route.params?.tanggal);
  const [kategori, setKategori] = useState(route.params?.kategori);

  // Declare fixed variable
  const docID = artis + "-" + tanggal + "-" + kategori

  // Using firestore to update
  useEffect(() => {
    const updateRef = doc(db, "category", docID)

    if (kuota-ticket < 1) {
      updateDoc(updateRef, {
        "status": false
      })
    }
    updateDoc(updateRef, {
      "kuota" : kuota-ticket
    })
  }, [])

  // Variables used by default
  const [isWaiting, setWaiting] = useState(true)  // For loading screen
  setTimeout(() => {
    setWaiting(false);
  }, 2000)  // Set to 2000 ms

  return (
    <SafeAreaProvider>
      <Appbar.Header style={{backgroundColor: "#74E1B2"}}>
      <Appbar.Content title="Status Pembayaran" titleStyle={{fontSize: 18, fontWeight: "bold"}} />
      
      {isWaiting &&
      <Appbar.Action icon="close" disabled />}

      {!isWaiting &&
      // <Appbar.Action icon="close" onPress={() => navigation.navigate("HomeConcert")} />}
      <Appbar.Action icon="close" onPress={() => navigation.navigate("TicketDetails")} />}
      </Appbar.Header>
      <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#ffffff",}}>
        {isWaiting && 
        <ActivityIndicator size={win.width/3} color={"#FB648C"} />}
        {!isWaiting &&
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff",}}>
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
