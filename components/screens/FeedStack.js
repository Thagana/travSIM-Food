import * as React from 'react';
import { Text, 
        View, 
        StyleSheet, 
        TouchableOpacity, 
        Platform, 
        Share,
        Alert,
        ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Avatar, 
        Button, 
        Card, 
        Title, 
        Paragraph } from 'react-native-paper';

/* External Components */
import MenuItem from './MenuItem';


export default class App extends React.Component {

  state = {
    menu_items : [
      {
        'id': 1,
        'item_name':'Chicken and Rice',
        'date': '09/03/2020',
        'description':'Enjoy this meal made by me on this lovely day',
        'price': 20.00,
        'is_main': true,
        'alt_name': null,
        'image': 'https://picsum.photos/700'
      },
      {
        'id': 2,
        'item_name':'Pumpking spice soup',
        'date': '13/03/2020',
        'description':'My best Dish yet',
        'price': 30.00,
        'is_main': false,
        'alt_name': "Pumpking Pie",
        'image': 'https://picsum.photos/700'
      },
      {
        'id': 3,
        'item_name':'Raddish Salamy',
        'date': '10/03/2020',
        'description':'The best salamy in the country',
        'price': 20.00,
        'is_main': true,
        'alt_name': null,
        'image': 'https://picsum.photos/700'
      },
      {
        'id': 4,
        'item_name':'Roasted Goat',
        'date': '09/03/2020',
        'description':'The royal dish surved by me',
        'price': 100.00,
        'is_main': true,
        'alt_name': null,
        'image': 'https://picsum.photos/700'
      }
    ]
  }

  render() {
    const { menu_items } = this.state;
    return (
        <ScrollView>
          {
            menu_items.length !== 0 ?
            (
              menu_items.map(item => {
                return (
                  <MenuItem
                      key={item.id}
                      item_name={item.item_name}
                      date={item.date}
                      price={item.price}
                      description={item.description}
                      is_main={item.is_main}
                      image={item.image}
                      alt_name={item.alt_name}
                  />
                )
              }) 
              
            ) : 
            (
                <View>
                    <Text>The Chef has not added anything yet</Text>
                </View>
              )
          }
        </ScrollView>
    );
  }
}

