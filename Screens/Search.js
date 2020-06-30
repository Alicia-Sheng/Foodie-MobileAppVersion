import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Query } from 'react-apollo';
import { SEARCH } from '../constants/functions';

const Alert = styled(Text)`
  width: 100%;
  text-align: center;
`;

const Search = ({ term }) => {

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
						<Text>{term}</Text>
						<Text>{data}</Text>
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
