import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';


const ContentContainer = styled(View)`
  margin-bottom: 10px;
`;

const HeaderWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
  padding-right: 3%;
  padding-top: 20px;
  padding-bottom: 10px
`;

const SectionText = styled(Text)`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;
const SeeAllButtonWrapper = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SeeAllText = styled(Text)`
  color: #Cf3838;
  font-size: 20px;
  font-weight: bold;
`;

const ArrowIcon = styled(Icon).attrs({
  name: 'chevron-right',
  size: 25,
})`
  color: #Cf3838;
  margin-left: -5px;
  width: 25px;
  height: 25px;
`;

const Section = ({ title, nextRoute, navigation, category }) => (
  <ContentContainer>
    <View>
      <HeaderWrapper>
        <SectionText>{title}</SectionText>
        <SeeAllButtonWrapper
          onPress={() => navigation.navigate(nextRoute, {
            category
          })}
        >
          <SeeAllText>See All</SeeAllText>
          <ArrowIcon />
        </SeeAllButtonWrapper>
      </HeaderWrapper>
    </View>
  </ContentContainer>
);

export default withNavigation(Section);
