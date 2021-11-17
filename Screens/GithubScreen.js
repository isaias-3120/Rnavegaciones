import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const GithubScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Ionicons name={"logo-github"} size={100} color='red'/>
            <Text style={styles.black}>@isaias-3120</Text>
        </View>
    )
}

export default GithubScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
        width: 300,
        height: 400,
    },
    black:{
        fontWeight:'bold',
    },
});