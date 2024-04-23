import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import styles from './styles';
import { height, width } from '../../src/utills/Dimention';

export default function ChartView() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignSelf:"center" , backgroundColor: '#192f6a' , borderRadius: 16 ,  height: height(58), width: width(92),}}>
        <View style={styles.txtContainer}>
        <View style={styles.coinAvatar}>
                            <Image
                                style={styles.avatarImage}
                                source={{ uri: 'https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png' }}
                            />
                            <Text style={[styles.label]}>SOL</Text>
                        </View>
         
        <Text style={[styles.label]}>Price</Text>
        <Text style={[styles.label]}>+24%</Text>
        </View>
            <LineChart
                data={{
                    datasets: [
                        {
                          labels: [ 'SOL', 'Price','+24%',],
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]

                        },
                       

                    ]
                }}
                width={width(92)}// from react-native
                height={150}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={6} // optional, defaults to 1
                chartConfig={{ 
                    backgroundColor: "rgba(59, 208, 216, .2)",
                    backgroundGradientFrom: '#192f6a',
                    backgroundGradientTo: '#192f6a',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: '#192f6a',
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />

<View style={styles.txtContainer}>
         <Text style={[styles.label]}>RAY</Text>
        <Text style={[styles.label]}>Price</Text>
        <Text style={[styles.label]}>+24%</Text>
        </View>
             <LineChart
                data={{
                    
                    datasets: [
                        {
                          labels: [ 'RAY', 'Price','+24%',],
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]

                        },
                       

                    ]
                }}
                width={width(92)} // from react-native
                height={150}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={6} // optional, defaults to 1
                chartConfig={{ 
                    backgroundColor: "rgba(59, 208, 216, .2)",
                    backgroundGradientFrom: '#192f6a',
                    backgroundGradientTo: '#192f6a',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: '#192f6a',
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    );
}
