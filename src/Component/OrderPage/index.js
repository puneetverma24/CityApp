import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Container, Header,Footer,FooterTab,Content, Tab, Tabs, Form, Item, Label, Input, Left, Right, Button, Icon, Body, Title, Accordion, Grid, Row, Col, Card, CardItem, List, ListItem, Textarea } from "native-base";
import { Picker } from '@react-native-community/picker';
export default class InitialOrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderList: []
        }
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
                        <Title>Order Page</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Tabs>
                        <Tab heading="Current Order">
                            <View style={{marginHorizontal: 10}}>
                                <FlatList
                                    data={[
                                        {key: 'Devin'},
                                        {key: 'Dan'},
                                        {key: 'Dominic'},
                                        {key: 'Jackson'},
                                        {key: 'James'},
                                        {key: 'Joel'},
                                        {key: 'John'},
                                        {key: 'Jillian'},
                                        {key: 'Jimmy'},
                                        {key: 'Julie'},
                                    ]}
                                    renderItem={({item}) => 
                                    <Card>
                                        <CardItem header button onPress={() => alert("This is Card Header")}>
                                            <Text>{item.key}</Text>
                                        </CardItem>
                                    </Card>
                                    }
                                />
                            </View>
                        </Tab>
                        <Tab heading="Order History">
                        </Tab>
                    </Tabs>
                </Content>
            </Container>
        );
    }
}