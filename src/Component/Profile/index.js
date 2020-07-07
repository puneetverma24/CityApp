import React, { Component } from "react";
import Profile from "./Profile.js";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from "../SignUp/index.js";
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";
const Stack = createStackNavigator();

function ProfileNavigate() {
   return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#3F51B5',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        >
            <Stack.Screen
                name="Profile"
                component={Profile}
            />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
   )
}

export default ProfileNavigate;