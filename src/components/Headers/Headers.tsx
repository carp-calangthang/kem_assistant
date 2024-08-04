
import { Feather, AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { goBack, navigate } from "../../navigations/NavigationServices";

type HeaderProps = {
    isBack: boolean;
    haveTitle: boolean;
    title?: string;
}

const Headers = ({ isBack, haveTitle, title }: HeaderProps) => {

    return (
        <View style={styles.header}>
            <View>
                {isBack ? (
                    <TouchableOpacity style={styles.menu_btn} onPress={() => goBack()}>
                        <AntDesign name="left" size={30} color="#fff" />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.menu_btn}>
                        <Feather name="align-left" size={30} color="#fff" />
                    </TouchableOpacity>
                )}
                
            </View>
            {haveTitle && (
                <Text style={styles.title}> {title} </Text>
            )}
            <View>
                <TouchableOpacity style={styles.avt_btn}>
                    <Image
                        style={styles.menu_avt}
                        source={{ 
                            uri: "https://media.npr.org/assets/img/2023/12/12/gettyimages-1054147940-627235e01fb63b4644bec84204c259f0a343e35b.jpg?s=1100&c=50&f=jpeg"
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },

    menu_btn: {
        
    },

    title: {
        fontSize: 18,
        fontWeight: "500",
    },

    avt_btn: {
        
    },
    menu_avt: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
})

export default Headers;