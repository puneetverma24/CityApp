import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Main", "Register", "Profile", "OrderPage"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container> 
          <Image
            source={{
              uri:'https://lh3.googleusercontent.com/5eb9YW5eVProG4sL2A-6Cc8ylWVRHuhKjF5y_GlM99v8Ho6UsbW_usUnqYJt0E517Q'
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
            }}>
          </Image>
          <List
            keyExtractor={(item, index) => item}
            dataArray={routes}
            renderRow={(data) => {
              return (
                <ListItem key={data}
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
      </Container>
    );
  }
}
