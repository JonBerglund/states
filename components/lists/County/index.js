import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import CountyRow from '../../rows/County';
import styles from './styles';

const CountyList = props => {
  const {data} = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <CountyRow {...item} />;
        }}
        keyExtractor={(item, index) => `${item.county}${index}`}
      />
    </View>
  );
};

CountyList.propTypes = {
  data: PropTypes.arrayOf({
    state: PropTypes.string,
    population: PropTypes.number,
    cities: PropTypes.number,
  }).isRequired,
};

export default CountyList;
