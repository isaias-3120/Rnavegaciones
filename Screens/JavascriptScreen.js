import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const JavascriptScreen = () => {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.Logo}
            source={{
            uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
            }}
            />
        </View>
    )
}

export default JavascriptScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Logo:{
        width: 350,
        height:300,
    }
});
  