// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function SevenSreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/user.PNG')} // icon người dùng
          style={styles.icon}
        />
        <TextInput
          placeholder="Name"
          style={styles.input}
          placeholderTextColor="#333"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/logo2.PNG')} // icon ổ khóa
          style={styles.icon}
        />
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
            source={require('../assets/eye.PNG')} // con mắt để hiện/ẩn mật khẩu
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7b700', // Màu vàng của nền
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e4d000', // Màu vàng nhạt của input
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: '#333',
  },
  // eyeIcon: {
  //   width: 20,
  //   height: 20,
  //   tintColor: '#333',
  //   marginLeft: 10,
  // },
  loginButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  createAccountButton: {
    alignItems: 'center',
  },
  createAccountText: {
    color: '#333',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
