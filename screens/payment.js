import React, { useState } from "react";
import { Dimensions, StyleSheet, View, TouchableOpacity } from "react-native";
import { Appbar, Text, RadioButton } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NumericFormat } from "react-number-format";

// Get window size for ease
const win = Dimensions.get("window");

export default function Payment() {  
  // Declare navigations
  const navigation = useNavigation();
  const route = useRoute();

  // Storing passed parameter from previous screen
  const total = route.params?.total;
  const tanggal = route.params?.tanggal;
  const namakonser = route.params?.namakonser;
  const kategori = route.params?.kategori;
  const namaPembeli = route.params?.namaPembeli;
  const noPembeli = route.params?.noPembeli;
  const nikPembeli = route.params?.nikPembeli;  // is unused
  const alamatPembeli = route.params?.alamatPembeli;  // is unused
  
  // Variables used by default
  const [value, setValue] = useState("gopay"); // By default Gopay is chosen method

  // IDK
  const updateTicket = () => (
    useEffect(() => {
      const r = query(collection(db, "category"), where("namakonser", "==", {namakonser}, "and", "tanggal", "==", {tanggal}, "and", "kategori", "==", {tanggal})); // Should be using variable
      onSnapshot(r, (snapshot) => {
        setCategory(snapshot.docs.map((doc) => doc.data()))
      })
    }, [])
  )

  // Comments on this line onwards are the to be used code
  return (
    <SafeAreaProvider>
      <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.navigate("TicketPurchase", {total: total})} />
      <Appbar.Content title="Pembayaran" titleStyle={{fontSize: 18, fontWeight: "bold"}} />
      </Appbar.Header>

      <View style={styles.container}>
        <View style={styles.smallcontainer}>
          <Text style={styles.left}>
            {"\n"}Tanggal
          </Text>
          <Text style={styles.right}>
            {"\n"}{tanggal}{"\n"}
          </Text>
        </View>
        <View style={styles.smallcontainer}>
          <Text style={styles.left}>
            {"\n"}Nama
          </Text>
          <Text style={styles.right}>
            {"\n"}{namaPembeli}{"\n"}
          </Text>
        </View>
        <View style={styles.smallcontainer}>
          <Text style={styles.left}>
            {"\n"}Nomor Telepon
          </Text>
          <Text style={styles.right}>
            {"\n"}{noPembeli}{"\n"}
          </Text>
        </View>
        <View style={styles.horizontalline} />
        <View style={styles.smallcontainer}>
          <Text>
            {"\n"}Total Pembayaran
          </Text>
        </View>
        <View style={styles.smallcontainer}>
          <Text style={styles.total}>
            {"\n"}<NumericFormat renderText={text => <Text style={styles.total}>{text}</Text>} value={total} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp"} />{"\n"}
          </Text>
        </View> 

        <View style={styles.smallcontainer}>
            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                <RadioButton.Item label="Gopay" value="gopay" color="#FB648C" style={{flexDirection: "row-reverse"}} />
                <RadioButton.Item label="OVO" value="ovo" color="#FB648C" style={{flexDirection: "row-reverse"}} />
                <RadioButton.Item label="Credit Card" value="cc" color="#FB648C" style={{flexDirection: "row-reverse"}} />
                <RadioButton.Item label="ATM/Mobile Banking" value="atm" color="#FB648C" style={{flexDirection: "row-reverse"}} />
            </RadioButton.Group>
        </View>

        <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
      </View>

      <View style={styles.container2}>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate("PaymentStatus")}>
        <Text style={{color: "#ffffff", fontWeight: "bold"}}>BAYAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  )
};
  
const styles = StyleSheet.create({
    container: {
      padding: 10,
      alignContent: "center",
    },
    smallcontainer: {
      width: win.width-20, 
      flexDirection: "row",
    },
    container2: {
      padding: 10,
      paddingBottom: 30,
      alignContent: "center",
      flex: 1,
      justifyContent: "flex-end",
    },
    total: {
      fontSize: 17,
      fontWeight: "bold",
      textAlign: "left",
      flex: 1,
    },
    left: {
      fontSize: 15,
      textAlign: "left",
      flex: 1,
    },
    right: {
      fontSize: 15,
      textAlign: "right",
      flex: 1,
    },
    horizontalline: {
      width: win.width-20, 
      borderBottomColor: "#B1B1B1", 
      borderBottomWidth: 1,
    },
    button: {
      alignItems: "center", 
      backgroundColor: "#34B97F", 
      padding: 10,
      borderRadius: 25,
    },
  })