import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { colors } from '../style';
import { useNavigation } from '@react-navigation/native';
import SignIn from '.'

const Login = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    email: '',
    password: '',
    chech_textInputChange: false,
    secureTextEntry: true,
  });
  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        chech_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        chech_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>YouTube</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            onChangeText={(val) => textInputChange(val)}
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
          />
          {data.chech_textInputChange ? (
            <Feather name="check-circle" color="green" size={20} />
          ) : null}
        </View>
        <Text style={styles.password}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            secureTextEntry={data.secureTextEntry ? true : false}
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <View style={styles.signIn}>
            <Text style={[styles.textSign, { color: colors.white }]}> Sign in</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}
          >
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.youtube,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: colors.blue,
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.milk,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: 5,
    paddingLeft: 10,
    color: colors.blue,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.youtube
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  password: {
    color: colors.blue,
    fontSize: 18,
    marginTop: 35,
  },
});

export default Login;
