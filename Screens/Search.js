import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Query } from 'react-apollo';
import { SEARCH } from '../constants/functions';
import ResultsList from '../Components/Search/ResultsList';

const Alert = styled(Text)`
  width: 100%;
  text-align: center;
`;

const Search = ({ navigation}) => {

	const term = navigation.getParam(term, '')

	return (
		<Query
			query={SEARCH}
			variables={{ term: term }}
		>
			{({ loading, error, data }) => {
				if (loading || error) {
					return <Alert>{loading ? 'Loading...' : error.message}</Alert>;
				}
				return (
					<View style={styles.container}>
						<ResultsList
							// onSearchRestaurants={onSearchRestaurants}
							// isRequestingNewData={isRequestingNewData}
							results={data.search}
							// dishesTypes={dishesTypes}
							// maxDistance={maxDistance}
						/>
					</View>
				)	
			}}
		</Query>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default Search;
