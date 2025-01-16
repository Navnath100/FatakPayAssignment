import colors from '@/src/assets/colors';
import FONTS from '@/src/utils/enums/fontsFamilies';
import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import Svg, { Line, Circle, G, Text as SvgText } from 'react-native-svg';

// Get screen width for responsive sizing
const { width } = Dimensions.get('window');

type TLineChart = {
  data: (number | null)[]
  labels: string[]
}

const LineChart = ({ data, labels }: TLineChart) => {

  const [clickedIndex, setClickedIndex] = useState(-1)

  // Sample data for the chart
  const yAxis = [800, 750, 700, 650]; // y-axis values

  // Define chart dimensions
  const chartWidth = width - 48 - 30; // Subtracting padding
  const chartHeight = 150; // Height of the chart

  // Calculate maximum and minimum values in the dataset
  const maxValue = Math.max(...yAxis);
  const minValue = Math.min(...yAxis);

  // Normalize the data to fit the chart
  const normalizedData = data.map(value => {
    if (typeof value !== 'number') {
      return null;
    }
    return (
      chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight
    );
  });

  const paddingH = 20;

  // X-axis position calculations
  const xSpacing = (chartWidth - 60) / (data.length - 1);

  const onPressDot=(index:number)=>{
    setClickedIndex(index)
  }

  useEffect(() => {
    setTimeout(() => {
      setClickedIndex(-1)
    }, 5000);
  }, [clickedIndex])
  

  return (
    <View
      style={[styles.container, { width: chartWidth + paddingH }]}>
      <View style={styles.row}>
        <View style={styles.yAxisLabels}>
          {yAxis.map((d, index) => (
            <View
              key={index}
              style={styles.yAxisLabelContainer}>
              <Text style={styles.yAxisLabel}>{d}</Text>
            </View>
          ))}
        </View>
        <Svg
          width={chartWidth}
          height={chartHeight}>
          {/* Add vertical lines above the X-axis */}
          <G>
            {labels.map((_, index) => {
              const xValue = index * xSpacing;
              return (
                <Line
                  key={index}
                  x1={xValue + paddingH}
                  y1={0}
                  x2={xValue + paddingH}
                  y2={250}
                  stroke={colors.primaryLight}
                  strokeWidth={'1'}
                />
              );
            })}
          </G>

          {/* Draw the line as per the chart */}
          <G>
            {normalizedData.map((yValue, index) => {
              const nextIndex = index + 1;
              if (
                typeof yValue !== 'number' ||
                typeof normalizedData[nextIndex] !== 'number' ||
                index === normalizedData.length - 1
              ) {
                return null;
              }
              const xValue = index * xSpacing + paddingH;
              const nextX = nextIndex * xSpacing + paddingH;
              const nextY = normalizedData[nextIndex];
              return (
                <Line
                  key={index}
                  x1={xValue}
                  y1={yValue}
                  x2={nextX}
                  y2={nextY}
                  stroke={colors.primary}
                  strokeWidth="2"
                />
              );
            })}
          </G>

          {/* Draw dots as per data points */}
          <G>
            {normalizedData.map((yValue, index) => {
              if (typeof yValue !== 'number') {
                return null;
              }
              const xValue = index * xSpacing + paddingH;
              return (
                <View
                
                key={index}>
                  <Circle
                    key={index}
                    cx={xValue}
                    cy={yValue}
                    r="8"
                    fill={'#fff'}
                                   onPress={()=>onPressDot(index)}
                  />
                  <Circle
                    key={index + 10}
                    cx={xValue}
                    cy={yValue}
                    r="5"
                    fill={colors.primary}
                    onPress={()=>onPressDot(index)}
                  />
                </View>
              );
            })}
          </G>

          {/* pop up */}
          <G>
            {normalizedData.map((yValue, index) => {
              if (index===clickedIndex&&yValue) {
                const xValue = index * xSpacing + paddingH;
                return (
                  <View key={index} style={[styles.popupContainer,{top:yValue-35,left:xValue-15}]}>
                    <View style={styles.arrow}/>
                     <Text style={styles.popupValue}>
                      {data[index]}
                    </Text>
                  </View>
                );
              }
            })}
          </G>
        </Svg>
      </View>
      <Svg
        style={{ marginTop: 5.1, marginLeft: paddingH + 10 }}
        width={chartWidth}
        height={14}>
        <G>
          {labels.map((l, index) => (
            <SvgText
              key={index}
              x={paddingH + index * xSpacing}
              y={13}
              fontSize="10"
              fill="black"
              textAnchor="middle"
              fontFamily={FONTS.PLUS_JAKARTA_SANS}
            >
              {l}
            </SvgText>
          ))}
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: colors.primaryExtraLight,
    padding: 9, borderRadius: 6.84
  },
  yAxisLabelContainer: {
    width: 30,
    justifyContent: 'flex-end',
  },
  yAxisLabel: {
    fontSize: 6,
    fontFamily: FONTS.PLUS_JAKARTA_SANS_BOLD,
    fontWeight: 700,
    color: colors.lineChartLabel
  },
  row: {
    flexDirection: 'row'
  },
  yAxisLabels: {
    justifyContent: 'space-between'
  },
  popupContainer: {
    height: 25,
    width: 30,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    backgroundColor: colors.primary,
    height: 7,
    width: 7,
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
    bottom: -3,
  },
  popupValue: {
    fontFamily:FONTS.PLUS_JAKARTA_SANS_BOLD,
    color: colors.solidWhite,
    fontSize: 8,
    fontWeight: '700',
  }  
})

export default LineChart;