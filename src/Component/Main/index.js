import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, Title, Subtitle, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Carousel from '../Carousel';
//import PushNotification from 'react-native-push-notification';

// PushNotification.configure({
//     // (required) Called when a remote or local notification is opened or received
//     onRegister: function(token) {
//         console.log('TOKEN:', token)
//     },
//     onNotification: function(notification) {
//       console.log('LOCAL NOTIFICATION ==>', notification)
//     },
//     senderID: '1039319356434',
//     popInitialNotification: true,
//     requestPermissions: true
// })

// export const LocalNotification = () => {
//     //alert('hi');
//     PushNotification.localNotification({
//       autoCancel: true,
//       bigText:
//         'This is local notification demo in React Native app.',
//       subText: 'Local Notification Demo',
//       title: 'Local Notification Title',
//       message: 'Expand me to see more',
//       vibrate: true,
//       vibration: 300,
//       playSound: false,
//       soundName: 'default',
//       actions: '["Yes", "No"]'
//     })
// }

export default class MainComponent extends Component {

    handleButtonPress = () => {
        alert('hi');
       // LocalNotification()
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.toggleDrawer()}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Gondia CityApp</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={styles.content}>
                    <Carousel 
                        style='slide'
                        items={[{
                            title: 'Welcome, swipe to continue.',
                        }, {
                            title: 'About feature X.',
                        }, {
                            title: 'About feature Y.',
                        }]}
                    />
                    <Text style={styles.text}>Corona Cases:</Text>
                    <Carousel
                        style='stats'
                        itemsPerInterval={4}
                        items={[{
                            label: 'ACTIVE',
                            value: 1,
                        }, {
                            label: 'RECOVERED',
                            value: 39,
                        }, {
                            label: 'TOTAL',
                            value: 120,
                        }, {
                            label: 'YESTERDAY',
                            value: 3,
                        }, {
                            label: 'LAST MONTH',
                            value: 25,
                        }, {
                            label: 'TOTAL DEATH',
                            value: 0,
                        }]}
                    />
                    <Grid style={styles.grid}>
                        <Row>
                            <Col>
                                <Card>
                                    <CardItem button onPress={() => this.props.navigation.navigate('Shop')}>
                                        <Icon type="Entypo" name="shop" />
                                        <Text>Shop</Text>
                                    </CardItem>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <CardItem button onPress={() => this.props.navigation.navigate('Offers')}>
                                        <Icon type="MaterialCommunityIcons" name="sale" />
                                        <Text>Offers</Text>
                                    </CardItem>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <CardItem button onPress={() => this.props.navigation.navigate('Directory')}>
                                        <Icon type="FontAwesome" name="address-book" />
                                        <Text>Directory</Text>
                                    </CardItem>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <CardItem button onPress={() => this.props.navigation.navigate('LocalNews')}>
                                        <Icon type="Entypo" name="news" />
                                        <Text>Local News</Text>
                                    </CardItem>
                                </Card>
                            </Col>
                        </Row>
                    </Grid>
                    {/* <Grid style={{ , marginTop: 5 }}>
                        <Row>
                            <Col>
                                <Button block success
                                    onPress={() => this.props.navigation.navigate('Register')}
                                ><Text >Sell With Us</Text></Button>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid style={{ , marginTop: 5 }}>
                        <Row>
                            <Col>
                                <Button block success
                                    onPress={() => this.props.navigation.navigate('Register')}
                                ><Text >List Your Shop In Directory</Text></Button>
                            </Col>
                        </Row>
                    </Grid> */}
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full onPress={() => this.handleButtonPress()}>
                            <Text style={{fontSize: 16, color: 'white'}}>Notification</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 375,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    content: {
        marginHorizontal: 10,
        marginTop: 10
    },
    grid: {
        marginTop: 5
    },
    text: {
        textAlign: 'left',
        paddingTop: 5,
        paddingBottom: 5
    }
});