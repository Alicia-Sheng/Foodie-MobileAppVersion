import React from 'react';
import { TouchableOpacity, FlatList, View, Text, Button, Image } from 'react-native';
import styled from 'styled-components/native';
// import ListingItem from '../Components/Listing/ListingItem'
import data from '../assets/data.js';

const Home = ({ navigation }) => {
  return (
    <ListingsWrapper>
      {<Listings
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ListingItemWrapper onPress={() => navigation.navigate('Detail', { item })}>
            <Thumbnail source={item.img.src} />
            <View style={{ flex: 1 }}>
              <Title>{item.name}</Title>
              <Price>{item.price}</Price>
            </View>
          </ListingItemWrapper>
        )}
      />}
    </ListingsWrapper>
  )
};


// const Home = ({ navigation }) => {
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState('');
//   const [data, setData] = React.useState([]);

//   const fetchAPI = async () => {
//       try {
//           const data = await
//               fetch('https://my-json-server.typicode.com/PacktPublishing/React-Projects/listings');
//           const dataJSON = await data.json();
//           if (dataJSON) {
//               setData(dataJSON);
//               setLoading(false);
//           }
//       } catch (error) {
//           setLoading(false);
//           setError(error.message);
//       }
//   };
//   React.useEffect(() => {
//       fetchAPI();
//   }, []);

//   return (
//     <ListingsWrapper>
//       {!loading && !error && <FlatList
//           data={data}
//           keyExtractor={item => String(item.id)}
//           renderItem={({ item }) => <ListingItem item={item} />}
//         />}

//       <Button
//         title="Add to Carts"
//         onPress={() => {
//           navigation.navigate('Order');
//         }}
//       />
//     </ListingsWrapper>
//   )
// };

const ListingsWrapper = styled(View)`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
`

const Listings = styled(FlatList)`
width: 100%;
padding: 5%;
`;

const ListingItemWrapper = styled(TouchableOpacity)`
display: flex;
flex-direction: row;
padding: 2%;
background-color: #eee;
border-radius: 5px;
margin-bottom: 5%;
`;

const Title = styled(Text)`
flex-wrap: wrap;
width: 90%;
font-size: 20px;
`;

const Price = styled(Text)`
font-weight: bold;
font-size: 20px;
color: blue;
`;

const Thumbnail = styled(Image)`
border-radius: 5px;
margin-right: 4%;
height: 100px;
width: 100px;
`;

export default Home;
