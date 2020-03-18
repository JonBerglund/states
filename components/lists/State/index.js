import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import StateRow from '../../rows/State';
import styles from './styles';

const StateList = props => {
  const {data, onPressHandler, onDoublePressHandler} = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <StateRow
            state={item.state}
            highlighted={item.highlighted}
            onPressHandler={() => onPressHandler(item.id)}
            onDoublePressHandler={() => onDoublePressHandler(item.id)}
          />
        )}
        keyExtractor={(item, index) => `${item.state}${index}`}
      />
    </View>
  );
};

StateList.propTypes = {
  data: PropTypes.arrayOf({
    state: PropTypes.string,
    population: PropTypes.number,
    cities: PropTypes.number,
  }).isRequired,
};

export default StateList;
