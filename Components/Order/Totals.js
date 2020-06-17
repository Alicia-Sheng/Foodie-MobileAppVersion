import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

const TotalsWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
  background: gray;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 2%;
`;

const Total = styled(Text)`
  width: 100%;
  font-size: 18px;
  color: white;
  font-weight: bold;
  text-align: right;
`;

const Totals = ({ count }) => (
  <TotalsWrapper>
    <Total>{`Order Totals: ${count}`}</Total>
  </TotalsWrapper>
);

export default Totals;
