import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const ButtonWrapper = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: ${({ radius }) => (radius ? radius : '30px')};
  width: ${({ width }) => (width ? width : '40px')};
  height: ${({ height }) => (height ? height : '40px')};
  background-color: ${({ color }) => (color ? color : '#cf3838')};
  position: ${({ position }) => (position ? position : 'relative')};
  top: ${({ top }) => (top ? top : 0)};
  right: ${({ right }) => (right ? right : 0)};
`;

const ButtonText = styled(Text)`
  color: white;
  font-size: ${({ font }) => (font ? font : '20px')};
  line-height: 34px
`;

const Button = ({ title, color, onPress, ...props}) => (
  <ButtonWrapper color={color} onPress={onPress} {...props}>
    <ButtonText {...props} >{title}</ButtonText>
  </ButtonWrapper>
);

export default Button;
