import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import StateList from '../components/lists/State';
import SearchField from '../components/searchField';
import ActivityIndicator from '../components/native/ActivityIndicator';

import * as actions from '../data/requests';
import {PARSE_ERR, RESPONSE_ERR} from '../helpers/consts';
import DetailBox from '../components/infoBox/Details';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      pickedStateIndex: -1,
      filter: '',
      loading: true,
      errorMessage: '',
    };
  }

  componentDidMount = async () => {
    // Calls the staste and set.
    try {
      const data = await actions.getStates();
      this.setState({
        loading: false,
        data: data.data.map((val, index) => ({...val, id: index})),
      });
    } catch (err) {
      let message = '';
      switch (err) {
        case PARSE_ERR: {
          message += 'Parse data error';
          break;
        }
        case RESPONSE_ERR: {
          message += 'Response error.\nTry again later.';
          break;
        }
      }
      this.setState({loading: false, errorMessage: message});
    }
  };

  getCounties = async stateIndex => {
    const states = this.state.data;
    if (states[stateIndex].details) return;

    try {
      const data = await actions.getCounties(states[stateIndex].detail);
      states[stateIndex].details = data.data;
      this.setState({dataLoading: false, data: states});
    } catch (err) {
      let message = '';
      switch (err) {
        case PARSE_ERR: {
          message += 'Parse data error';
          break;
        }
        case RESPONSE_ERR: {
          message += 'Response error.\nTry again later.';
          break;
        }
        default:
          message += 'Error occurred.';
          break;
      }
      this.setState({dataLoading: false, errorMessage: message});
    }
  };

  onPressHandler = pickedState => {
    this.setState(
      {...this.state, dataLoading: true, pickedStateIndex: pickedState},
      () => this.getCounties(pickedState),
    );
  };

  onDoublePressHandler = index => {
    let data = this.state.data;
    data[index].highlighted = !data[index]?.highlighted;
    this.setState({...this.state, data: data});
  };

  getFilteredData = () => {
    return this.state.data.filter(val =>
      val.state.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  render() {
    const {
      data,
      pickedStateIndex,
      filter,
      loading,
      dataLoading,
      errorMessage,
    } = this.state;
    const listHandlers = {
      onPressHandler: this.onPressHandler,
      onDoublePressHandler: this.onDoublePressHandler,
    };

    return loading ? (
      <ActivityIndicator size="large" />
    ) : (
      <View style={styles.container}>
        {!!errorMessage && (
          <Text style={{color: 'red', fontSize: 15}}>{errorMessage}</Text>
        )}
        <SearchField
          value={filter}
          searchHandler={text => this.setState({filter: text})}
          onClearHandler={() => this.setState({filter: ''})}
        />
        <View style={styles.listsContainer}>
          <StateList data={data} {...listHandlers} />
          <StateList data={this.getFilteredData()} {...listHandlers} />
          {pickedStateIndex > -1 && (
            <View style={{flex: 1}}>
              <DetailBox data={data[pickedStateIndex]} loading={dataLoading} />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  listsContainer: {
    flex: 2,
    flexDirection: 'row',
  },
});
