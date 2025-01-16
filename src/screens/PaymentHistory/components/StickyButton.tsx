import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '@/src/assets/colors'
import FONTS from '@/src/utils/enums/fontsFamilies'
import { router } from 'expo-router'

const StickyButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={router.back}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       width:'100%',
        position:'absolute',
        paddingHorizontal:17.49,
        paddingTop:12.25,
        paddingBottom:27.99,
        backgroundColor:colors.solidWhite,
        bottom:0,
        borderTopRightRadius:20.12,
        borderTopLeftRadius:20.12,

    },
    button:{
        width:'100%',
        height:41.98,
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20.12
    },
    buttonText:{
        fontFamily:FONTS.PLUS_JAKARTA_SANS,
        fontSize:13.99,
        color:colors.solidWhite,
        fontWeight:'700'
    }
})

export default StickyButton