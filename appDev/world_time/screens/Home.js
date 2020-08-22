import React, { Component } from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, Image, Alert, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTime from './../components/DateTime';

class Home extends Component {
     constructor(props) {
          super(props);
          this.state = {
               isDay: true,
               utc_offset: false,
               location: 'Your Location'
          };
     }

     backAction = () => {
          Alert.alert("Oops!", "Are you sure you want to Exit?", [
               {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
               },
               { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
     };


     componentDidMount() {
          if (this.props.route.params) {
               this.setState({
                    isDay: this.props.route.params.isDay,
                    utc_offset: this.props.route.params.utc_offset,
                    location: this.props.route.params.location

               });
               this.storeDate();
          } else {
               let day = moment().format('a') == 'am' ? true : false;
               this.setState({ isDay: day });
               const isDay = AsyncStorage.getItem('@isDay');
               if (isDay) {
                    this.retrieveData();
               }
          }

          BackHandler.addEventListener("hardwareBackPress", this.backAction);
     }

     storeDate = async () => {
          try {
               await AsyncStorage.setItem('@isDay', this.props.route.params.isDay ? 'true' : 'false');
               await AsyncStorage.setItem('@utc_offset', this.props.route.params.utc_offset);
               await AsyncStorage.setItem('@location', this.props.route.params.location);
          } catch (error) {
               Alert.alert("Oops", "Theis is an error saving data to the storage");
          }
     };

     retrieveData = async () => {
          try {
               const isDay = await AsyncStorage.getItem('@isDay');
               const utc_offset = await AsyncStorage.getItem('@utc_offset');
               const location = await AsyncStorage.getItem('@location');

               this.setState({
                    isDay: isDay == 'true' ? true : false,
                    utc_offset: utc_offset,
                    location: location
               });

          } catch (error) {
               Alert.alert("Oops", "Theis is an error getting Data");
          }
     };


     render() {
          return (
               <View style={[styles.container, { backgroundColor: this.state.isDay ? 'white' : 'black' }]}>
                    <View style={{ alignItems: 'center' }}>
                         <Image
                              style={{ height: 100, width: 100 }}
                              source={this.state.isDay ? require('./../assets/day.png') : require('./../assets/night.png')}
                         />
                         <Text
                              style={{
                                   color: this.state.isDay ? 'black' : 'white'
                              }}
                         >
                              {this.state.location}
                         </Text>
                         <DateTime
                              utfOffset={this.state.utc_offset}
                              isDay={this.state.isDay}
                         />
                    </View>
                    <View style={{ marginTop: 20 }} >
                         <TouchableOpacity
                              style={styles.chooseTimeZone}
                              onPress={() => { this.props.navigation.push('Locations'),{reset: true}}}
                         >
                              <Text>
                                   🕓 Choose Time Zone
                              </Text>
                         </TouchableOpacity>
                    </View>
               </View>
          );
     }
}
const styles = StyleSheet.create({
     chooseTimeZone: { backgroundColor: 'white', padding: 5, borderRadius: 10 },
     container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})
export default Home;
