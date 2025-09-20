import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Farme1e() {
  const [gender, setGender] = useState<string>('male');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Name"
      />

      {/* Phone Input */}
      <TextInput
        style={styles.input}
        placeholder="Phone"
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Text style={styles.eyeIcon}>👁️</Text>
        </TouchableOpacity>
      </View>

      {/* Birthday Input */}
      <TextInput
        style={styles.input}
        placeholder="Birthday"
      />

      {/* Gender Selection using Radio Buttons */}
      <Text style={styles.label}>Gender</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setGender('male')}
        >
          <View style={[styles.radioCircle, gender === 'male' && styles.radioSelected]} />
          <Text style={gender === 'male' ? styles.radioSelectedText : styles.radioUnselectedText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setGender('female')}
        >
          <View style={[styles.radioCircle, gender === 'female' && styles.radioSelected]} />
          <Text style={gender === 'female' ? styles.radioSelectedText : styles.radioUnselectedText}>Female</Text>
        </TouchableOpacity>
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>

      {/* Terms and Conditions Link */}
      <Text style={styles.link}>When you agree to terms and conditions</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#D3F9D8', // Light green
    borderWidth: 2,
    borderColor: '#FF8C00', // Border color for the container
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  eyeIcon: {
    fontSize: 24,
    marginLeft: -35,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  radioContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FF8C00',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    backgroundColor: '#FF8C00', // Highlight the selected option
  },
  radioSelectedText: {
    color: '#FF8C00',
    fontWeight: 'bold',
  },
  radioUnselectedText: {
    color: 'black',
  },
  button: {
    backgroundColor: '#FF8C00', // Orange button
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
    textAlign: 'center',
    color: '#0066CC',
  },
});
