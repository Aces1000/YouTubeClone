import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { colors } from '../style';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context';
import { ApiService } from '../services';
import Button from '../components/Button';

const Login = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [, setIsLoggedIn] = useAuth();
  const [error, setError] = useState('');
  const [data, setData] = useState({
    email: '',
    password: '',
    chech_textInputChange: false,
    secureTextEntry: true,
    isValidPassword: true,
    isValidPasswordConfirm: true,
    isValidUser: true,
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
  const onSignUpPress = async () => {
    try {
      setLoading(true);
      const res = await ApiService.post('auth/signup', {
        username: data.email,
        password: data.password,
        name: 'Test',
        surname: 'Test',
        description: 'asdsadsa',
      });

      /* const cookie = res.headers?.['set-cookie']?.[0];

      if (cookie) {
        const ACCESS_TOKEN_STRING = 'access-token=';
        const MAX_AGE_STRING = '; Max-Age';
        const splitted = cookie.split(MAX_AGE_STRING)[0];
        const token = splitted.substr(ACCESS_TOKEN_STRING.length);
      }*/
      const token = res.data.token;
      console.log(token);
      console.log('Registrovao sam se');
       setIsLoggedIn(true);
    } catch (err) {
      console.log('kako je greska');
      setError(err.response?.data?.error ?? err.message ?? 'An error');
      Alert.alert('Register failed!', 'Check your Username and password and try again.', [
      { text: 'Try again' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.youtube} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register now!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <FontAwesome style={styles.icon} name="user-o" color={colors.blue} size={20} />
          <TextInput
            onChangeText={(val) => textInputChange(val)}
            placeholder="Your Username"
            style={styles.textInput}
            autoCapitalize="none"
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.chech_textInputChange ? (
            <Feather style={styles.icon} name="check-circle" color={colors.green} size={20} />
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Text style={styles.errorMsg}>Username must be 4 characters long</Text>
        )}
        <Text style={styles.password}>Password</Text>
        <View style={styles.action}>
          <FontAwesome style={styles.icon} name="lock" color={colors.blue} size={20} />
          <TextInput
            secureTextEntry={data.secureTextEntry ? true : false}
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather style={styles.icon} name="eye-off" color={colors.gray} size={20} />
            ) : (
              <Feather style={styles.icon} name="eye" color={colors.gray} size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Text style={styles.errorMsg}>Password must be 8 characters long</Text>
        )}
        <Text style={styles.password}> Confirm Password</Text>
        <View style={styles.action}>
          <FontAwesome style={styles.icon} name="lock" color={colors.blue} size={20} />
          <TextInput
            secureTextEntry={data.secureTextEntry ? true : false}
            placeholder="Confirm your Password"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather style={styles.icon} name="eye-off" color={colors.gray} size={20} />
            ) : (
              <Feather style={styles.icon} name="eye" color={colors.gray} size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Text style={styles.errorMsg}>Password must be 8 characters long</Text>
        )}

        <View style={styles.button}>
          <Button
            text="Register"
            onPress={onSignUpPress}
            loading={loading}
            containerStyle={styles.signIn}
            textStyle={[styles.textSign, { color: colors.white }]}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
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
                  color: colors.white,
                },
              ]}>
              Sign in
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
    paddingBottom: 20,
  },
  footer: {
    flex: 4,
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
    marginBottom: -12,
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
    marginTop: 25,
    paddingLeft: 10,
    color: colors.blue,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
    marginTop: 65,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.youtube,
    marginTop: -30,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  password: {
    color: colors.blue,
    fontSize: 18,
    marginTop: 25,
    marginBottom: -12,
  },
  errorMsg: {
    color: colors.red,
    fontSize: 12,
  },
  icon: {
    marginTop: 25,
  },
});

export default Login;

//
