import React, { useState, useEffect } from 'react';
import { Dimensions, ScrollView, StyleSheet,View, Image, Text, Button, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { collection, getcollection, getDocs, onSnapshot, doc, query, then, where } from "firebase/firestore"; 
import { db } from "../config/config";
// import firestore from '@react-native-firebase/firestore';

const win = Dimensions.get("window");
export default function DetailConcert() {
  const navigation = useNavigation();
  const [concert, setConcert] = useState({});
  const [artis, setArtis] = useState("")

  useEffect(() => {
    const q = query(collection(db, "concerts"), where("artis", "==", "TREASURE"));
    onSnapshot(q, (snapshot) => {
      setConcert(snapshot.docs.map((doc) => doc.data()))
    })
  }, []);
  
  return (
    <SafeAreaProvider>
      <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.navigate('HomeConcert')}/>
      <Appbar.Content title="Detail Konser" titleStyle={{fontSize: 18, fontWeight: "bold"}} />
      </Appbar.Header>
      <ScrollView>
        <View style = {styles.container}>
          <Image
          style = {styles.image} 
          source = 
          {{uri: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2023/01/12/9fa582e9-d297-4777-936b-9182df2b6f62-1673528853294-a46fa53e5875021ab7dc0cf2159ee80b.jpg'
          }}/>
          <Text style = {styles.title}>{"\n"}[TREASURE] 2023 TREASURE TOUR HELLO IN JAKARTA</Text>
          <View style = {styles.container2}>
            <Text style = {styles.subtitle}>{"\n"}Informasi Konser</Text>
            <View style={{flexDirection: 'row', marginRight: 5,}}>
              <Text>{'\u2022'} </Text>
              <Text style={styles.body}>Saksikan konser TREASURE berjudul 2023 TREASURE TOUR HELLO IN JAKARTA.</Text>
            </View>
            <View style={{flexDirection: 'row', marginRight: 5,}}>
              <Text>{'\u2022'} </Text>
              <Text style={styles.body}>Konser akan dilaksanakan pada Indonesia Convention Exhibition (ICE) BSD City (Kab. Tangerang) Hall 5-6 pada 18 Maret 2023.</Text>
            </View>
            
            {/* <Text style = {styles.body}>
              {'\u2022'} Saksikan konser TREASURE berjudul titled 2023 TREASURE TOUR [HELLO] IN JAKARTA.
            </Text>
            <Text style = {styles.body}>
              Konser akan dilaksanakan pada Indonesia Convention Exhibition (ICE) BSD City (Kab. Tangerang) Hall 5-6 pada 18 Maret 2023.
            </Text> */}

          </View>
          <View style = {styles.container2}>
            <Text style = {styles.subtitle}>{"\n"}Informasi Pembelian</Text>
            <View style={{flexDirection: 'row', marginRight: 5,}}>
              <Text>{'\u2022'} </Text>
              <Text style={styles.body}>Untuk tiket kategori seated, nomor kursi akan diberikan secara otomatis oleh sistem.</Text>
            </View>
            <View style={{flexDirection: 'row', marginRight: 5,}}>
              <Text>{'\u2022'} </Text>
              <Text style={styles.body}>Seluruh penonton wajib telah melaksanakan vaksinasi lengkap.</Text>
            </View>
            <View style={{flexDirection: 'row', marginRight: 5,}}>
              <Text>{'\u2022'} </Text>
              <Text style={styles.body}>Seluruh penonton harus membawa bukti sertifikat vaksinasi Covid-19.</Text>
            </View>
            <View style={{flexDirection: 'row', marginRight: 5,}}>
              <Text>{'\u2022'} </Text>
              <Text style={styles.body}>Anda harus menyelesaikan pembayaran dalam waktu 30 menit sebelum masa berlaku e-ticket habis.</Text>
            </View>
            
            {/* <Text style = {styles.body}>
              - Untuk tiket kategori seated, nomor kursi akan diberikan secara otomatis oleh sistem.
            </Text>
            <Text style = {styles.body}>
              - Seluruh penonton wajib telah melaksanakan vaksinasi lengkap.
            </Text>
            <Text style = {styles.body}>
              - Seluruh penonton harus membawa bukti sertifikat vaksinasi Covid-19.
            </Text>
            <Text style = {styles.body}>
              - Anda harus menyelesaikan pembayaran dalam waktu 30 menit sebelum masa berlaku e-ticket habis.
            </Text> */}

          </View>
          <View style = {styles.container2}>
            <Text style = {styles.subtitle}>{"\n"}Informasi Tiket{"\n"}</Text>
            <Image
              style = {styles.image} 
              source = {{uri: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2023/01/12/16b7cc32-2dfd-4377-9cae-192714370be5-1673528860776-5aa08aa6a6b59b6321d4c3987fee2c8f.jpg'}}
            />
            <Text style={{fontSize: 5}}>{"\n"}</Text>
            <View style = {styles.box}>
              <Text style = {styles.titlebox}>{"\n"}PURPLE A</Text>
              <Text style = {styles.subtitlebox}>
                Pengembalian tidak tersedia, konfirmasi instan
              </Text>
              <Text style = {styles.pricebox}>{"\n"}Rp2.215.000</Text>
              <View style = {styles.fixToText}>
                <TouchableOpacity style={styles.buttonactive}
                  onPress={() => {}}>
                  <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>VR Venue</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonactive}
                  onPress={() => navigation.navigate("TicketDetails", {artis: setArtis(concert.artis)})}>
                  <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>Pilih</Text>
                </TouchableOpacity>
                {/* <Button title='VR Venue' color = '#34B97F' /> */}
                {/* <Button title='Pilih' color = '#34B97F' onPress={() => navigation.navigate("TicketDetails")}/> */}
              </View>
            </View>
            <Text style={{fontSize: 5}}>{"\n"}</Text>
            <View style = {styles.box}>
              <Text style = {styles.titlebox}>{"\n"}PURPLE B</Text>
              <Text style = {styles.subtitlebox}>
                Pengembalian tidak tersedia, konfirmasi instan
              </Text>
              <Text style = {styles.pricebox}>{"\n"}Rp2.215.000</Text>
              <View style = {styles.fixToText}>
                <TouchableOpacity style={styles.buttonactive}
                  onPress={() => {}}>
                  <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>VR Venue</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonactive}
                  onPress={() => navigation.navigate("TicketDetails")}>
                  <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>Pilih</Text>
                </TouchableOpacity>
                {/* <Button title='VR Venue' color = '#34B97F'/>
                <Button title='Pilih' color = '#34B97F'/> */}
              </View>
            </View>
          </View>
          <View style = {styles.container2}>
            <Text style = {styles.subtitle}>{"\n"}Informasi Lokasi{"\n"}</Text>
            <View style = {styles.boxloc}>
              <Text style = {styles.body}>
                Indonesia Convention Exhibition (ICE) Jalan BSD Grand Boulevard, Pagedangan, Tangerang, Banten
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    alignContent: "center",
  },
  container2: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    width: win.width-20,
  },
  container3: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    width: win.width-20,
    justifyContent: "center"
  },
  textsubtitle: {
    fontSize: 20,
    color: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  appbar : {
    backgroundColor: '#FFFFFF',
    color: 'white',
    marginBottom : 5,
  },
  searchbar : {
    backgroundColor : 'pink',
    color : 'white',
    justifyContent: 'space-evenly',
    marginBottom : 10,
  },
  box: {
    width: win.width-20, 
    height: 160, 
    borderRadius: 15, 
    backgroundColor: "#D9D9D9", 
    paddingHorizontal: 20,
  },
  titlebox : {
    fontSize : 17,
    fontWeight : 'bold',
  },
  subtitlebox : {
    fontSize : 13,
  },
  pricebox : {
    fontSize : 17,
    fontWeight : 'bold',
    color : "#FB648C",
  },
  title : {
    fontSize : 18,
    fontWeight : 'bold',
  },
  subtitle : {
    fontSize : 17,
    color : '#34B97F',
    fontWeight : 'bold',
  },
  body : {
    fontSize : 15,
  },
  image : {
    width: win.width-20, 
    height: 200, 
    borderRadius: 15, 
    overflow: "hidden",
  },
  fixToText : {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 7,
  },
  boxloc : {
    width: win.width-20, 
    height: 100, 
    borderRadius: 15, 
    backgroundColor: "#D9D9D9", 
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  boxloctext : {
    fontSize : 15,
    flex: 1,
  },
  buttonactive: {
    alignItems: "center", 
    backgroundColor: "#34B97F", 
    padding: 10,
    borderRadius: 25,
    padding: 10,
    width: 150,
  },
  buttoninactive: {
    alignItems: "center", 
    backgroundColor: "#B1B1B1", 
    padding: 10,
    borderRadius: 25,
    padding: 10,
    width: 150,
  },
})