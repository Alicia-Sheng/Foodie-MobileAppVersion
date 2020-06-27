import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import IncreQtyButton from './IncreQtyButton';
import DecreQtyButton from './DecreQtyButton';

const OrderItem = ({ item }) => {

    let amount = parseFloat((item.price * item.qty).toFixed(2));

    return (
        <>
            <View style={styles.containerStyle}>
                <Image source={{uri: item.thumbnail}} style={styles.imageStyle} />

                <View style={styles.textStyle}>
                    <Text style={{ color: '#2e2f30', fontSize: 14 }}>{item.name}</Text>
                    <Text style={{ color: '#2e2f30', fontSize: 14 }}>{item.location} </Text>
                    <View style={styles.priceStyle}>
                        <Text style={{ color: '#2e2f30', fontSize: 14, fontWeight: 'bold'}}>${amount}</Text>
                    </View>
                </View>

                <View style={styles.counterStyle}>
                    <DecreQtyButton productId={item.id} />
                    <Text style={{marginHorizontal: 10}}>{item.qty}</Text>
                    <IncreQtyButton productId={item.id}/>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        flex: 1,
        flexWrap: 'wrap',
    },
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#e2e2e2',
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#fff'
    },
    imageStyle: {
        width: 80,
        height: 80,
        marginRight: 20
    },
    textStyle: {
        flex: 2,
        justifyContent: 'center'
    },
    priceStyle: {
        width: 60,
        alignItems: 'center',
        marginTop: 3,
        borderRadius: 3
    },
    counterStyle: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

export default OrderItem;
