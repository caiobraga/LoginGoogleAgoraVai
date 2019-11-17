import React, {Component} from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import LoadingScreen from './src/screens/loadingScreen';
import DashboardScreen from './src/screens/dashboardScreen';
import LoginScreen from './src/screens/loginScreen';
import PeopleDetail from './src/screens/PeopleDetailPage';
import Slot from './src/screens/slot';
import * as firebase from "firebase";
import {firebaseConfig} from'./config';
firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <AppNavigator />
  );
}
const AppSwitchNavigator = createSwitchNavigator({
	loadingScreen:LoadingScreen,
	login:LoginScreen,
	dashboard:DashboardScreen,
	PeopleDetail:PeopleDetail,
	slot:Slot,
})
const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
