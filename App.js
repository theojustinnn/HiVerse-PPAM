import React from "react";
import Navigation from "./navigation";
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

const App = () => {
  return (
    <Navigation />
  );
};

export default App;