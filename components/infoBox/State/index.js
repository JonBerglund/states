import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const StateBox = props => {
  const {state, population, populationEq} = props;
  return (
    <View style={styles.container}>
      <Text style={[styles.title, !populationEq && {color: 'red'}]}>{state}:</Text>
      <Text style={styles.text}>{population}</Text>
    </View>
  );
};

export default StateBox;
