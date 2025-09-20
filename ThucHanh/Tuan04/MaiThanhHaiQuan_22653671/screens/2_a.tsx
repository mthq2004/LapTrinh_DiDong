import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';

export const A = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "gold" }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>LOGIN</Text>
      <TextInput placeholder="Name" style={{ width: 250, height: 50, borderWidth: 1, marginBottom: 10, padding: 10, backgroundColor: "white" }} />
      <View style={{flexDirection: "row", alignItems: "center", backgroundColor:"white", height: 50, borderWidth: 1 }}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          style={{ width: 200, marginLeft:10}}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ marginLeft: 10, marginRight: 10 }}>
          <Text>👁</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20, width: 250 }}>
        <Button title="LOGIN" color="black" onPress={() => {}} />
      </View>
      <Text style={{ marginTop: 20 }}>Forgot your password?</Text>
    </View>
  )
}
