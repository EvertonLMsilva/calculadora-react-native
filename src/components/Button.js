import React from 'react';
import { Dimensions, Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const style = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').height / 8,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
});

const Button = (props) => {
    return (
      <TouchableHighlight onPress={props.onClick}>
        <Text style={style.button}>{props.label}</Text>
      </TouchableHighlight>
    );
  };

export default Button;
