/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { colors } from '../style';
import { useNavigation } from '@react-navigation/native';

import { ApiService } from '../services';
import { useAuth } from '../context';

const Login = () => {
  const navigation = useNavigation();
  const [, setIsLoggedIn] = useAuth();

  const [data, setData] = useState({
    email: '',
    password: '',
    chech_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        chech_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        chech_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const onSignUpPress = () => navigation.navigate('SignUp');

  const onSignInPress = async () => {
    try {
      await ApiService.post('auth/login', {
        username: data.email,
        password: data.password,
      });

      setIsLoggedIn(true);
    } catch (err) {
      console.log('-------err-------');
      console.log(err);
      console.log('-------err-------\n');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.youtube} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>YouTube</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.blue} size={20} />
          <TextInput
            onChangeText={(val) => textInputChange(val)}
            placeholder="Your Username"
            style={styles.textInput}
            autoCapitalize="none"
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.chech_textInputChange ? (
            <Feather name="check-circle" color={colors.green} size={20} />
          ) : null}
        </View>

        {data.isValidUser ? null : (
          <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
        )}

        <Text style={styles.password}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color={colors.blue} size={20} />
          <TextInput
            secureTextEntry={data.secureTextEntry ? true : false}
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color={colors.gray} size={20} />
            ) : (
              <Feather name="eye" color={colors.gray} size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
        )}

        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={onSignInPress}>
            <Text style={[styles.textSign, { color: colors.white }]}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onSignUpPress}
            style={[
              styles.signIn,
              {
                marginTop: 15,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: colors.youtube,
                },
              ]}>
              Sign up
            </Text>
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
    flex: 5,
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
    marginTop: 40,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.youtube,
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
  errorMsg: {
    color: colors.red,
    fontSize: 12,
  },
});

export default Login;
