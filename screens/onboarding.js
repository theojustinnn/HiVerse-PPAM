import React from "react";
import { Dimensions, StyleSheet, Button, Image, Text, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation, useRoute } from "@react-navigation/native";
import HomeConcert from "./homeConcert";

const win = Dimensions.get("window");

const Done = () => (
  <TouchableOpacity>
    <Text style={{padding: 15, fontSize: 15}}>Tutup</Text>
  </TouchableOpacity>
);

const Next = () => (
  <TouchableOpacity>
    <Text style={{padding: 15, fontSize: 15}}>Lanjut</Text>
  </TouchableOpacity>
);

const Skip = () => (
  <TouchableOpacity>
    <Text style={{padding: 15, fontSize: 15}}>Lewati</Text>
  </TouchableOpacity>
);

export default function Board() {
  const navigation = useNavigation();

  return (
      <Onboarding
      DoneButtonComponent={Done}
      NextButtonComponent={Next}
      SkipButtonComponent={Skip}
      titleStyles={styles.title}
      onSkip={navigation.navigate(HomeConcert)}
        pages={[
          {
            backgroundColor: '#ffffff',
            image: <Image source={require("../assets/hiverseLogo.jpg")}
              style={{width: win.width/2, height: win.width/2}} />,
            title: 'Temukan konser impian kamu',
            subtitle: 'Hanya di HiVerse!',
            subTitleStyles: styles.subtitle1,
          },
          {
            backgroundColor: '#ffbfd2',
            image: <Image source={require("../assets/onboarding1.png")} 
              style={{width: win.width*5/6, height: win.width*5/6}} />,
            title: 'Temukan konser impian kamu',
            subtitle: 'Hanya di HiVerse!',
            subTitleStyles: styles.subtitle2,
          },
          {
            backgroundColor: '#74e1b2',
            image: <Image source={require("../assets/onboarding2.png")} 
              style={{width: win.width*5/6, height: win.width*5/6}}/>,
            title: 'Semuanya hanya di',
            subtitle: 'HiVerse!',
            subTitleStyles: styles.subtitle3,
          },
        ]}
      />
    )
};

const styles = StyleSheet.create({
  title : {
    fontSize : 22,
    fontWeight : 'bold',
  },
  subtitle1 : {
    fontSize : 18,
    color : '#34B97F',
    fontWeight : 'bold',
  },
  subtitle2 : {
    fontSize : 18,
    color : '#FB648C',
    fontWeight : 'bold',
  },
  subtitle3 : {
    fontSize : 18,
    fontWeight : 'bold',
  },
})