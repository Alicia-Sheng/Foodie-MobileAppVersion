
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';


class SegmentTab extends Component{
    constructor() {
      super();
      this.state = {
        selectedIndex: 0
      };
    }

    handleIndexChange = index => {
      this.setState({
        ...this.state,
        selectedIndex: index
      });
    };

    render(){
      return (
        <View>
        <SegmentedControlTab
          values={["Details","Comment"]}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
        </View>
      );
   }
}
