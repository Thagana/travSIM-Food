import * as React from 'react';
import { Text, 
        View, 
        StyleSheet, 
        Share,
        Alert,
        TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Avatar, 
        Button, 
        Card, 
        Title, 
        Paragraph } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default class IconComponent extends React.Component {

  state = {
    is_added: false,
    liked: false
  }

  async onShare(description, price, image){
    const shareObj = '${description} - ${image} - ${price}'
    try {
      const result = await Share.share({
            message: description,
          });

          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
  }

    addRating(){
      const { liked } = this.state;
      this.setState({ liked: !liked });  
    }

  addMenuToBill(){
    const { is_added } = this.state;
    if(is_added === true){
      alert('You have remove an item to the list');
    }
    this.setState({ is_added: !is_added });
  }



  render() {
    return (
      <View>
             <Card>
              <Card.Title title={this.props.is_main ? this.props.item_name : this.props.alt_name} subtitle={this.props.is_main ? 'Main' : 'Alternative'} left={(props) => <Avatar.Image size={30} source={require('../assets/chef_img.png')} />} />
              <Card.Content>
                <Title>R {this.props.price}</Title>
                <Paragraph>{this.props.description}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: this.props.image }} />
              <Card.Actions>
                <TouchableOpacity onPress={() => this.addMenuToBill()}>
                  <MaterialIcons
                      name= { this.state.is_added ? "remove-shopping-cart" : "add-shopping-cart"}
                              size={30}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onShare(this.props.description, this.props.image, this.props.price)}>
                    <MaterialIcons
                        name="share" size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialIcons
                    name="attach-money" size={30}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.addRating()}>
                <Ionicons
                      name={this.state.liked ? "ios-heart" : "ios-heart-empty"}
                      color={this.state.liked ? "red" : ""}
                      size={30}
                   />
                </TouchableOpacity>
              </Card.Actions>
            </Card>       
      </View>
    );
  }
}
