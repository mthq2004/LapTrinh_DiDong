import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function B() {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    console.log("Review submitted:", { rating, review });
  };

  return (
    <View
      style={{
        margin: 20,
        padding: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
      }}
    >
      {/* Header sản phẩm */}
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
        <View
          style={{
            width: 48,
            height: 48,
            backgroundColor: "black",
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 32,
              height: 24,
              backgroundColor: "white",
              borderRadius: 4,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{ width: 16, height: 12, backgroundColor: "black", borderRadius: 2 }}
            />
          </View>
        </View>
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={{ fontWeight: "600", fontSize: 14 }}>
            USB Bluetooth Music Receiver
          </Text>
          <Text style={{ fontSize: 12, color: "gray" }}>
            HJX-001 - Biến loa thường thành loa bluetooth
          </Text>
        </View>
      </View>

      {/* Rating */}
      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 8 }}>
          Cực kỳ hài lòng
        </Text>
        <View style={{ flexDirection: "row" }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <FontAwesome
                name={star <= rating ? "star" : "star-o"}
                size={28}
                color={star <= rating ? "#FFD700" : "#ccc"}
                style={{ marginRight: 4 }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Button thêm hình */}
      <TouchableOpacity
        style={{
          borderWidth: 2,
          borderStyle: "dashed",
          borderColor: "#60A5FA",
          padding: 12,
          borderRadius: 8,
          alignItems: "center",
          marginBottom: 16,
        }}
        onPress={() => {}}
      >
        <Text style={{ color: "#2563EB", fontWeight: "500" }}>📷 Thêm hình ảnh</Text>
      </TouchableOpacity>

      {/* Textarea */}
      <TextInput
        placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
        value={review}
        onChangeText={setReview}
        multiline
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 6,
          minHeight: 100,
          padding: 10,
          marginBottom: 16,
          textAlignVertical: "top",
        }}
      />

      <Text style={{ fontSize: 12, color: "gray", marginBottom: 16 }}>
        https://meet.google.com/nj-ojer-app
      </Text>

      {/* Submit */}
      <Button
        title="GỬI"
        color="#2563EB"
        onPress={handleSubmit}
      />
    </View>
  );
}
