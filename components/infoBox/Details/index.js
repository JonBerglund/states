import React from 'react';
import {View} from 'react-native';

import StateBox from '../State';
import CountyList from '../../lists/County';
import ActivityIndicator from '../../native/ActivityIndicator';

const DetailBox = props => {
  const {data, loading} = props;
  let countyPopulationSum = 0;

  // If counties are alreadt fetched then sums the population in all counties
  // and checks if it equals the state population.
  if (data.details?.length > 0) {
    countyPopulationSum =
      data.population -
      data.details.reduce((prev, county) => ({
        population: parseInt(prev.population) + parseInt(county.population),
      })).population;
  }

  return (
    <View style={{flex: 1}}>
      <StateBox {...data} populationEq={countyPopulationSum === 0} />
      {loading ? <ActivityIndicator /> : <CountyList data={data.details} />}
    </View>
  );
};

export default DetailBox;
