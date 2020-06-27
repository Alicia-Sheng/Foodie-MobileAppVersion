import React from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import * as Font from 'expo-font'

export default class TextCustom extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Modesta-Script': require('../../assets/fonts/Modesta-Script.ttf')
        })
        this.setState({ loading: false })
    }

    render() {
        if (this.state.loading) {
            return <ActivityIndicator />
        }
        return (
            <View>
                <Text style={[styles.defaultStyle, this.props.style]}>
                    {this.props.children}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    defaultStyle: {
        fontFamily: 'Modesta-Script',
        fontSize: 35,
        color: '#Cf3838'
    },
})