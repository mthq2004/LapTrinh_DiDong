// SecondScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function SecondScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo1.PNG')}
        style={styles.circleImage}
      />
      <Text style={styles.title}>GROW{"\n"}YOUR BUSINESS</Text>
      <Text style={styles.subtitle}>
        We will help you to grow your business using{"\n"}online server
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.bottomLink}>
        <Text style={styles.bottomText}>HOW WE WORK?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6f1ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  circleImage: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#ffc800',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#000',
  },
  bottomLink: {
    position: 'absolute',
    bottom: 20,
  },
  bottomText: {
    fontWeight: 'bold',
    color: '#000',
  },
});
