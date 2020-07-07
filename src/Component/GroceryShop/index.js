import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon, Button} from 'native-base';
export default class GroceryShopsList extends Component {
  constructor(props){
      super(props);
  }

  navigateShopScreen(params) {
    this.props.navigation.navigate('ShoppingList',{...params});
  }
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar button onPress={() => this.navigateShopScreen({
              shopId: 86,
              shopName: 'Jaydeep Supermarket XYZ Pvt Ltd',
              shopAddress: 'Ring Road, 64 Cross, Highway, Opp. Jalaram Mandir'
            })}>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Jaydeep Supermarket</Text>
                <Text note>Ring Road, 64 Cross, Highway, Opp. Jalaram Mandir</Text>
              </Body>
              <Right style={styles.right}>
                <Button style={styles.rightButton} transparent onPress={() => this.navigateShopScreen({
              shopId: 86,
              shopName: 'Jaydeep Supermarket XYZ Pvt Ltd',
              shopAddress: 'Ring Road, 64 Cross, Highway, Opp. Jalaram Mandir'
            })}>
                    <Icon type="FontAwesome" name="cart-plus" />
                </Button>
              </Right>
            </ListItem>
            <ListItem avatar button onPress={() => this.navigateShopScreen({
              shopId: 3434,
              shopName: 'Arya Grocery'
            })}>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Arya Grocery</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right style={styles.right}>
                <Button style={styles.rightButton} transparent onPress={() => this.navigateShopScreen({
              shopId: 3434,
              shopName: 'Arya Grocery'
            })}>
                    <Icon type="FontAwesome" name="cart-plus" />
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    right: {
        justifyContent: 'center',
        textAlign:'center'
    },
    rightButton: {
        width: 60
    },
    rightIcon: {
        color: 'green'
    }
});