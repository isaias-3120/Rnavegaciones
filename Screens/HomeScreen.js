import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.black}>Bienvenido Gamer</Text>
            <Image 
                style={styles.Logo}
                source={{
                uri:'https://www.betaarchive.com/wiki/images/9/94/Pc-logo-png.png',
            }}/>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Logo: {
        width: 350,
        height: 400,
    },
    black:{
        fontWeight:'bold',
        fontSize:22,
    },
});
  