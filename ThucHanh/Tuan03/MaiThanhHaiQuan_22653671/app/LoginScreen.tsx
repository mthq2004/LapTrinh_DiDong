import { Link } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://img.icons8.com/3d-fluency/94/visible.png' }}
        style={styles.logo}
      />

      <TextInput style={styles.input} placeholder="Please input user name" />
      <TextInput style={styles.input} placeholder="Please input password" secureTextEntry />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.rowText}>
        <Link href="/SignUpScreen" asChild>
          <Text style={styles.linkText}>Register</Text>
        </Link>

        <Link href="/VerifyCodeScreen" asChild>
          <Text style={styles.linkText}>Forgot Password</Text>
        </Link>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    marginVertical: 10,
    paddingVertical: 8,
  },
  loginButton: {
    backgroundColor: '#1E90FF',
    width: '100%',
    paddingVertical: 12,
    marginTop: 20,
    borderRadius: 6,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  rowText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 15,
  },
  linkText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
