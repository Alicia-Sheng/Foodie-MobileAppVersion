import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const ButtonWrapper = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 30px;
  width: 20%;
  background-color: ${({ color }) => (color ? color : '#cf3838')};
`;

const ButtonText = styled(Text)`
  color: white;
  font-size: 18px;
  line-height: 35px
`;

const Button = ({ children, color, onPress }) => (
  <ButtonWrapper color={color} onPress={onPress}>
    <ButtonText>{children}</ButtonText>
  </ButtonWrapper>
);

export default Button;
