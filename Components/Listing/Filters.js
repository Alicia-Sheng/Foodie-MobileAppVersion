import React from 'react';
import { Text, Picker } from 'react-native';
import { ApolloConsumer } from 'react-apollo';

const Filters = ({ limit }) => (
	<ApolloConsumer>
		{client => (
			<>
				{/* <Text>Number of Items:</Text>
				<Picker
					id='limit'
					selectedValue={limit}
					onChange={e => {
						client.writeData({ data: { limit: e.target.value } });
					}}
				>
					<Picker.Item label="5" value="5"/>
					<Picker.Item label="10" value="10" />
				</Picker> */}
			</>
		)}
	</ApolloConsumer>
);

export default Filters;
