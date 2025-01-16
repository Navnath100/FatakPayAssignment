import { View, Text, Image, StyleSheet, ViewStyle, ImageStyle } from 'react-native'
import React from 'react'
import IconPack from '@/src/utils/IconPack';
import colors from '@/src/assets/colors';

type TPaymentStatus = {status:'NA'|'PAID'|'DELAYED',marginRight?:number}

const PaymentStatus = ({status,marginRight=0}:TPaymentStatus) => {

if (status==='NA') {
    return <View style={[styles.icon,styles.NA,{marginRight}]} />
}
else if(status==='PAID'){
   return <Image style={[styles.icon,{marginRight}]} source={IconPack.TICK} />
}
else if(status==='DELAYED'){
   return  <View style={[styles.icon,{marginRight}]}><View style={styles.DELAYED}/></View>
}
}

const styles = StyleSheet.create({
    icon: {
        height: 9.62,
        width: 9.61,
        borderRadius:100,
        aspectRatio: 1,
        alignItems:'center',
        justifyContent:'center'
      },
      NA:{
        backgroundColor:colors.red
      },
      DELAYED:{
        backgroundColor:colors.D9D9D9,
        height:4.37,
        width:4.37,
        aspectRatio:1,
        borderRadius:50,
      }
})

export default PaymentStatus