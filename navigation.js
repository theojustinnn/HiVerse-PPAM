import React from "react";
import TicketDetails from "./screens/ticketDetails";
import TicketPurchase from "./screens/ticketPurchase";
import Payment from "./screens/payment";
import PaymentStatus from "./screens/paymentStatus";
import DetailConcert from "./screens/detailConcert";
import HomeConcert from "./screens/homeConcert";
import Board from "./screens/onboarding";
import Fetch from "./screens/fetch";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, View, Image } from "react-native";

export default function Navigation () {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
            headerShown: false,
            }}>
            
            {/* <Stack.Screen name="OnBoarding" component={Board} /> */}
            <Stack.Screen name="HomeConcert" component={HomeConcert} />
            <Stack.Screen name="DetailConcert" component={DetailConcert} />
            <Stack.Screen name="TicketDetails" component={TicketDetails} />
            <Stack.Screen name="TicketPurchase" component={TicketPurchase} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="PaymentStatus" component={PaymentStatus} />
        </Stack.Navigator>
        </NavigationContainer>

        // <Board />
        // <View style={styles.container}>
        //   <Fetch />
        // </View>
        // <NavigationContainer>
        //   <Stack.Navigator
        //     screenOptions={{
        //       headerShown: false,
        //     }}>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})