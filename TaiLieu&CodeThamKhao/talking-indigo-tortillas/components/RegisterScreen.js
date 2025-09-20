// RegisterScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('male');

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <TextInput
        placeholder="Name"
        style={styles.input}
        placeholderTextColor="#333"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Phone"
        style={styles.input}
        placeholderTextColor="#333"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#333"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
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
            source={require('../assets/eye.PNG')} // 👁‍🗨 icon eye
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Birthday"
        style={styles.input}
        placeholderTextColor="#333"
        value={birthday}
        onChangeText={setBirthday}
        keyboardType="default"
      />

      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'male' && styles.selectedGender]}
          onPress={() => setGender('male')}
        >
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.genderButton, gender === 'female' && styles.selectedGender]}
          onPress={() => setGender('female')}
        >
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>REGISTER</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>
        When you agree to terms and conditions
      </Text>
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
  //   width: 20,
  //   height: 20,
  //   tintColor: '#333',
  //   marginLeft: 10,
  // },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  genderButton: {
    marginHorizontal: 10,
    backgroundColor: '#d6eadd',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  selectedGender: {
    backgroundColor: '#9cc4b7',
  },
  genderText: {
    color: '#333',
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#d94f3a',
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  registerText: {
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
});
