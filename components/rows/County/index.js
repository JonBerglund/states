import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CountyRow = props => {
  const {county, population} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{county}</Text>
      <Text style={styles.text}>{population}</Text>
    </View>
  );
};

export default CountyRow;

CountyRow.propTypes = {
  state: PropTypes.string,
};

CountyRow.defaultProps = {
  state: '',
};
