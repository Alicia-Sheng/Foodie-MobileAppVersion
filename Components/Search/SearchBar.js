import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit, navigation, nextRoute }) => {

    const onEndEditing = term => {
        if (term) {
            navigation.navigate(nextRoute, {term});
        }
    }

    return (
        <View style={style.backgroundStyle}>
            <Feather name="search" style={style.iconStyle} />
            <TextInput
                style={style.inputStyles}
                autoCapitalize="none"
                autoCorrect={false}
                autoCorrect={false}
                clearButtonMode='always'
                placeholder="Search food..."
                value={term}
                onChangeText={onTermChange}
                // onEndEditing={onTermSubmit}
                onEndEditing={() => onEndEditing(term)}
            />
        </View>
    );
};

const style = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fafafa',
        height: 50,
        borderRadius: 20,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyles: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});


export default SearchBar;


