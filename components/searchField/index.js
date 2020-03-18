import React from 'react';
import {SearchBar} from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const SearchField = props => {
  const {searchHandler, onClearHandler, value} = props;
  return (
    <SearchBar
      containerStyle={styles.container}
      placeholder="Search"
      clearIcon={{color: 'grey'}}
      onChangeText={searchHandler}
      onClear={onClearHandler}
      value={value}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
    />
  );
};

SearchField.propTypes = {
  data: PropTypes.arrayOf({
    name: PropTypes.string,
    population: PropTypes.number,
    cities: PropTypes.number,
  }).isRequired,
  withFilter: PropTypes.bool,
};

SearchField.defaultProps = {
  withFilter: false,
};

export default SearchField;
