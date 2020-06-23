import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={style.backgroundStyle}>
            <Feather name="search" style={style.iconStyle} />
            <TextInput
                style={style.inputStyles}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search food or restaurants..."
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
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


