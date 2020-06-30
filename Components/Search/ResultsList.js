import React from 'react';
import { FlatList, Text, View } from 'react-native';

import styled from 'styled-components';

import MenuItem from '../Menu/MenuItem';

const ListWrapper = styled(View)`
  width: 100%;
  height: 100%;
  padding-horizontal: 10px;
`;

const NumberResultsFound = styled(Text)`
  margin-vertical: 20px;
  padding-left: 10px;
  color: #Cf3838;
  font-size: 20px;
  font-weight: bold;
`;


const ResultsList = ({ results }) => {

    return (
        <ListWrapper>
            <FlatList

                ListHeaderComponent={() => !!results
                    && results.length > 0 && (
                        <NumberResultsFound>
                            {`${results.length} ${
                                results.length > 1
                                    ? 'Results found'
                                    : 'Result found'
                                }`}
                        </NumberResultsFound>
                    )
                }

                renderItem={({ item }) => (
                    <MenuItem data={item} />
                )}

                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                data={results}
            />
        </ListWrapper>
    );
}

export default ResultsList;
