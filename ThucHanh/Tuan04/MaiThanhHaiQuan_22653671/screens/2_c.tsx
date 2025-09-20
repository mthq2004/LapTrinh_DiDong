import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Switch } from "react-native";

export default function C() {
  const [length, setLength] = useState("12");
  const [lower, setLower] = useState(true);
  const [upper, setUpper] = useState(false);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) chars += "0123456789";
    if (symbol) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (!chars) return setPassword("Hãy chọn ít nhất 1 option!");

    let result = "";
    for (let i = 0; i < Number(length); i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1A1A50", justifyContent: "center", padding: 20 }}>
      <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>
        PASSWORD GENERATOR
      </Text>

      {/* Hiển thị password */}
      <View style={{ backgroundColor: "#000", padding: 14, borderRadius: 4, marginBottom: 20 }}>
        <Text style={{ color: "#fff", fontSize: 16 }}>{password || "Your password will appear here"}</Text>
      </View>

      {/* Input length */}
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
        <Text style={{ color: "#fff", flex: 1 }}>Password length</Text>
        <TextInput
          value={length}
          onChangeText={setLength}
          keyboardType="numeric"
          style={{
            backgroundColor: "#fff",
            width: 80,
            borderRadius: 4,
            padding: 8,
            textAlign: "center",
          }}
        />
      </View>

      {/* Options */}
      {[
        { label: "Include lower case letters", state: lower, setState: setLower },
        { label: "Include upcase letters", state: upper, setState: setUpper },
        { label: "Include number", state: number, setState: setNumber },
        { label: "Include special symbol", state: symbol, setState: setSymbol },
      ].map((opt, i) => (
        <View key={i} style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
          <Text style={{ color: "#fff", flex: 1 }}>{opt.label}</Text>
          <Switch value={opt.state} onValueChange={opt.setState} />
        </View>
      ))}

      {/* Button generate */}
      <TouchableOpacity
        onPress={generatePassword}
        style={{
          backgroundColor: "#4A3AFF",
          paddingVertical: 14,
          borderRadius: 8,
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
}
