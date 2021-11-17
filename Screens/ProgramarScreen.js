import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ProgramarScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button 
                title="Javascript" 
                onPress={()=>navigation.navigate('JavascriptScreen')}
                color ="#ef4e9c"
            />
            <Button 
                title="React" 
                onPress={()=>navigation.navigate('ReactScreen')}
                color ="#ef4e9c"
            />
        </View>
    )
}

export default ProgramarScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    Logo: {
        width: 300,
        height: 400,
    },
    boton:{
        backgroundColor: 'red',
    }
});