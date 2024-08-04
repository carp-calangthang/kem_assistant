import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Cyan, LightBlue } from '../../constant/colors';

interface ProgressBarProps {
    progress: number;
    color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
    return (
        <View style={styles.container}>
        <View style={[styles.filler, { width: `${progress}%`, backgroundColor: color }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 10,
        width: '100%',
        backgroundColor: "#ddd",
        borderRadius: 10,
        overflow: 'hidden',
    },
    filler: {
        height: '100%',
        borderRadius: 5,
    },
});

export default ProgressBar;
