
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import Helper from "../../utils/Helpers";

type PieChartProps = {
  data: any[]
}

const PieChartComponent = ({data}: PieChartProps) => {

  const totalAmount = data?.reduce((acc, item) => acc + item?.amount, 0);

  const dataWithPercentage = data?.map(item => ({
    ...item,
    name: `${item?.name}`,
    percentage: ((item?.amount / totalAmount) * 100)?.toFixed(2)
  }));

  const chartConfig = {
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  }

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <PieChart 
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={"amount"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        absolute
        hasLegend={false}
      />
      <View style={styles.legend}>
        {dataWithPercentage.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: item.color }]} />
            <Text style={{ color: item.legendFontColor, fontSize: item.legendFontSize }}>
              {item.name}: {item.percentage}%
            </Text>
          </View>
        ))}
      </View>
      <View>
        <Text style={{ color: "#7F7F7F", fontSize: 15 }}>Total: {Helper.formatMoneyVND(totalAmount)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
  },
  legend: {
    position: "absolute",
    right: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  colorBox: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
});

export default PieChartComponent;