import React from 'react'
import { Header as NBHeader, Body, Title } from 'native-base'
import CustomText from '../CustomText/CustomText';

const Header = () => {

  return (
    <NBHeader style={{ backgroundColor: 'white', height: 60, borderBottomColor: 'white' }}>
      <Body>
        {/* <Title style={{ color: 'black' }}>Foodie</Title> */}
        <CustomText>Foodie</CustomText>
      </Body>
    </NBHeader>
  )
}

export default Header;