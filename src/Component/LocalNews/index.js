import React, { Component } from 'react';
import { Image, StyleSheet, View, ScrollView } from 'react-native';
import { Container, Header, Title, Subtitle, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Carousel from '../Carousel'

export default class LocalNewsComponent extends Component {
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
                        <Title>Local News</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={styles.content}>
                <ScrollView 
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                >
                    <Card style={styles.card}>
                        <CardItem>
                            <Icon type="FontAwesome" name="address-book" />
                            <Text>Directory</Text>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem>
                            <Icon type="FontAwesome" name="address-book" />
                            <Text>Directory</Text>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem>
                            <Icon type="FontAwesome" name="address-book" />
                            <Text>Directory</Text>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem>
                            <Icon type="FontAwesome" name="address-book" />
                            <Text>Directory</Text>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem>
                            <Icon type="FontAwesome" name="address-book" />
                            <Text>Directory 5</Text>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem>
                            <Icon type="FontAwesome" name="address-book" />
                            <Text>Directory 6</Text>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem>
                            <Icon type="FontAwesome" name="address-book" />
                            <Text>Directory 7</Text>
                        </CardItem>
                    </Card>
                </ScrollView>
                <Grid>
                    <Row>
                        <Col>
                           <Text>Hello</Text>
                        </Col>
                        <Col>
                           <Text>Hello</Text>
                        </Col>
                    </Row>
                </Grid>
                </Content>
            </Container>

        )

    }
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 10,
        marginTop: 10
    },
    card: {
        height: 150,
        width: 200
    }
});