import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { height, width } from '../../src/utills/Dimention';
import colors from '../../src/utills/RecommendedColors';

// Sample data for SOL and RAY
const solData = [50, 45, 60, 70, 80, 75];
const rayData = [40, 55, 70, 65, 60, 75];

const coinData = [
    {
        coinName: "SOL",
        price: "$50",
        avatarUri: "https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png",
        chartData: solData,
        percentage: "+24%",
        colors: colors.purpleMagenta[100]
    },
    {
        coinName: "RAY",
        price: "$40",
        avatarUri: "https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png",
        chartData: rayData,
        percentage: "+30%",
        colors: colors.greenishCyan[100]
    }
];

export default function ChartView() {
    return (
        <View style={styles.container}>
            {coinData.map((coin, index) => (
                <View style={{
                    backgroundColor: '#192f6a',
                    borderRadius: 16,

                }} key={index}>
                    <View style={styles.txtContainer}>
                        <View style={styles.coinAvatar}>
                            <Image
                                style={styles.avatarImage}
                                source={{ uri: coin.avatarUri }}
                            />
                            <Text style={styles.label}>{coin.coinName}</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.label}>Price</Text>
                            <Text style={styles.label}>{coin.price}</Text>
                        </View>
                        <View style={styles.percentageContainer}>
                            <Text style={styles.label}>24H+ %</Text>
                            <Text style={[styles.label, { color: coin.colors, fontWeight: 'bold' }]}>{coin.percentage}</Text>
                        </View>

                    </View>
                    <LineChart
                        data={{
                            datasets: [
                                {
                                    data: coin.chartData,
                                    color: (opacity = 1) => coin.colors // Accessing color from coinData
                                },
                            ]
                        }}
                        width={width(92)}
                        height={150}
                        chartConfig={{
                            backgroundColor: "rgba(59, 208, 216, .2)",
                            backgroundGradientFrom: '#192f6a',
                            backgroundGradientTo: '#192f6a',
                            decimalPlaces: 2,
                            color: (opacity = 1) => coin.colors,

                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: '#192f6a',
                            }
                        }}
                        yAxisLabel=""
                        withDots={false}
                        bezier
                        style={styles.chart}
                        withHorizontalLines={false}
                        withVerticalLines={false}
                    />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: "center",
        backgroundColor: '#192f6a',
        borderRadius: 16,
        height: height(58),
        width: width(92),
    },
    chart: {
        marginVertical: 8,
        borderRadius: 16
    },
    label: {
        paddingTop: 5,
        color: '#FFFFFF',
        fontSize: 12,
    },
    txtContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: width(23),
        paddingTop: height(2)
    },
    coinAvatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    avatarImage: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    priceContainer: {
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    percentageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});
