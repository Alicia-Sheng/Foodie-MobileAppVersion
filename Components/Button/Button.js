import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const ButtonWrapper = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: ${({ radius }) => (radius ? radius : '30px')};
  width: ${({ width }) => (width ? width : '25%')};
  height: ${({ height }) => (height ? height : '')};
  background-color: ${({ color }) => (color ? color : '#cf3838')};
`;

const ButtonText = styled(Text)`
  color: white;
  font-size: 18px;
  line-height: 30px
`;

const Button = ({ title, color, onPress, ...props}) => (
  <ButtonWrapper color={color} onPress={onPress} {...props}>
    <ButtonText>{title}</ButtonText>
  </ButtonWrapper>
);

export default Button;
