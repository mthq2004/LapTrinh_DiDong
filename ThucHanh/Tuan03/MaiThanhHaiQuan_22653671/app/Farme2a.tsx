import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Name"
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Text style={styles.eyeIcon}>👁️</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Create Account Link */}
      <TouchableOpacity>
        <Text style={styles.link}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFB300', // Màu nền vàng
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#000', // Màu viền của input
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: 'white', // Màu nền ô nhập liệu
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  eyeIcon: {
    fontSize: 24,
    marginLeft: -35,
  },
  button: {
    backgroundColor: '#000', // Nút login màu đen
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
});
