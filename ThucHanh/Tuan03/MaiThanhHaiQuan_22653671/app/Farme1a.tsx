import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Farme1a() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo circle */}
      <View style={styles.circle} />

      {/* Header text */}
      <Text style={styles.headerText}>GROW{'\n'}YOUR BUSINESS</Text>

      {/* Subtitle */}
      <Text style={styles.subText}>
        We will help you to grow your business using{'\n'}online server
      </Text>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.loginBtn]}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.signupBtn]}>
          <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom link */}
      <Text style={styles.bottomText}>HOW WE WORK?</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC', // xanh nhạt
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: 'black',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: 'black',
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 20,
    gap: 15,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
  loginBtn: {
    backgroundColor: 'white',
  },
  signupBtn: {
    backgroundColor: '#FFD600', // vàng
  },
  loginText: {
    fontWeight: 'bold',
    color: 'black',
  },
  signupText: {
    fontWeight: 'bold',
    color: 'black',
  },
  bottomText: {
    marginTop: 40,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});
