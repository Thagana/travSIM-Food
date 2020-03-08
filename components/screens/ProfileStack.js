import * as React from 'react';
import { Image, View, Text, StyleSheet, ScrollView } from 'react-native';
import { Banner, Avatar, Card, Title, Paragraph, DataTable, Caption } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';


export default class Profile extends React.Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <ScrollView>
              <Banner
                  visible={this.state.visible}
                  actions={[
                    {
                      label: 'Fix it',
                      onPress: () => this.setState({ visible: false }),
                    },
                    {
                      label: 'Learn more',
                      onPress: () => this.setState({ visible: false }),
                    },
                  ]}
                  icon={({ size }) =>
                    <Image
                      source={{ uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4' }}
                      width={30}
                      height={30}
                    />
                  }
                >
                There was a problem processing a transaction on your credit card.
              </Banner>
              <View style={styles.container}>
                <View>
                  <Image source={require('../../assets/index.jpg')}   style={styles.logo}/>
                </View>
                <View>
                    <Title>Samuel Mothwa</Title>
                    <Paragraph>
                      I love cheese burger and pizza, most off all I love roasted chicked with a pit of maxican chillie
                    </Paragraph>
                </View>
                <View>
                      <View>
                        <Caption>Summary of Orders</Caption>
                      </View>
                        <DataTable>
                            <DataTable.Header>
                              <DataTable.Title>Name</DataTable.Title>
                              <DataTable.Title numeric>Price</DataTable.Title>
                              <DataTable.Title>Description</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row>
                              <DataTable.Cell>Fried Chicken</DataTable.Cell>
                              <DataTable.Cell>R 159</DataTable.Cell>
                              <DataTable.Cell>Sunday Special Meal by Chef John Doe</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                              <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                              <DataTable.Cell>R 12.0</DataTable.Cell>
                              <DataTable.Cell>One of a kind dulux special</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Pagination
                              page={1}
                              numberOfPages={3}
                              onPageChange={(page) => { console.log(page); }}
                              label="1-2 of 6"
                            />
                          </DataTable>
                </View>

                <View>
                        <View>
                          <Text>Actions</Text>
                        </View>
                        <DataTable>
                          <DataTable.Header>
                            <DataTable.Title>Delete Account</DataTable.Title>
                            <DataTable.Title>Account Freez</DataTable.Title>
                          </DataTable.Header>

                          <DataTable.Row>
                            <DataTable.Cell>
                              <MaterialIcons
                                  name="trash"
                              />
                            </DataTable.Cell>
                            <DataTable.Cell>
                              <MaterialIcons
                                  name="info"
                              />
                            </DataTable.Cell>
                          </DataTable.Row>
                        </DataTable>
                </View>
                
              </View>
      </ScrollView>
    );
  }
}

const styles =  StyleSheet.create({
    container: {
    justifyContent: 'center',
    alignItems: 'center',
    },
    logo: {
      width: 150, 
      height: 150, 
      borderRadius: 150/2
    },
})