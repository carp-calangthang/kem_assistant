import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Circle, Svg } from 'react-native-svg';

type CircularProgressBarProps = {
    progress: number;
    color: string;
}

const CircularProgressBar = ({ progress, color }: CircularProgressBarProps) => {
    const circleRadius = 50;
    const circleCircumference = 2 * Math.PI * circleRadius;
    const strokeDashoffset = circleCircumference - (circleCircumference * progress) / 100;

    return (
        <View style={styles.container}>
            <Svg width="80" height="80" viewBox="0 0 120 120">
                <Circle
                    cx="60"
                    cy="60"
                    r={circleRadius}
                    stroke="#ddd"
                    strokeWidth="10"
                    fill="none"
                />
                <Circle
                    cx="60"
                    cy="60"
                    r={circleRadius}
                    stroke={color}
                    strokeWidth="15"
                    fill="none"
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={strokeDashoffset}
                    rotation="-90"
                    origin="60, 60"
                />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    textContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default CircularProgressBar;
