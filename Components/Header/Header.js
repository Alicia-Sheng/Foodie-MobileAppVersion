import React from 'react'
import { Header as NBHeader, Body, Title, Left, Right } from 'native-base'
import CustomText from '../CustomText/CustomText';
import HamburgerIcon from '../Button/HamburgerIcon';

const Header = () => {

  return (
    <NBHeader style={{ backgroundColor: 'white', height: 60, borderBottomColor: 'white' }}>
      <Left/>
      <Body>
        {/* <Title style={{ color: 'black' }}>Foodie</Title> */}
        <CustomText>Foodie</CustomText>
      </Body>
      <Right>
        <HamburgerIcon/>
      </Right>
    </NBHeader>
  )
}

export default Header;