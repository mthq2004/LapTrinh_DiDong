// LoginScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#333"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          style={[styles.input, { flex: 1 }]}
          placeholderTextColor="#333"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePassword}>
          <Image
            source={require('../assets/eye.PNG')} // 👁‍🗨 icon eye (bạn cần thêm)
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>
        When you agree to terms and conditions
      </Text>

      <TouchableOpacity>
        <Text style={styles.forgot}>For got your password?</Text>
      </TouchableOpacity>

      <Text style={styles.orLogin}>Or login with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
            }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#0084FF' }]}>
          <Image
            source={{
             uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968841.png',
            }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc' }]}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/281/281764.png',
            }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddf7e6',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#c9e0d0',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c9e0d0',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  // eyeIcon: {
  //   width: 25,
  //   height: 25,
  //   tintColor: '#333',
  //   marginLeft: 10,
  // },
  loginButton: {
    backgroundColor: '#d94f3a',
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  terms: {
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 5,
    color: '#333',
  },
  forgot: {
    color: '#512da8',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
  orLogin: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
