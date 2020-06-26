import React from 'react';
import { View, Text } from 'react-native';

import { GET_CART_TOTAL } from '../../constants/functions';
import { Query } from 'react-apollo';

const BadgeCount = () => (
    <Query Query query = {
        GET_CART_TOTAL
    } >
        {({ data, loading, error }) => {
            if (loading || error || data.cart.total == 0) {
                return null;
            }
            return (
                <View
                    style={{
                        position: 'absolute',
                        right: 30,
                        top: -5,
                        backgroundColor: '#cf3838',
                        borderRadius: 8,
                        width: 16,
                        height: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 12 }}>
                        {data && data.cart.total}
                    </Text>
                </View>
            )
        }}
    </Query>
);

export default BadgeCount;
