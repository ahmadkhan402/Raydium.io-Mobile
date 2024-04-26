import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
                <View style={styles.chartContainer} key={index}>
                    <View style={styles.infoContainer}>
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
                        width={wp('92%')}
                        height={hp('20%')}
                        chartConfig={{
                            backgroundColor: "rgba(59, 208, 216, .2)",
                            backgroundGradientFrom: '#192f6a',
                            backgroundGradientTo: '#192f6a',
                            decimalPlaces: 2,
                            color: (opacity = 1) => coin.colors,
                            style: {
                                borderRadius: wp('5%') // Use responsive border radius
                            },
                            propsForDots: {
                                r: wp('3%'), // Use responsive dot size
                                strokeWidth: wp('1%'), // Use responsive stroke width
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
        marginTop: hp('2%'), // Use responsive margin
        justifyContent: 'center',
        alignSelf: "center",
        backgroundColor: '#192f6a',
        borderRadius: wp('5%'), // Use responsive border radius
        height: hp('58%'), // Use responsive height
        width: wp('92%'), // Use responsive width
    },
    chartContainer: {
        backgroundColor: '#192f6a',
        borderRadius: wp('5%'), // Use responsive border radius
        marginBottom: hp('2%'), // Use responsive margin
    },
    infoContainer: {
        flexDirection: "row",
        paddingHorizontal: wp('6%'), // Use responsive padding
        paddingVertical: hp('2%'), // Use responsive padding
        justifyContent: "space-between",
        alignItems: "center",
    },
    label: {
        paddingTop: hp('1%'), // Use responsive padding
        color: '#FFFFFF',
        fontSize: wp('3%'), // Use responsive font size
    },
    coinAvatar: {
        width: wp('15%'), // Use responsive width
        height: wp('15%'), // Use responsive height
        borderRadius: wp('7.5%'), // Use responsive border radius
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: wp('5%'), // Use responsive margin
    },
    avatarImage: {
        width: wp('10%'), // Use responsive width
        height: wp('10%'), // Use responsive height
        borderRadius: wp('5%'), // Use responsive border radius
    },
    priceContainer: {
        marginRight: wp('5%'), // Use responsive margin
        alignItems: 'center',
        justifyContent: 'center',
    },
    percentageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
