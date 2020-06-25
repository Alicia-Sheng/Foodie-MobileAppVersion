import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableHighlight, Animated, Easing, Dimensions, Platform, TouableOpacity} from 'react-native';
import AlertSelected from './AlertSelected';

const selectedArr = ["Take pictures", "Alblum"];

class Dialog extends Component {
  constructor(props) {
      super(props);
      this.showAlertSelected = this.showAlertSelected.bind(this);
      this.callbackSelected = this.callbackSelected.bind(this);
  }

  showAlertSelected(){
      this.dialog.show("Please select your photo", selectedArr, '#333333', this.callbackSelected);
  }
  // 回调
  callbackSelected(i){
      switch (i){
          case 0: // take picture
              this.takePhoto();
              break;
          case 1: // alblum
              this.pickMultiple();
              break;
      }
  }
  render() {
      return (
          <View style={stylesCommon.container}>
              <TouchableOpacity onPress={() => {this.showAlertSelected();}}>
                  <View style={styles.imageBorder}>
                      <Text style={styles.photoText}></Text>
                  </View>
              </TouchableOpacity>
              <AlertSelectedref={(dialog)=>{
                  this.dialog = dialog;
              }} />
          </View>
      );
  }
}
