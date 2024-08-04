
import React from "react";
import Separator from "../../Separator";
import { View, Text, StyleSheet } from "react-native";
import ProgressBar from "../../ProgressBar/ProgressBar";
import { Feather, Entypo, AntDesign } from '@expo/vector-icons';
import CircularProgressBar from "../../ProgressBar/CircularProgressBar";
import { Cyan, LightBlue } from "../../../constant/colors";

type TaskItemProps = {
    item: any;
}

const TaskItem = ({item}: TaskItemProps) => {
    return (
        <View style={[styles.task_body_items, { backgroundColor: item?.bgColor }]}>
            <View style={styles.task_circle_progress}>
                <CircularProgressBar progress={item?.progress} color={item?.color} />
            </View>
            <View style={styles.task_body_info}>
                <Text  style={styles.task_body_info_txt_bold}>{item?.name}</Text>
                <Text  style={styles.task_body_info_txt}>{item?.description}</Text>
                <View style={styles.task_body_info_progress}>
                    <ProgressBar progress={item?.progress} color={item?.color} />
                    <Text style={styles.task_body_info_progress_txt}>{item?.progress}%</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    task_body_items: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
    },
    task_circle_progress: {
        marginRight: 20,
    },
    task_body_info: {
    },
    task_body_info_txt: {
        color: "#7F7F7F",
        marginBottom: 5,
    },
    task_body_info_txt_bold: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 5,
    },
    task_body_info_progress: {
        flexDirection: "row",
        alignItems: "center",
        width: "60%",
    },
    task_body_info_progress_txt: {
        marginLeft: 10,
    },
})

export default TaskItem;