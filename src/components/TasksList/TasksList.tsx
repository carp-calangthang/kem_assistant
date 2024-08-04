
import { AntDesign } from '@expo/vector-icons';
import { FlashList } from "@shopify/flash-list";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Black24 } from "../../constant/colors";
import TaskItem from "./components/TaskItem";

const TasksList = ({ data }: any) => {

    const [expanded, setExpanded] = useState(true);
    const height = useSharedValue(320);

    const toggleExpand = () => {
        height.value = withTiming(expanded ? 0 : 320, {
            duration: 320,
            easing: Easing.inOut(Easing.ease),
        });
        setExpanded(!expanded);
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: height.value,
        };
    });

    return (
        <View style={styles.task_base}>
            <View style={styles.task_header}>
                <TouchableOpacity style={styles.task_header_btn} onPress={toggleExpand}>
                    <Text style={styles.task_header_txt}>Tasks đang tiến hành</Text>
                    {expanded ? (
                        <AntDesign name="down" size={18} color="#fff" />
                    ) : (
                        <AntDesign name="up" size={18} color="#fff" />
                    )}
                </TouchableOpacity>
            </View>
            <Animated.View style={[styles.task_body, animatedStyle]}>
                <FlashList
                    data={data}
                    renderItem={({ item }) => 
                        <TaskItem item={item} />
                    }
                    estimatedItemSize={200}
                />
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    task_base: {
        paddingHorizontal: 10,
        flex: 1,
    },
    task_header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    task_header_txt: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "500",
        marginRight: 10,
    },
    task_header_btn: {
        flexDirection: "row",
        alignItems: "center",
    },
    task_body: {
        flex: 1,
        width: (Dimensions.get('window').width) - 40,
    },
})

export default TasksList;