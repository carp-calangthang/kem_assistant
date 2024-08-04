
import { FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Gray, GrayBlack } from '../../constant/colors';
import { useCityByZip } from '../../hooks/api/weathers/getLocationByZipCode';
import { useWeatherByCode } from '../../hooks/api/weathers/getWeatherByCityCode';
import Separator from '../Separator';

const WeatherHighLight = () => {

    const [cityName, setCityName] = useState('HCM');

    const { data: cityData, error: cityError, isFetching: cityFetching } = useCityByZip(cityName);

    const getLat = cityData?.length ? cityData.map((item: { lat: any; }) => item.lat) : null;
    const getLon = cityData?.length ? cityData.map((item: { lon: any; }) => item.lon) : null;

    const { 
        data: weatherData,
        error: weatherError,
        isFetching: weatherFetching 
    } = useWeatherByCode({
        lat: `${getLat}`, 
        lon: `${getLon}`, 
        lang: "vi"
    });

    const weather = weatherData?.weather;
    const weatherDescription = weather ? weather.map((item: any) => item.description) : [];
    const weatherIcon = weather ? weather.map((item: any) => item.icon) : [];
    const weatherMain = weather ? weather.map((item: any) => item.main) : [];
    const main = weatherData?.main;
    const tempData = weatherData?.main;
    const windData = weatherData?.wind;

    console.log(weatherData)

    useEffect(() => {
    }, [cityData, weatherData])

    return (
        <View>
            <View style={styles.weather}>
                <View style={styles.weather_header}>
                    <View style={styles.weather_data}>
                        <View style={styles.weather_location}>
                            <View style={styles.weather_location_form}>
                                <Ionicons name="location-outline" size={24} color="#fff" />
                                <Text style={styles.weather_location_txt}>{weatherData?.name}</Text>
                            </View>
                        </View>
                        <View style={styles.weather_info}>
                            <View style={styles.temp_txt}>
                                <Text style={styles.weather_info_temp}>{tempData?.temp ? `${tempData.temp}` : 'N/A'}</Text>
                                <Text style={{fontSize: 18, color: "#fff", fontWeight: "500"}}>°C</Text>
                            </View>
                            <Text style={styles.weather_info_des}>{weatherDescription.length > 0 ? weatherDescription[0] : 'N/A'}</Text>
                        </View>                                
                    </View>
                    <View>
                        {weatherMain.length > 0 && weatherIcon.length > 0 && weatherMain[0] === "Clear" && weatherIcon[0] === "01d" || weatherIcon[0] === "01n" && (
                            <Image
                                style={styles.weather_icon}
                                source={ require("../../assets/Icons/weather/sun.png")}
                            />
                        )}
                        {weatherMain.length > 0 && weatherIcon.length > 0 && weatherMain[0] === "Clouds" && weatherIcon[0] === "02d" || weatherIcon[0] === "02n" && (
                            <Image
                                style={styles.weather_icon}
                                source={ require("../../assets/Icons/weather/sunny.png")}
                            />
                        )}
                        {weatherMain.length > 0 && weatherIcon.length > 0 && weatherMain[0] === "Clouds" && weatherIcon[0] === "03d" || weatherIcon[0] === "03n" && (
                            <Image
                                style={styles.weather_icon}
                                source={ require("../../assets/Icons/weather//cloud.png")}
                            />
                        )}
                        {weatherMain.length > 0 && weatherIcon.length > 0 && weatherMain[0] === "Clouds" && weatherIcon[0] === "04d" || weatherIcon[0] === "04n" && (
                            <Image
                                style={styles.weather_icon}
                                source={ require("../../assets/Icons/weather/many.png")}
                            />
                        )}
                        {weatherMain.length > 0 && weatherIcon.length > 0 && weatherMain[0] === "Rain" && weatherIcon[0] === "10d" || weatherIcon[0] === "10n" && (
                            <Image
                                style={styles.weather_icon}
                                source={ require("../../assets/Icons/weather/rain.png")}
                            />
                        )}
                        {weatherMain.length > 0 && weatherIcon.length > 0 && weatherMain[0] === "Clouds" && weatherIcon[0] === "11d" || weatherIcon[0] === "11n" && (
                            <Image
                                style={styles.weather_icon}
                                source={ require("../../assets/Icons/weather/storm.png")}
                            />
                        )}
                    </View>
                </View>
                <View style={styles.more_info}>
                    <View style={styles.more_info_item}>
                        <FontAwesome5 name="wind" size={18} color="#fff" />
                        <Separator height={5} />
                        <Text style={styles.item_data_txt}>{windData?.speed} km/h</Text>
                        <Text style={styles.item_name_txt}>Gió</Text>
                    </View>
                    <View style={styles.more_info_item}>
                        <Ionicons name="water" size={18} color="#fff" />
                        <Separator height={5} />
                        <Text style={styles.item_data_txt}>{main?.humidity}%</Text>
                        <Text style={styles.item_name_txt}>Độ ẩm</Text>
                    </View>
                    <View style={styles.more_info_item}>
                        <FontAwesome6 name="temperature-empty" size={18} color="#fff" />
                        <Separator height={5} />
                        <Text style={styles.item_data_txt}>{main?.feels_like}°C</Text>
                        <Text style={styles.item_name_txt}>Cảm giác</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // #region top
    weather: {
        paddingHorizontal: 20,
        borderRadius: 20,
        paddingVertical: 10,
        backgroundColor: GrayBlack,
        marginHorizontal: 10,
    },
    weather_header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: Gray,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    weather_data: {},
    weather_location: {
        marginBottom: 10,
        marginRight: 15,
    },
    weather_location_form: {
        flexDirection: "row",
        alignItems: "center",
    },
    weather_location_txt: {
        fontSize: 14,
        marginLeft: 5,
        color: "#fff"
    },
    weather_info: {
        alignItems: "baseline",
    },
    temp_txt: {
        flexDirection: "row",
        alignItems: "stretch",
        marginRight: 10,
    },
    weather_info_temp: {
        fontSize: 30,
        fontWeight: "500",
        color: "#fff",
    },
    weather_info_des: {
        color: Gray
    },
    weather_icon: { 
        width: 80, 
        height: 80,
        marginRight: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    // #endregion
    
    // #region bottom
    more_info: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    more_info_item: {
        justifyContent: "center",
        alignItems: "center",
    },
    item_data_txt: {
        color: Gray
    },
    item_name_txt: {
        color: Gray
    },
    // #endregion
})

export default WeatherHighLight;