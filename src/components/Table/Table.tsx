import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import colors from '@/src/assets/colors';
import FONTS from '@/src/utils/enums/fontsFamilies';
import PaymentStatus from './components/PaymentStatus';
import { PaymentHistory, PaymentSummary } from '@/src/screens/PaymentHistory/types';
import { indicators, months } from '@/src/screens/PaymentHistory/PaymentHistory.mock';

const Table = ({ data }:{data:PaymentHistory}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.summary}>Summary</Text>
        <View style={styles.linearGradient}>
          <Text style={styles.lastUpdated}>Last Update : {data?.last_updated_on}</Text>
        </View>
      </View>

      <View style={styles.monthsContainer}>
        <View style={styles.monthsRow}>
          {months.map((m, index) => (
            <Text key={index} style={styles.monthText}>{m}</Text>
          ))}
        </View>

        <View style={styles.paymentSummaryContainer}>
          {data?.payment_summary?.map((item:PaymentSummary, index:number) => (
            <View key={index} style={styles.paymentRow}>
              <Text style={styles.year}>{item.year}</Text>
              <View style={styles.iconsContainer}>
                {item?.summary?.map((status, subIndex:number) => (
                  <PaymentStatus key={subIndex} status={status}/>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={{borderTopColor:colors['D9D9D9'],borderTopWidth:0.87,borderStyle:'dashed',padding:17.49,flexDirection:'row'}}>
        {
            indicators.map((item,index:number)=>(
                <View key={index} style={{flexDirection:'row',marginRight:17.49,alignItems:'center'}}>
                  <PaymentStatus marginRight={6.05} status={item.shortKey}/>
                  <Text style={{fontSize:7}}>{item.name}</Text>
                </View>
            ))
        }
      </View>

    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 13.99,
    backgroundColor: colors.solidWhite,
    borderRadius: 8.75,
    elevation:5,
    shadowColor: colors.E4E4E499,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
  },
  titleContainer: {
    marginTop: 13.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summary: {
    fontSize: 8.75,
    lineHeight: 14,
    fontWeight: '700',
    fontFamily: FONTS.PLUS_JAKARTA_SANS_BOLD,
  },
  lastUpdated: {
    fontSize: 7,
    lineHeight: 10.5,
    fontWeight: '700',
    fontFamily: FONTS.PLUS_JAKARTA_SANS_BOLD,
  },
  linearGradient: {
    height: 14,
  },
  monthsContainer: {
    marginTop: 20.99
  },
  monthsRow: {
    flexDirection: 'row',
    marginBottom: 18.99,
    justifyContent: 'space-between',
    marginLeft: 45,
  },
  monthText: {
    fontSize: 7,
    color: colors.gray,
  },
  paymentSummaryContainer: {},
  paymentRow: {
    flexDirection: 'row',
    marginBottom: 12.62,
    alignItems:'center'
  },
  year: {
    width: 45,
    color: colors['2C2C2C'],
    fontSize: 8.75,
    fontWeight: '800',
    fontFamily:FONTS.PLUS_JAKARTA_SANS_BOLD
  },
  iconsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  icon: {
    height: 9.62,
    width: undefined,
    aspectRatio: 1,
  },
});
