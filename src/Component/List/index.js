import React, { Component } from 'react';
import { View, FlatList, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [
                {
                  name: 'Amy Farha',
                  subtitle: 'Vice President'
                },
                {
                  name: 'Chris Jackson',
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  subtitle: 'Vice Chairman'
                }
            ]
        }
    }
    render() { 
        return (
            <View>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.lists}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            subtitle={item.subtitle}
            leftAvatar={{
            source: item.avatar_url && { uri: item.avatar_url },
            title: item.name[0]
            }}
          bottomDivider
          chevron
        />
      )

    addList = () => {
        let a = this.state.lists;
        a.push('world');
        this.setState({
            lists: a
        });
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
 
export default List;