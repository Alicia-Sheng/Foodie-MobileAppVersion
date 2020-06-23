import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const ButtonWrapper = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: ${({ radius }) => (radius ? radius : '30px')};
  width: ${({ width }) => (width ? width : '50px')};
  height: ${({ height }) => (height ? height : '')};
  background-color: ${({ color }) => (color ? color : '#cf3838')};
  position: ${({ position }) => (position ? position : 'relative')};
  top: ${({ top }) => (top ? top : '')};
  right: ${({ right }) => (right ? right : '')};
`;

const ButtonText = styled(Text)`
  color: white;
  font-size: 28px;
  line-height: 46px
`;

const Button = ({ title, color, onPress, ...props}) => (
  <ButtonWrapper color={color} onPress={onPress} {...props}>
    <ButtonText>{title}</ButtonText>
  </ButtonWrapper>
);

export default Button;
