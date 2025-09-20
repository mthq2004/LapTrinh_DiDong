import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      {/* Ảnh tròn */}
      <Image 
        source={require('../assets/logo.PNG')} // link ảnh thay thế
        style={styles.logo}
      />

      {/* Tiêu đề */}
      <Text style={styles.title}>GROW</Text>
      <Text style={styles.title}>YOUR BUSINESS</Text>

      {/* Mô tả */}
      <Text style={styles.subtitle}>
        We will help you to grow your business using online server
      </Text>

      {/* Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ccf9', // nền xanh giống hình
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60, // để thành hình tròn
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#FFD600',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 6,
    marginHorizontal: 10,
  },
  signupButton: {
    backgroundColor: '#FFD600',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 6,
    marginHorizontal: 10,
  },
  loginText: {
    color: '#000',
    fontWeight: 'bold',
  },
  signupText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
