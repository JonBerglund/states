import React from 'react';
import {View, ActivityIndicator as RNActivityIndicator} from 'react-native';

const ActivityIndicator = props => (
  <View style={{flex: 1, justifyContent: 'center'}}>
    <RNActivityIndicator {...props} />
  </View>
);
export default ActivityIndicator;
