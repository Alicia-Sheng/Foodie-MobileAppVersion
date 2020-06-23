import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from 'react-native-elements';


class HamburgerIcon extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          marginleft: 10,
          marginTop: 20
        }}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer())
        }}>

        <Icon name='menu' size={20} color='black' />
      </TouchableOpacity>
    )
  };
}

export default withNavigation(HamburgerIcon);