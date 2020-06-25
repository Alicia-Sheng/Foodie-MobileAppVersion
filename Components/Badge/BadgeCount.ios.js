import React from 'react';
import { View, Text } from 'react-native';

import { GET_ORDER_TOTAL } from '../../constants/functions';
import { Query } from 'react-apollo';

const BadgeCount = () => (
    <Query query={GET_ORDER_TOTAL}>
        {({ data, loading, error }) => {
            if (loading || error || data.order.total == 0) {
                return null;
            }
            return (
                <View
                    style={{
                        position: 'absolute',
                        right: 18,
                        top: -1,
                        backgroundColor: '#cf3838',
                        borderRadius: 8,
                        width: 16,
                        height: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 12 }}>
                        {data && data.order.total}
                    </Text>
                </View>
            )
        }}
    </Query>
);

export default BadgeCount;
