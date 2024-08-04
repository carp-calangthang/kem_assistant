
import { Entypo } from '@expo/vector-icons';
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PieChartComponent from "../../components/Charts/PieChartComponent";
import Headers from "../../components/Headers/Headers";
import Separator from "../../components/Separator";
import TasksList from "../../components/TasksList/TasksList";
import { Black24, Cyan, Gray, LightBlue, LightGreen, LightOrange, PinkOrange, Purple7A, Purple97, PurpleC8, YellowGreen, MidnightColor } from '../../constant/colors';
import WeatherHighLight from '../../components/weathers/WeatherHighLight';


const HomeScreen = () => {

    const data = [
        {
            name: "Ăn trưa",
            amount: 35000,
            color: 'rgba(131, 167, 234, 1)',
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Ăn sáng",
            amount: 30000,
            color: 'rgba(255, 99, 132, 1)',
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Trà chiều",
            amount: 28000,
            color: 'rgba(54, 162, 235, 1)',
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Đổ xăng",
            amount: 70000,
            color: 'rgba(255, 206, 86, 1)',
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Ăn tối",
            amount: 30000,
            color: 'rgba(75, 192, 192, 1)',
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
    ]

    const task_data = [
        {
            name: "Hoàn thành báo cáo",
            description: "123123",
            color: Cyan,
            bgColor: LightBlue,
            progress: 60,
        },
        {
            name: "Hoàn thành ứng dụng",
            description: "123123",
            color: YellowGreen,
            bgColor: LightGreen,
            progress: 80,
        },
        {
            name: "Tắt ngủ nghỉ",
            description: "123123",
            color: PinkOrange,
            bgColor: LightOrange,
            progress: 100,
        },
    ]

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Headers isBack={false} haveTitle={false} />
                <Separator height={20} />
                <ScrollView style={styles.body} >
                    <Separator height={5} />
                    <WeatherHighLight />
                    {/* <View style={{ alignItems: "center"}}>
                        <View style={styles.task_noti}>
                            <View style={styles.task_noiti_body}>
                                <View style={styles.task_noiti_header}>
                                    <Image 
                                        source={require("../../assets/Icons/app_icons/tasks.png")}
                                        style={styles.task_noiti_icon}
                                    />
                                    <View style={styles.task_noiti_header_text}>
                                        <Text style={styles.task_noiti_header_txt}>You've Got</Text>
                                        <Text style={styles.task_noiti_header_bold_txt}>14 Tasks today</Text>
                                    </View>
                                </View>
                                <Separator height={20} />
                                <TouchableOpacity style={styles.task_noiti_btn}>
                                    <Text style={styles.task_noiti_txt}>Today's tasks</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.task_noiti_header_title}>ALL TASKS</Text>
                        </View>
                    </View> */}
                    <Separator height={20} />
                    <View style={styles.task_base}>
                        <TasksList data={task_data} />
                    </View>
                    <Separator height={20} />
                    <View style={styles.chart_base}>
                        <View style={styles.chart_header}>
                            <Text style={styles.chart_header_txt}>Chi tiêu hôm nay:</Text>
                            <TouchableOpacity style={styles.chart_header_opt}>
                                <Entypo name="dots-three-horizontal" size={22} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <PieChartComponent data={data} />
                        </View>
                    </View>
                    <Separator height={50} />
                </ScrollView>
                <View>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    // #region base
    safeArea: {
        flex: 1,
        backgroundColor: MidnightColor,
    },
    container: {
        paddingHorizontal: 10,
        paddingTop: 10,
        flex: 1,
    },
    body: {},
    // #endregion

    // #region tasks notification
    task_noti: {
        width: "80%",
        alignItems: "center",
        backgroundColor: PurpleC8,
        flexDirection: "row",
        borderRadius: 20,
    },
    task_noiti_header_title: {
        color: Purple7A,
        fontWeight: "700",
        transform: [{ rotate: '-90deg' }, { translateY: -20 }],
    },
    task_noiti_body: {
        backgroundColor: Purple7A,
        width: "90%",
        paddingVertical: 20,
        borderRadius: 20,
    },
    task_noiti_header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    task_noiti_icon: {
        width: 50,
        height: 50,
    },
    task_noiti_header_text: {
        marginLeft: 15,
    },
    task_noiti_header_txt: {
        color: "#fff",
        fontSize: 18,
    },
    task_noiti_header_bold_txt: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "500",
    },
    task_noiti_btn: {
        marginLeft: "15%",
        backgroundColor: "#fff",
        width: "40%",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    task_noiti_txt: {
        color: Purple97,
    },
    // #endregion

    // #region task
    task_base: {},
    task_header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    task_header_txt: {
        color: Black24,
        fontSize: 18,
        fontWeight: "500",
        marginRight: 10,
    },
    task_header_btn: {
        flexDirection: "row",
        alignItems: "center",
    },
    task_body: {
        justifyContent: "center",
        alignItems: "center",
    },
    // #endregion

    // #region Charts
    chart_base: {
        paddingHorizontal: 10,
    },
    chart_header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    chart_header_txt: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "500",
    },
    chart_header_opt: {},
    // #endregion

})

export default HomeScreen;
