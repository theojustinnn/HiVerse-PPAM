import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../config/config";
import { QuerySnapshot } from "@firebase/firestore";
import { collection, where, getcollection, getDocs, onSnapshot, doc, query, updateDoc, addDoc } from "firebase/firestore"; 
import { db } from "../config/config";

const Fetch = () => {
    const [posts_var, setPosts] = useState([]);

    treasureref = doc(db, "concerts", "gKfTh5i6QOf5AN76DHuR");

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
        const q = query(collection(db, "concerts"), where("artis", "==", "TREASURE"));
        onSnapshot(q, (snapshot) => {
          setPosts(snapshot.docs.map((doc) => doc.data()))
        })
      }, []);

    return (
        <View style={{flex:1, marginTop:100}}>
            <FlatList 
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
            />
        </View>
    )
}

export default Fetch;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e5e5e5",
        padding: 15,
        borderRadius:15,
        margin:5,
        marginHorizontal:10,
    },
    innerContainer:{
        alignItems: "center",
        flexDirection: "column",
    },
    itemHeading:{
        fontWeight: "bold",
    },
    itemText: {
        fontWeight: "300"
    }
})