import React from 'react'
import { StyleSheet, View } from 'react-native'

const Separator = ({ height, style }: { height: number; style?: any }) => {
    return <View style={[styles.container, { height: height, ...style }]} />
}

const styles = StyleSheet.create({
    container: {
        height: 1,
        width: '100%'
    },
})

export default Separator
