import React, { Component } from "react";
import { Container, Header,Footer,FooterTab,Content, Tab, Tabs, Form, Item, Label, Input, Left, Right, Button, Icon, Body, Title, Accordion, Grid, Row, Col, Text, Card, CardItem, List, ListItem, Textarea } from "native-base";
import { Picker } from '@react-native-community/picker';
export default class InitialOrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                mobile: '',
                address: '',
                area: ''
            }
        }
    }


    valueChange = (id, value) => {
        let formdata = this.state.user;
        formdata[id] = value;
        this.setState({
            user: formdata
        })
    }

    mobileSubmit = (value) => {
        alert(value);
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
                        <Title>Pre Order Page</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Tabs>
                        <Tab heading="Your Address">
                            <Address user={this.state.user} valueChange={this.valueChange} mobileSubmit={this.mobileSubmit}/>
                        </Tab>
                        <Tab heading="Order Details">
                            <OrderDetail {...this.props} />
                        </Tab>
                        <Tab heading="Any Preference">
                            <Text>Preference</Text>
                        </Tab>
                    </Tabs>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text style={{fontSize: 14, color: 'white'}}>Confirm Order</Text>
                        </Button>
                    </FooterTab>
                </Footer>
                
            </Container>
        );
    }
}

function OrderDetail(props) {
    const { shopId, shopName, shopAddress, shopList } = props.route.params;
    return (
        <Grid>
            <Row>
                <Col>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: '900' }}>Shop Details:</Text>
                                <Text style={{ marginBottom: 5 }}>Name : {shopName}</Text>
                                <Text style={{ marginBottom: 5 }}>Address : {shopAddress}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: '900' }}>Items Details:</Text>
                                <List
                                    style={{ width: '100%', marginHorizontal: -15 }}
                                    keyExtractor={(item, index) => index.toString()}
                                    dataArray={shopList}
                                    renderRow={(data, index) => {
                                        return (
                                            <ListItem style={{ width: '100%' }}>
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
                                            </ListItem>
                                        );
                                    }}
                                />
                            </Body>
                        </CardItem>
                    </Card>
                </Col>
            </Row>
        </Grid>
    )
}

function Address(props) {
    return (
        
            <Form style={{ width: '100%'        }}>
                <Item stackedLabel>
                    <Label>Name</Label>
                    <Input
                        value={props.user['name']}
                        onChangeText={(value) => props.valueChange('name', value)}
                        textContentType={'name'}
                    />
                </Item>
                <Item stackedLabel  >
                    <Label>Mobile</Label>
                    <Input
                        value={props.user['mobile']}
                        onChangeText={(value) => props.valueChange('mobile', value)}
                        keyboardType={"phone-pad"}
                        maxLength={10}
                        onEndEditing={(value) => props.mobileSubmit(value)}
                    />
                </Item>
                <Item stackedLabel  >
                    <Label>Area</Label>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: '100%' }}
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={props.user['area']}
                        onValueChange={(itemValue, itemIndex) => props.valueChange('area', itemValue)}
                    >

                        <Picker.Item label="Kanhar Toly" value="Kanhar Toly" />
                        <Picker.Item label="Puna Toly" value="Puna Toly" />
                        <Picker.Item label="Rail Toly" value="Rail Toly" />
                        <Picker.Item label="Laxmi Nagar" value="Laxmi Nagar" />
                        <Picker.Item label="Ring Road" value="Ring Road" />
                        <Picker.Item label="Hanuman Nagar" value="Hanuman Nagar" />
                        <Picker.Item label="Teachers Colony" value="Teachers Colony" />
                        <Picker.Item label="Ganjan Colony" value="Ganjan Colony" />
                        <Picker.Item label="Kudwa Naka" value="Kudwa Naka" />
                    </Picker>
                </Item>
                <Item stackedLabel  >
                    <Label>Address</Label>
                    <Input
                        multiline={true}
                        numberOfLines={4} 
                        value={props.user['address']}
                        onChangeText={(value) => props.valueChange('address', value)}
                        textContentType={'fullStreetAddress'}
                    />
                </Item>
            </Form>
    )
}