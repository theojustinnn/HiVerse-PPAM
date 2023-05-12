import { View, Text, FlatList, StyleSheet, Pressable, TouchableOpacity, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { Card, Appbar } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NumericFormat } from "react-number-format";
import { firebase } from "../config/config";
import { QuerySnapshot } from "@firebase/firestore";
import { collection, where, getcollection, getDocs, onSnapshot, doc, query, updateDoc, addDoc } from "firebase/firestore"; 
import { db } from "../config/config";

const win = Dimensions.get("window");

const Fetch = () => {
    const [posts_var, setPosts] = useState([]);

    // const docRef = addDoc(collection(db, "concert"), {
    //     date: "10 Juni 2023",
    //     name: "TXT",
    //     price: "2000000",
    // })

    // useEffect(() => {
    //     updateDoc(treasureref, {
    //         date: "20 Maret 2023",
    //         name: "Treasure",
    //         price: "2215000",
    //     })

    //     // addDoc(collection(db, "concerts"), {
    //     //     date: "10 Juli 2023",
    //     //     name: "ENhypen",
    //     //     price: "1000000",
    //     // })
        
    // }, []);
        
    useEffect(() => {
        const q = query(collection(db, "concerts"));
        onSnapshot(q, (snapshot) => {
          setPosts(snapshot.docs.map((doc) => doc.data()))
        })
      }, []);

    return (
        <SafeAreaProvider>
            <Appbar.Header>
            <Appbar.Content style = {styles.appbar} title="Konser" titleStyle={{fontSize: 18, fontWeight: "bold"}}/>
            </Appbar.Header>
            <View style={styles.container}>
                {/* <FlatList 
                    style={{height: "100%"}}
                    data={posts_var}
                    numColumns={1}
                    renderItem={({item}) => (
                        <Pressable style={styles.container}>
                            <View style = {styles.innerContainer}>
                                <Text style={styles.itemHeading}>{item.tanggal}</Text>
                                <Text style={styles.itemText}>{item.artis}</Text>
                            </View>
                            
                        </Pressable>
                    )}
                /> */}
                <FlatList 
                    style={{height: "100%"}}
                    data={posts_var}
                    numColumns={1}
                    renderItem={({item}) => (
                        <TouchableOpacity>
                            <Card style = {styles.cardstyle}>
                                <Card.Cover style = {styles.cardcover} source={{ uri: item.cover }} />
                                <Card.Content>
                                    <Text style = {styles.cardtitle}>{"\n"}{item.namakonser}</Text>
                                    <Text style = {styles.cardsubtitle}>{item.alamat}</Text>
                                    <NumericFormat renderText={text => <Text style={styles.cardprice}>{text}</Text>} value={item.harga} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp"} />
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaProvider>
    )
}

export default Fetch;

const styles = StyleSheet.create({
    // container: {
    //     backgroundColor: "#e5e5e5",
    //     padding: 15,
    //     borderRadius:15,
    //     margin:5,
    //     marginHorizontal:10,
    //     flex: 1,
    //     marginTop: 100,
    // },
    innerContainer:{
        alignItems: "center",
        flexDirection: "column",
    },
    itemHeading:{
        fontWeight: "bold",
    },
    itemText: {
        fontWeight: "300"
    },
    cardstyle: {
        marginBottom : 10,
        padding: 2,
        height: 310,
        width: win.width-20,
      },
    cardtitle : {
        fontSize : 15,
        fontWeight : 'bold',
    },
    cardsubtitle : {
        fontSize : 13,
        color : '#A5A5A5',
    },
    cardprice : {
        color : '#FB648C',
        fontWeight : 'bold',
        fontSize: 15,
    },
    cardcover : {
        resizeMode : 'contain',
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
        alignContent: "center",
      },
})
