import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
 <TextInput
        style={styles.input}
        placeholder="Password"
        value={email}
        onChangeText={setEmail}
      />
      {/* Password Input */}
      <View style={styles.passwordContainer}>
       
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Image
            style={styles.eyeIcon}
            source={{ uri: 'https://img.icons8.com/ios/50/000000/visible.png' }} // Eye icon
          />
        </TouchableOpacity>
      </View>

      {/* LOGIN Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Forgot password link */}
      <TouchableOpacity>
        <Text style={styles.link}>For got your password?</Text>
      </TouchableOpacity>

      {/* Other Login Methods */}
      <Text style={styles.otherLoginText}>Or login with</Text>

      {/* Social Media Login */}
      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.socialIcon}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/facebook.png' }} // Facebook icon
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/zalo.png' }} // Zalo icon
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/google-logo.png' }} // Google icon
          />
        </TouchableOpacity>
      </View>

      {/* Terms and Conditions Link */}
      <Text style={styles.termsText}>When you agree to terms and conditions</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#D3F9D8', // Light blue background
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
    input: {
      width: '95%',
      height: 50,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 8,
      paddingLeft: 10,
      marginBottom: 15,
      backgroundColor: 'white',
        alignSelf: 'center', // Căn giữa nút

    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 1,

    },
  eyeIcon: {
    width: 24,
    height: 24,
    marginLeft: -35,
  },
  button: {
    backgroundColor: '#FF8C00', // Orange login button
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    width:'95%',
            alignSelf: 'center', // Căn giữa nút

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    textAlign: 'center',
    color: '#0066CC',
    fontWeight: 'bold',
  },
  otherLoginText: {
    textAlign: 'center',
    marginVertical: 15,
    color: 'gray',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 25,
  },
  icon: {
    width: 25,
    height: 25,
  },
  termsText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#0066CC',
    fontWeight: 'bold',
  },
});
