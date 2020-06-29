import React from 'react'
import { Header as NBHeader, Body, Title, Left, Right } from 'native-base'
import CustomText from '../CustomText/CustomText';
import HamburgerIcon from '../Button/HamburgerIcon';

const Header = () => {

  return (
    <NBHeader style={{ backgroundColor: 'white', height: 40, borderBottomColor: 'white', paddingTop: -30, marginHorizontal: -10 }}>
      <Left/>
      <Body>
        <CustomText>Foodie</CustomText>
      </Body>
      <Right style={{ marginBottom: -5 }}>
        <HamburgerIcon/>
      </Right>
    </NBHeader>
  )
}

export default Header;