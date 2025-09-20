// VerifyCodeScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function VerifyCodeScreen() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = [];

  const handleChange = (text, index) => {
    if (/^[0-9]$/.test(text)) {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

      // focus next
      if (index < 5 && text) {
        inputs[index + 1].focus();
      }
    } else if (text === '') {
      const newCode = [...code];
      newCode[index] = '';
      setCode(newCode);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CODE</Text>
      <Text style={styles.subtitle}>VERIFICATION</Text>

      <Text style={styles.description}>
        Enter ontime password sent on{'\n'}
        <Text style={styles.phoneNumber}>++849092605798</Text>
      </Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="number-pad"
            maxLength={1}
            ref={(ref) => (inputs[index] = ref)}
            onChangeText={(text) => handleChange(text, index)}
            value={digit}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>VERIFY CODE</Text>
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  phoneNumber: {
    fontWeight: 'bold',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    width: 40,
    height: 50,
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  verifyButton: {
    backgroundColor: '#ffc800',
    paddingVertical: 14,
    paddingHorizontal: 100,
    borderRadius: 5,
  },
  verifyButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
