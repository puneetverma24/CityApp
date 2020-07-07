import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Text, Left, Body, Button, Title, Icon, Right } from 'native-base';
import GroceryShopsList from '../GroceryShop';

export default class TabsExample extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Container>
        <Header>
            <Left>
                <Button
                    transparent
                    onPress={() => this.props.navigation.goBack()}>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body>
                <Title>Shops</Title>
            </Body>
            <Right />
        </Header>
        <Tabs>
          <Tab heading="Grocery">
            <GroceryShopsList {...this.props} />
          </Tab>
          <Tab heading="Vegetables">
            <Text>Vegetables</Text>
          </Tab>
          <Tab heading="Fruits">
            <Text>Fruits</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}