import React from 'react';
import { Query } from 'react-apollo';
import Button from '../Button/Button';
import { GET_ORDER_TOTAL } from '../../constants';

const OrderButton = ({ onClick }) => (
    <Query query={GET_ORDER_TOTAL}>
        {({ data, loading, error }) => (
            <Button onClick={onClick}>
                {`Cart (${loading || error ? 0 : data && data.order.total})`}
            </Button>
        )}
    </Query>
);

export default OrderButton;
