// ForgetPasswordScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ForgetPasswordScreen() {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo2.PNG')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>FORGET{"\n"}PASSWORD</Text>

      <Text style={styles.description}>
        Provide your account’s email for which you{"\n"}want to reset your password
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#333"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6f1ff',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    marginBottom: 25,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 25,
  },
  input: {
    height: 50,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#ffc800',
    paddingVertical: 14,
    paddingHorizontal: 100,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
