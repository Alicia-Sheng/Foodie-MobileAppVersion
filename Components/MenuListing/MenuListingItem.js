import React, { Component } from "react";
import { Image, TouchableOpacity, View, StyleSheet, ScrollView, TouchableHighlight, StatusBar, Text } from "react-native";
import { Icon, Button } from "native-base";
import Modal from "react-native-modal";
import StarRating from '../Details/StarRating';
import { Mutation } from 'react-apollo';
import { GET_CART, ADD_TO_CART, GET_CART_TOTAL } from '../../constants/functions';


class MenuItem extends Component {

    constructor() {
        super()

        this.state = { isModalVisible1: false, }
    }

    state = {
        isModalVisible1: false,

    };

    toggleModal1 = () => {
        this.setState({ isModalVisible1: !this.state.isModalVisible1 });
    };


    render() {
        const { data } = this.props;
        const { id, name, location, price, thumbnail, desc } = data

        return (
            <Mutation
                mutation={ADD_TO_CART}
                refetchQueries={() => [{ query: GET_CART }, { query: GET_CART_TOTAL }]}
            >
                {addToCart => (
                    <ScrollView>
                        <TouchableHighlight onPress={this.toggleModal1}>
                            <View style={{ flex: 1, backgroundColor: 'white', height: 110, flexDirection: 'row' }}>
                                <View style={{ flex: 0.7, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={{ uri: thumbnail }} style={{ height: 80, width: 80, alignSelf: 'center', borderRadius: 5, marginLeft: 0 }} />
                                </View>
                                <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }}>
                                    <View style={{ flex: .7, backgroundColor: 'white' }}>
                                        <Text style={{ fontSize: 16, marginTop: 5, fontWeight: "bold" }} numberOfLines={1}>{name}</Text>
                                    </View>
                                    <View style={{ flex: .6, backgroundColor: 'white' }}>
                                        <Text style={{ fontSize: 14, marginTop: 5 }} numberOfLines={1}>{location}</Text>
                                    </View>
                                    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
                                        <Text numberOfLines={1} style={{ color: '#585858' }}>{desc}</Text>
                                    </View>
                                    <View style={{ flex: .6, backgroundColor: 'white', justifyContent: 'center' }}>
                                        <Text>${price}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 0.5, backgroundColor: 'white', flexDirection: 'column' }}>
                                    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'flex-end' }}>
                                        <TouchableOpacity style={{ marginRight: 15, marginTop: 5 }}>
                                            {/* <Icon name="md-heart" style={{ color: "#e0e5e5", marginRight: 15, marginTop: 5 }} /> */}
                                            <StarRating
                                                maxStars={5}
                                                rating={5}
                                                disabled={false}
                                                starSize={13}
                                                onStarChange={(value) => onStarRatingPress(value)}
                                                style={{ marginRight: 15, marginTop: 5 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 1, backgroundColor: 'white', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Button
                                            style={{ backgroundColor: '#cf3838', borderRadius: 10, height: 32, width: 75, marginLeft: 0, marginRight: 10, paddingLeft: 30 }}
                                            onPress={() => addToCart({ variables: { productId: id, name: name, location: location, thumbnail: thumbnail, price: price } })}
                                        >
                                            <TouchableOpacity onPress={() => addToCart({ variables: { productId: id, name: name, location: location, thumbnail: thumbnail, price: price } })}>
                                                <View>
                                                    <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }} uppercase={false} > +</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <View style={{ backgroundColor: '#b3b3b3', height: 1, width: '100%' }} />
                        <View style={{ backgroundColor: '#ececec', height: 8, width: '100%' }} />
                        <Modal
                            onSwipeComplete={() => this.setState({ isModalVisible1: false })}
                            swipeDirection="down"
                            scrollTo={this.handleScrollTo}
                            scrollOffset={this.state.scrollOffset}
                            scrollOffsetMax={400 - 300} // content height - ScrollView height
                            style={styles.bottomModal}
                            isVisible={this.state.isModalVisible1}>

