import React, { Component } from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard } from 'react-native';

export default class Register extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.header}>App For You</Text>
            <TextInput placeholder="Mobile Number" style={styles.textInput} />
            <TextInput placeholder="Password" style={styles.textInput} />
            <View style={styles.btnContainer}>
              <Button title="Submit" onPress={() => null} />
            </View>
            <Text style={styles.register}>If already register, sign in here</Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: "space-around"
    },
    header: {
      fontSize: 36,
      marginBottom: 48
    },
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      marginBottom: 36
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop: 12
    },
    register: {
      marginTop: 10,
      textAlign: 'center'
    }
  });