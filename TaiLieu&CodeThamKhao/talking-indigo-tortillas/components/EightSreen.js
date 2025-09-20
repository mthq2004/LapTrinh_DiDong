import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; // Import thư viện icons

export default function EightScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <View style={styles.container}>
      {/* Logo ở đầu màn hình */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/eye1.PNG')} // Image eye1.PNG (logo)
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>Please input user name</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#333" style={styles.icon} />
        <TextInput
          placeholder="Please input user name"
          style={styles.input}
          placeholderTextColor="#333"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <Text style={styles.title}>Please input password</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="lock" size={20} color="#333" style={styles.icon} />
        <TextInput
          placeholder="Please input password"
          style={[styles.input, { flex: 1 }]}
          placeholderTextColor="#333"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePassword}>
          <Image
            source={require('../assets/eye.PNG')} // Image eye1.PNG
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.otherMethodsText}>Other Login Methods</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="plus-square" size={30} color="#3b5998" style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialCommunityIcons name="wifi" size={30} color="#f57c00" style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={30} color="#4267B2" style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center', // Center the logo horizontally
    marginBottom: 30, // Add some space below the logo
  },
  logo: {
    width: 100, // Adjust the size of the logo
    height: 100, // Adjust the size of the logo
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  eyeIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: '#0066cc',
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  link: {
    alignItems: 'center',
  },
  linkText: {
    color: '#0066cc',
    fontSize: 14,
  },
  otherMethodsText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
