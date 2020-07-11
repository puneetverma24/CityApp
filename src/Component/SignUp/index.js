import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

import { Container, Header,Footer,FooterTab,Content, Tab, Tabs, Form, Item, Label, Input, Left, Right, Button, Icon, Body, Title, Accordion, Grid, Row, Col, Text, Card, CardItem, List, ListItem, Textarea } from "native-base";
function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(null);
  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }



  async function confirmCode() {
    try {
      await confirm.confirm(code)
      .then((user) => {
        // User is logged in
      })
      .catch((error) => {
        // Error with verification code
      });
       
    } catch (error) {
      alert('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <>
       <Item stackedLabel>
          <Label>Phone Number</Label>
          <Input
              value={phoneNumber}
              onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
              keyboardType={"phone-pad"}
              maxLength={10}
          />
      </Item>
    
      <Button
        onPress={() => signInWithPhoneNumber('+91 '+phoneNumber)}
      >
          <Text style={{fontSize: 14}}>Phone Number Sign In</Text>
      </Button> 
      
      </>
    );
  }

  return (
    <>
      <Item stackedLabel>
          <Label>Confirm Code</Label>
          <Input
              value={code}
              onChangeText={text => setCode(text)}
              keyboardType={"phone-pad"}
              maxLength={6}
          />
      </Item>
      <Button
       onPress={() => confirmCode()}
      >
          <Text style={{fontSize: 14}}>Confirm Code</Text>
      </Button>
    </>
  );
}

export default PhoneSignIn;