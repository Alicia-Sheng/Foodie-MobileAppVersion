import React from 'react';
import styled from 'styled-components/native';
import { Button, Text } from 'react-native';

const ButtonWrapper = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: ${({ color }) => (color ? color : 'white')};
  padding: 10px;
  line-height: 2px;
  border-radius: 5px;
  font-weight: bold;
  border-width: 4,
  border: solid ${({ color }) => (color ? color : '#de1d0f')};
  text-decoration: none;
`;

const CustomButton = ({ children, color, onClick }) => (
  <ButtonWrapper title={children} color={color} onClick={onClick}>
  </ButtonWrapper>
);

export default CustomButton;
