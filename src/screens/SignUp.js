import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../style';

const SignUp = () => {
    return (
      <View >
        <Text style={styles.text}>Sign Up</Text>
      </View>
    );
}
const styles = StyleSheet.create({
    text: {
        color: colors.white,
        textAlign: 'center',
        justifyContent: 'center'
    }
})
export default SignUp
