import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

class DateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
         time: '00:00:00 am'
    };
  }

  componentDidMount() {
     setInterval(() => {
          let time = this.props.utfOffset ? moment().utcOffset(this.props.utfOffset).format('hh:mm:ss a'): moment().format('hh:mm:ss a');
          this.setState({time: time});
     }, 1000);
     
  }

  render() {
    return (
          <View>
               <Text style={{fontSize: 50 , color: this.props.isDay ? 'black':'white'}}>{this.state.time}</Text>
          </View>
    );
  }
}

export default DateTime;
