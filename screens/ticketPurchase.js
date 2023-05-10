import React, { useState } from "react";
import { Dimensions, StyleSheet, View, TouchableOpacity } from "react-native";
import { Appbar, TextInput, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

// Get window size for ease
const win = Dimensions.get("window");

export default function TicketPurchase () {
    // Declare navigations
    const navigation = useNavigation();
    const route = useRoute();

    // Storing passed parameter from previous screens
    const [total, setTotal] = useState(route.params?.total);
    const [ticket, setTicket] = useState(route.params?.ticket);
    const [artis, setArtis] = useState(route.params?.artis);
    const [tanggal, setTanggal] = useState(route.params?.tanggal);
    const [namakonser, setNamaKonser] = useState(route.params?.namakonser);
    const [kategori, setKategori] = useState(route.params?.kategori);
    const [kuota, setKuota] = useState(route.params?.kuota);

    // Variables used dinamically from user input
    const [namaPembeli, setNamaPembeli] = useState("");
    const [noPembeli, setNoPembeli] = useState("");
    const [nikPembeli, setNIKPembeli] = useState("");
    const [alamatPembeli, setAlamatPembeli] = useState("");

    // Comments on this line onwards are the to be used code
    return (
        <SafeAreaProvider>
            <Appbar.Header>
            <Appbar.BackAction onPress={() => navigation.navigate("TicketDetails")} />
            <Appbar.Content title="Pembelian Tiket" titleStyle={{fontSize: 18, fontWeight: "bold"}} />
            </Appbar.Header>

            <View style={styles.container}>
                <Text style={styles.title}>Identitas Pembeli</Text>
                <Text style={styles.subtitle}>Silahkan memasukkan identitas Anda dengan benar dan lengkap.</Text>
                <TextInput
                    label="Nama"
                    placeholder="Nama Anda"
                    value={namaPembeli}
                    mode="outlined"
                    outlineColor="#34B97F"
                    activeOutlineColor="#FB648C"
                    onChangeText={namaPembeli => setNamaPembeli(namaPembeli)}
                />
                <TextInput
                    label="Nomor Telepon"
                    placeholder="Nomor Telepon Anda"
                    value={noPembeli}
                    mode="outlined"
                    outlineColor="#34B97F"
                    activeOutlineColor="#FB648C"
                    onChangeText={noPembeli => setNoPembeli(noPembeli)}
                />
                <TextInput
                    label="NIK"
                    placeholder="NIK Anda"
                    value={nikPembeli}
                    mode="outlined"
                    outlineColor="#34B97F"
                    activeOutlineColor="#FB648C"
                    onChangeText={nikPembeli => setNIKPembeli(nikPembeli)}
                />
                <TextInput
                    label="Alamat"
                    placeholder="Alamat Anda"
                    value={alamatPembeli}
                    mode="outlined"
                    outlineColor="#34B97F"
                    activeOutlineColor="#FB648C"
                    onChangeText={alamatPembeli => setAlamatPembeli(alamatPembeli)}
                />
            </View>
            
            { (namaPembeli == "" || noPembeli == "" || nikPembeli == "" || alamatPembeli == "") &&
            <Text style={styles.alert}>*Setiap informasi harus terisi</Text> }
            
            { isNaN(Number(noPembeli)) &&
            <Text style={styles.alert}>*Nomor telepon tidak valid</Text> }
            
            { isNaN(Number(nikPembeli)) &&
            <Text style={styles.alert}>*NIK tidak valid</Text> }
            <View style={styles.container2}>
                { namaPembeli != "" && noPembeli != "" && !isNaN(Number(noPembeli)) && nikPembeli != "" && !isNaN(Number(nikPembeli)) && alamatPembeli != "" &&
                <TouchableOpacity style={styles.buttonactive}
                    onPress={() => navigation.navigate("Payment", 
                    {total: total, ticket: ticket,
                        namaPembeli: namaPembeli, noPembeli: noPembeli, 
                        nikPembeli: nikPembeli, alamatPembeli: alamatPembeli, 
                        artis: artis,
                        tanggal: tanggal, namakonser: namakonser,
                        kategori: kategori, kuota: kuota})}>
                    <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>SIMPAN</Text>
                </TouchableOpacity> }
                { (namaPembeli == "" || noPembeli == "" || isNaN(Number(noPembeli)) || nikPembeli == "" || isNaN(Number(nikPembeli)) || alamatPembeli == "") &&
                <TouchableOpacity style={styles.buttoninactive}
                    disabled>
                    <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>SIMPAN</Text>
                </TouchableOpacity> }
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      alignContent: "center",
    },
    container2: {
        padding: 10,
        paddingBottom: 30,
        alignContent: "center",
        flex: 1,
        justifyContent: "flex-end",
      },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        paddingBottom: 10,
      },
    subtitle: {
        fontSize: 15,
        paddingBottom: 10,
      },
    alert: {
        fontSize: 14,
        fontWeight: "bold",
        paddingHorizontal: 10,
        color: "#FB648C",
      },
    buttonactive: {
        alignItems: "center", 
        backgroundColor: "#34B97F", 
        padding: 10,
        borderRadius: 25,
      },
    buttoninactive: {
        alignItems: "center", 
        backgroundColor: "#B1B1B1", 
        padding: 10,
        borderRadius: 25,
      },
});
