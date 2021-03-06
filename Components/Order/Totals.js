import React from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Totals = ({ total }) => (

  <>
    <View style={styles.containerStyle}>
      <View style={styles.orderStyle}>
        <Icon name="ios-cart" size={20} style={{ marginRight: 8 }} />
        <Text style={{ fontSize: 20 }}>{`Order totals: $${`${parseFloat(total.toFixed(2))}`}`}</Text>
      </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  orderStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '2%',
  }
});
export default Totals;
