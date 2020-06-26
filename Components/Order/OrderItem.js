import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import IncreQtyButton from './IncreQtyButton';
import DecreQtyButton from './DecreQtyButton';

const OrderItem = ({ item }) => {

    let amount = item.price * item.qty;

    return (
        <>
            <View style={styles.containerStyle}>
                <Image source={item.thumbnail} style={styles.imageStyle} />

                <View style={styles.textStyle}>
                    <Text style={{ color: '#2e2f30', fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ color: '#2e2f30', fontSize: 16 }}>{item.location} </Text>
                    <Text style={{ color: '#2e2f30', fontSize: 16 }}>Quantity: {item.qty}</Text>
                    <View style={styles.priceStyle}>
                        <Text style={{ fontSize: 16 }}>${item.price}</Text>
                    </View>
                </View>

                <View style={styles.counterStyle}>
                    <DecreQtyButton productId={item.id} />
                    <Text>${amount}</Text>
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
        width: 100,
        height: 100,
        marginRight: 20
    },
    textStyle: {
        flex: 2,
        justifyContent: 'center'
    },
    priceStyle: {
        width: 40,
        alignItems: 'center',
        marginTop: 3,
    },
    counterStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

export default OrderItem;