                            <View style={{ flex: 0.9, backgroundColor: 'white', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                                <View style={{ alignItems: 'center', backgroundColor: 'white', height: 400, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                                    <View style={{ backgroundColor: '#dddddd', height: 3, width: 50, borderRadius: 5, marginTop: 8 }}></View>
                                    <View style={{ backgroundColor: '#dddddd', height: 3, width: 50, borderRadius: 5, marginTop: 3 }}></View>
                                    <View style={{ backgroundColor: 'white', flex: 1, width: '95%' }}>
                                        <Image source={{ uri: thumbnail }} style={{ width: "88%", height: "88%", alignSelf: 'center', borderRadius: 5, marginTop: 35, aspectRatio: 1.04 }} />
                                    </View>
                                </View>


                                <StatusBar barStyle="light-content" backgroundColor="black" />
                                <Text style={{ fontSize: 20, marginTop: 5, marginHorizontal: 20, fontWeight: "bold" }}>{name}</Text>
                                <Text style={{ fontSize: 18, marginTop: 5, marginHorizontal: 20 }}>{location}</Text>
                                <Text style={{ fontSize: 18, marginTop: 15, marginHorizontal: 20, color: '#646464' }}>{desc}</Text>

                                <View style={{ bottom: 60, position: 'absolute', width: '90%', marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', flex: 1, borderTopWidth: 1, borderTopColor: 'black', borderStyle: 'dashed', borderTopColor: '#ececec' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Price</Text>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>${price}</Text>
                                </View>
                                <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'flex-start', marginLeft: 20, marginTop: 5 }}>
                                    <StarRating
                                        maxStars={5}
                                        rating={5}
                                        disabled={false}
                                        starSize={13}
                                        onStarChange={(value) => onStarRatingPress(value)}
                                        style={{ marginRight: 15, marginTop: 5 }}
                                    />
                                </View>
                                <View style={{ bottom: 0, position: 'absolute', alignItems: 'center', alignContent: 'center', alignSelf: 'center', marginBottom: 10 }}>
                                    <Button onPress={() => addToCart({ variables: { productId: id, name: name, location: location, thumbnail: thumbnail, price: price } })} title="Hide modal" style={{ width: '120%', borderRadius: 10, backgroundColor: '#Cf3838', justifyContent: 'center' }}>
                                        <TouchableOpacity onPress={() => addToCart({ variables: { productId: id, name: name, location: location, thumbnail: thumbnail, price: price } })}>
                                            <Text style={{ fontSize: 17, marginBottom: 5, color: 'white', fontWeight: 'bold' }} uppercase={false}>
                                                Add to Order
                                            </Text>

                                        </TouchableOpacity>
                                    </Button>
                                </View>
                            </View>

                        </Modal>
                    </ScrollView>
                )}
            </Mutation>
        )
    }
}

export default MenuItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    scrollableModal: {
        height: 300,
    },
    scrollableModalContent1: {
        height: 200,
        backgroundColor: '#87BBE0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText1: {
        fontSize: 20,
        color: 'white',
    },
    scrollableModalContent2: {
        height: 200,
        backgroundColor: '#A9DCD3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText2: {
        fontSize: 20,
        color: 'white',
    },
    customBackdrop: {
        flex: 1,
        backgroundColor: '#87BBE0',
        alignItems: 'center',
    },
    customBackdropText: {
        marginTop: 10,
        fontSize: 17,
    },
});


// import React from 'react';
// import styled from 'styled-components/native';
// import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
//
// import AddToOrderButton from '../Order/AddToOrderButton';
//
// const ListingItemWrapper = styled(TouchableOpacity)`
// display: flex;
// flex-direction: row;
// padding: 2%;
// background-color: white;
// border-bottom-width: 1;
// border-bottom-color: grey;
// border-radius: 5px;
// margin-bottom: 5%;
// `;
// export const Title = styled(Text)`
// flex-wrap: wrap;
// width: 99%;
// font-size: 20px;
// `
// export const Price = styled(Text)`
// font-weight: bold;
// font-size: 20px;
// color: blue;
// `
// const Thumbnail = styled(Image)`
// border-radius: 5px;
// margin-right: 4%;
// height: 100px;
// width: 100px;
// `
//
// function MenuListingItem({ item, navigation, location }) {
//     if (location === item.location) {
//         return (
//             <ListingItemWrapper>
//                 <Thumbnail
//                     source={item.img.src}
//                     width={200}
//                 />
//                 <View>
//                     <Title>{item.name}</Title>
//                     <Price>${item.price}</Price>
//                     <AddToOrderButton productId={item.id} />
//                 </View>
//             </ListingItemWrapper>
//         )
//     } else {
//         return (null)
//     }
// };
//
// const styles = StyleSheet.create({
//   text: {
//     flex: 1,
//     flexWrap: 'wrap',
//   },
// });
//
// export default MenuListingItem;
