import React, { Component } from 'react';
import MainComponent from '../Main';
import Register from "../Register";
import SideBar from "../SideBar";
import Profile from "../Profile";
import Offers from "../Offers";
import Shop from "../Shop";
import LocalNews from '../LocalNews';
import Directory from '../Directory';
import ShoppingList from '../ShoppingList';
import InitialOrderPage from '../InitialOrderPage';
import OrderPage from '../OrderPage';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { fcmService } from './../../Services/FCMService';
import { version } from "../../../package.json";
const Drawer = createDrawerNavigator();

export default class HomeScreenRouter extends Component {
  
  constructor(props) {
    super(props);
    this.fcmNotification = null;
  }

  componentDidMount() {
    alert(version);
    this.fcmNotification = fcmService;
    this.fcmNotification.register(this.onRegister, this.onNotification, this.onOpenNotification)
  }

  onRegister(token){
    console.log("[NotificationFCM] onRegister", token);
  }

  onNotification(notify){
    console.log("[NotificationFCM] onNotification", notify);
  }

  onOpenNotification(notify){
    console.log("[NotificationFCM] onOpenNotification", notify);
  }
  


  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <SideBar {...props} />} initialRouteName={'Main'}>
          <Drawer.Screen name="Main" component={MainComponent} />
          <Drawer.Screen name="Register" component={Register} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Shop" component={Shop} />
          <Drawer.Screen name="Offers" component={Offers} />
          <Drawer.Screen name="Directory" component={Directory} />
          <Drawer.Screen name="LocalNews" component={LocalNews} />
          <Drawer.Screen name="ShoppingList" component={ShoppingList} />
          <Drawer.Screen name="InitialOrderPage" component={InitialOrderPage} />
          <Drawer.Screen name="OrderPage" component={OrderPage} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

 