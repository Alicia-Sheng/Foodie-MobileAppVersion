import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

class BackButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          this.props.navigation.pop();
        }}
      >
        <Icon
          name='chevron-left'
          size={20}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default withNavigation(BackButton);