import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class StateRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };
    this.clickedCount = 0;
  }

  handlePress = () => {
    const {onPressHandler, onDoublePressHandler} = this.props;
    // if (this.clickedCount > 0) {
    //   this.clickedCount = 0;
    //   onDoublePressHandler();
    // } else {
    //   this.clickedCount = 1;
    //   setTimeout(() => {
    //     if (this.clickedCount === 1) {
    //       onPressHandler();
    //     }
    //   }, 0.5);
    // }
    this.state.clickCount > 0
      ? this.setState({clickCount: 0}, () => onDoublePressHandler())
      : this.setState(
          prevState => ({clickCount: prevState.clickCount + 1}),
          () =>
            setTimeout(() => {
              if (this.state.clickCount === 1) {
                this.setState({clickCount: 0}, () => onPressHandler());
              }
            }, 400),
        );
  };

  render() {
    const {state, highlighted} = this.props;
    return (
      <TouchableOpacity
        style={[styles.container, highlighted && styles.highlightedContainer]}
        onPress={this.handlePress}>
        <Text style={[styles.title, highlighted && styles.highlightedTitle]}>
          {state}
        </Text>
      </TouchableOpacity>
    );
  }
}

StateRow.propTypes = {
  state: PropTypes.string,
};

StateRow.defaultProps = {
  state: '',
};
