import React, { Component } from 'react';
import { StyleSheet, Platform, View, ToastAndroid } from 'react-native';
import { Container, Header, Content, Label, Grid, Row, Col, List, ListItem, Toast, Footer, Badge, Left, Body, Right, Item, Input, Text, Icon, Button, Title, Subtitle, Form } from 'native-base';
import { Picker } from '@react-native-community/picker';

export default class GroceryShopsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopList: [
                { text: 'Tata Salt', unit: 'Kg', quantity: '1', itemValue: '1 Kg.' },
                { text: 'Parle G Biscuit', unit: 'Small', quantity: '5', itemValue: '5 Small Pkg.' }
            ],
            newShopText: '',
            textValidation: false,
            metadata: {
                quantity: '1',
                unit: 'Kg'
            }
        }
    }

    addShopList = () => {
        let newShopList = this.state.shopList;
        let newShopText = this.state.newShopText;
        if (newShopText.trim()) {
            let quantity = this.state.metadata['quantity'];
            let unit = this.state.metadata['unit'];
            let itemValue = quantity + ' ' + unit;
            newShopList.push({
                text: newShopText,
                quantity: quantity,
                unit: unit,
                itemValue: itemValue
            });
            this.setState({
                shopList: newShopList,
                newShopText: ''
            });

            ToastAndroid.showWithGravity(
                "Added Successfully!",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );

        } else {
            this.setState({
                textValidation: true
            })
        }
    }

    onValueChange(id, value) {
        let formdata = this.state.metadata;
        formdata[id] = value

        let quantity = '';
        if (id === 'unit') {
            if (this.state.metadata['unit'] === 'Kg' || this.state.metadata['unit'] === 'Litre' || this.state.metadata['unit'] === 'Dozen') {
                quantity = '1';
            } else if (this.state.metadata['unit'] === 'Gram' || this.state.metadata['unit'] === 'Ml') {
                quantity = '500'
            } else if (this.state.metadata['unit'] === 'Pouch' ||
                this.state.metadata['unit'] === 'No' ||
                this.state.metadata['unit'] == 'Small Pkg' ||
                this.state.metadata['unit'] == 'Medium Pkg' ||
                this.state.metadata['unit'] == 'Large Pkg') {
                quantity = '1'
            }
            formdata['quantity'] = quantity;
        }

        this.setState({
            metadata: formdata
        });
    }

    removeShopList = (item, itemValue) => {
        let newShopList = this.state.shopList;
        let index = newShopList.findIndex(r => (r.text === item && r.itemValue === itemValue));
        if (index > -1) {
            newShopList.splice(index, 1);
            this.setState({
                shopList: newShopList
            });
            if (Platform.OS === 'android') {
                ToastAndroid.showWithGravity(
                    "Removed Successfully!",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                );
            }
        }
    }

    orderPlaced = () => {
        let orderParam = {
            ...this.props.route.params,
            shopList: this.state.shopList
        }
        this.props.navigation.navigate('InitialOrderPage', { ...orderParam });
    }

    render() {
        const { shopId, shopName, shopAddress } = this.props.route.params;
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
                        <Title style={{ width: 275 }}>{shopName}</Title>
                        <Subtitle style={{ width: 275 }}>{shopAddress}</Subtitle>
                    </Body>

                    <Right>
                        <Icon button onPress={() => this.orderPlaced()} style={{ color: 'white', fontSize: 45 }} type='FontAwesome' name='shopping-cart'></Icon>
                        <Badge button onPress={() => this.orderPlaced()} danger style={{ position: 'absolute', right: -5, height: 25 }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>{this.state.shopList.length}</Text>
                        </Badge>
                    </Right>
                </Header>

                <List
                    keyExtractor={(item, index) => index.toString()}
                    dataArray={this.state.shopList}
                    renderRow={(data, index) => {
                        return (
                            <ListItem>
                                <Body>
                                    <Grid>
                                        <Col style={{ width: '65%' }}>
                                            <Text>{data.text}</Text>
                                        </Col>
                                        <Col style={{ width: '35%' }}>
                                            <Text style={{ textAlign: 'right' }}>{data.itemValue}</Text>
                                        </Col>
                                    </Grid>
                                </Body>
                                <Right style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon style={{ color: '#d9534f' }} button onPress={() => this.removeShopList(data.text, data.itemValue)} type='FontAwesome' name='close' />
                                </Right>
                            </ListItem>
                        );
                    }}
                />

                {(this.state.shopList.length === 0) && <Content>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Icon type='FontAwesome' style={{ fontSize: 60 }} name='shopping-basket'></Icon>
                        <Text>No item in shopping list.</Text>
                        <Text>Add item and order by clicking cart button above.</Text>
                    </View>
                </Content>}

                <Footer style={{ backgroundColor: 'white', height: 125 }} >
                    <Grid style={{ marginHorizontal: 10 }}>
                        <Row>
                            <Col>
                                <Item style={{ borderBottomColor: (this.state.textValidation) ? '#d9534f' : '#c9c9c9' }}>
                                    <Input placeholder="Enter Shopping List"
                                        value={this.state.newShopText}
                                        onChangeText={(newShopText) => this.setState({ newShopText, textValidation: false })}
                                    />
                                </Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ width: '50%' }}>
                                <Item>
                                    <Picker
                                        style={{ width: '100%' }}
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.metadata['unit']}
                                        onValueChange={(itemValue, itemIndex) => this.onValueChange('unit', itemValue)}
                                    >

                                        <Picker.Item label="Kg" value="Kg" />
                                        <Picker.Item label="Gram (g)" value="Gram" />
                                        <Picker.Item label="Litre (l)" value="Litre" />
                                        <Picker.Item label="Mili Litre (ml)" value="Ml" />
                                        <Picker.Item label="Small (Chota)" value="Small Pkg" />
                                        <Picker.Item label="Medium. (Medium)" value="Medium Pkg" />
                                        <Picker.Item label="Large. (Bada)" value="Large Pkg" />
                                        <Picker.Item label="No. (Nag)" value="No" />
                                        <Picker.Item label="Sachet (Pouch/Packet)" value="Pouch" />
                                        <Picker.Item label="Dozen" value="Dozen" />
                                    </Picker>
                                </Item>
                            </Col>
                            <Col>
                                {(this.state.metadata['unit'] === 'Kg' || this.state.metadata['unit'] === 'Litre' || this.state.metadata['unit'] === 'Dozen') &&
                                    <Item >
                                        <Picker
                                            mode="dropdown"
                                            iosIcon={<Icon name="arrow-down" />}
                                            style={{ width: '75%' }}
                                            placeholderStyle={{ color: "#bfc6ea" }}
                                            placeholderIconColor="#007aff"
                                            selectedValue={this.state.metadata['quantity']}
                                            onValueChange={(itemValue, itemIndex) => this.onValueChange('quantity', itemValue)}
                                        >
                                            <Picker.Item label="0.5" value="0.5" />
                                            <Picker.Item label="1" value="1" />
                                            <Picker.Item label="1.25" value="1.25" />
                                            <Picker.Item label="1.5" value="1.5" />
                                            <Picker.Item label="2" value="2" />
                                            <Picker.Item label="2.5" value="2.5" />
                                            <Picker.Item label="5" value="5" />
                                            <Picker.Item label="10" value="10" />
                                        </Picker>
                                        <Icon button onPress={() => this.addShopList()} style={{ marginHorizontal: 10 }} type='FontAwesome' name='paper-plane' />
                                    </Item>
                                }
                                {(this.state.metadata['unit'] === 'Gram' || this.state.metadata['unit'] === 'Ml') &&
                                    <Item >
                                        <Picker
                                            mode="dropdown"
                                            iosIcon={<Icon name="arrow-down" />}
                                            style={{ width: '75%' }}
                                            placeholderStyle={{ color: "#bfc6ea" }}
                                            placeholderIconColor="#007aff"
                                            selectedValue={this.state.metadata['quantity']}
                                            onValueChange={(itemValue, itemIndex) => this.onValueChange('quantity', itemValue)}
                                        >

                                            <Picker.Item label="10" value="10" />
                                            <Picker.Item label="20" value="20" />
                                            <Picker.Item label="50" value="50" />
                                            <Picker.Item label="100" value="100" />
                                            <Picker.Item label="150" value="150" />
                                            <Picker.Item label="200" value="200" />
                                            <Picker.Item label="250" value="250" />
                                            <Picker.Item label="500" value="500" />
                                            <Picker.Item label="750" value="750" />
                                        </Picker>
                                        <Icon button onPress={() => this.addShopList()} style={{ marginHorizontal: 10 }} type='FontAwesome' name='paper-plane' />
                                    </Item>
                                }
                                {(this.state.metadata['unit'] === 'Pouch' ||
                                    this.state.metadata['unit'] === 'No' ||
                                    this.state.metadata['unit'] == 'Small Pkg' ||
                                    this.state.metadata['unit'] == 'Medium Pkg' ||
                                    this.state.metadata['unit'] == 'Large Pkg') &&
                                    <Item>
                                        <Picker
                                            mode="dropdown"
                                            iosIcon={<Icon name="arrow-down" />}
                                            style={{ width: '75%' }}
                                            placeholderStyle={{ color: "#bfc6ea" }}
                                            placeholderIconColor="#007aff"
                                            selectedValue={this.state.metadata['quantity']}
                                            onValueChange={(itemValue, itemIndex) => this.onValueChange('quantity', itemValue)}
                                        >

                                            <Picker.Item label="1" value="1" />
                                            <Picker.Item label="2" value="2" />
                                            <Picker.Item label="3" value="3" />
                                            <Picker.Item label="4" value="4" />
                                            <Picker.Item label="5" value="5" />
                                            <Picker.Item label="6" value="6" />
                                            <Picker.Item label="7" value="7" />
                                            <Picker.Item label="8" value="8" />
                                            <Picker.Item label="9" value="9" />
                                            <Picker.Item label="10" value="10" />
                                        </Picker>
                                        <Icon button onPress={() => this.addShopList()} style={{ marginHorizontal: 10 }} type='FontAwesome' name='paper-plane' />
                                    </Item>
                                }
                            </Col>
                        </Row>
                    </Grid>
                </Footer>
            </Container>
        )
    }
}
