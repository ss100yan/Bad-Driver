// import React, { Component } from "react";
// import {
//  Platform,
//  StyleSheet,
//  Text,
//  View,
//  Alert,
//  TouchableOpacity
// } from "react-native";

// export default class geoLocation extends Component {
//  state = {
//    location: null
//  };

//  findCoordinates = () => {
//    navigator.geolocation.getCurrentPosition(
//      position => {
//        const location = JSON.stringify(position);

//        this.setState({ location });
//      },
//      error => Alert.alert(error.message),
//      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//    );
//  };

//  render() {
//    return (
//      <View >
//        <TouchableOpacity onPress={this.findCoordinates}>
//          <Text >Find My Coords?</Text>
//          <Text>Location: {this.state.location}</Text>
//        </TouchableOpacity>
//      </View>
//    );
//  }
// }