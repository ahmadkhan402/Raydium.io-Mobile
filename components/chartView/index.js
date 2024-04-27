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
                                    color: (opacity = 1) => coin.colors 
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
                                borderRadius: wp('5%') 
                            },
                            propsForDots: {
                                r: wp('3%'), 
                                strokeWidth: wp('1%'), 
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
        marginTop: hp('2%'),
        justifyContent: 'center',
        alignSelf: "center",
        backgroundColor: '#192f6a',
        borderRadius: wp('5%'), 
        height: hp('58%'), 
        width: wp('92%'), 
    },
    chartContainer: {
        backgroundColor: '#192f6a',
        borderRadius: wp('5%'), 
        marginBottom: hp('2%'),
    },
    infoContainer: {
        flexDirection: "row",
        paddingHorizontal: wp('6%'), 
        paddingVertical: hp('2%'), 
        justifyContent: "space-between",
        alignItems: "center",
    },
    label: {
        paddingTop: hp('1%'), 
        color: '#FFFFFF',
        fontSize: wp('3%'),
    },
    coinAvatar: {
        width: wp('15%'), 
        height: wp('15%'), 
        borderRadius: wp('7.5%'), 
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: wp('5%'), 
    },
    avatarImage: {
        width: wp('10%'), 
        height: wp('10%'), 
        borderRadius: wp('5%'), 
    },
    priceContainer: {
        marginRight: wp('5%'), 
        alignItems: 'center',
        justifyContent: 'center',
    },
    percentageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
