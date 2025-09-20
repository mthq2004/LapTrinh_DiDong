import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Farme1b() {
  const [email, setEmail] = useState('');

  // Hàm xử lý sự kiện khi nhấn nút NEXT
 

  return (
    <SafeAreaView style={styles.container}>
      {/* Icon */}
      <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/100/lock.png' }}
        style={styles.icon}
      />

      {/* Title */}
      <Text style={styles.title}>FORGET</Text>
      <Text style={styles.title}>PASSWORD</Text>

      {/* Subtitle */}
      <Text style={styles.subText}>
        Provide your account’s email for which you{'\n'}want to reset your password
      </Text>

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}  // Lắng nghe sự thay đổi trong input
        keyboardType="email-address"
      />

      {/* Button */}
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    marginVertical: 15,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#FFD600',
    width: '80%',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
});
