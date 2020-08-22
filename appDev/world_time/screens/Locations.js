import React, { useState } from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { FlatList, TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import locationData from './data/LocationData';
import { api } from './data/api'

const Locations = ({navigation}) => {

     const [locations, setLocations] = useState([]);
     const [loading, setLoading] = useState(false);

     const getTime = async (location) => {
          setLoading(true);
          try {
               let response = await fetch(
                    api + location
               );

               let json = await response.json();
               
               let isDay = moment()
               .utcOffset(json.utc_offset)
               .format('a');

               navigation.push('Home', {
                    location: location,
                    utc_offset: json.utc_offset,
                    isDay: isDay === 'am' ? true:false
               });
          } catch (error) {
               console.error(error);
          }
     };

     const renderLocaionButton = ({ item }) => {
          return (
               <TouchableOpacity
                    style={styles.touch}
                    onPress={() => getTime(item)}
               >
                    <Text>{item}</Text>
               </TouchableOpacity>
          );
     };

     const searchItems = (value) => {
          if (value) {
               const words = locationData;
               const result = words.filter(word => word.includes(value));
               setLocations(result);
          } else {
               setLocations([]);
          }

     };

     return (
          <>
               <TextInput style={styles.input} onChangeText={(value) => searchItems(value)} placeholder="search to show items..." />
               <View style={loading ? styles.loading : {position: 'absolute'}}>
                    <ActivityIndicator size="large" color="white" animating={loading} />
               </View>
               <FlatList
                    data={locations}
                    renderItem={renderLocaionButton}
                    keyExtractor={item => item}
                    style={{ marginTop: 3 }}
               />
          </>
     )
}

export default Locations

const styles = StyleSheet.create({
     input: {
          margin: 5,
          backgroundColor: 'rgba(0,0,0,0.20)',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 8
     },
     touch: {
          backgroundColor: '#ddd',
          padding: 10,
          marginHorizontal: 2,
          marginVertical: 2,
          borderRadius: 5
     },
     loading: {
          position: 'absolute',
          top: 0, left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
          backgroundColor: "rgba(0,0,0,0.50)"
     },
})
