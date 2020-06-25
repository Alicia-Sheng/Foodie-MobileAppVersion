import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableHighlight, Dimensions, Platform, TouableOpacity} from 'react-native';


export default class ScrollableTab extends Component {
  render() {
   return (
     <ScrollableTabView

       renderTabBar={() => (
         <ScrollableTabBar
           style={styles.scrollStyle}
           tabStyle={styles.tabStyle}
         />
       )}
       tabBarTextStyle={styles.tabBarTextStyle}
       tabBarInactiveTextColor={'black'}
       tabBarActiveTextColor={'red'}
       tabBarUnderlineStyle={styles.underlineStyle}
       initialPage={1}
     >

       <View key={'1'} tabLabel={'Details'} style={{flex:1,backgroundColor:'blue'}}/>
       <View key={'2'} tabLabel={'Comment'} style={{flex:1,backgroundColor:'blue'}}/>
     </ScrollableTabView>
   );
 }
}

const styles = StyleSheet.create({
  tabStyle: {},
 scrollStyle: {
   backgroundColor: 'white',
   paddingLeft: 65,
   paddingRight: 65,
   // justifyContent: 'center',
 },
 tabBarTextStyle: {
   fontSize: 14,
   fontWeight: 'normal',
 },
 underlineStyle: {
   height: 3,
   backgroundColor: 'red',
   borderRadius: 3,
   width: 15,
 },
});
