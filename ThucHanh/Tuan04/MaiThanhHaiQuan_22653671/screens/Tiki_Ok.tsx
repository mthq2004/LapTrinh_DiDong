import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";

export default function TikiOk() {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <ScrollView contentContainerStyle={{ padding: 12, paddingBottom: 120 }}>
        {/* Product info */}
        <View style={{ flexDirection: "row", marginBottom: 12, backgroundColor: "#fff", padding: 8 }}>
          <Image
            source={require("../imgs/tichphanvaungdung.jpeg")}
            style={{ width: 80, height: 100, marginRight: 10 }}
            resizeMode="contain"
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 4 }}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={{ fontSize: 12, color: "gray", marginBottom: 6 }}>Cung cấp bởi Tiki Trading</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "red", marginBottom: 2 }}>
              141.800 đ
            </Text>
            <Text style={{ fontSize: 12, color: "gray", textDecorationLine: "line-through" }}>
              141.800 đ
            </Text>

            {/* Quantity + Mua sau */}
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}>
              <View style={{ flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ddd" }}>
                <TouchableOpacity
                  onPress={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ paddingHorizontal: 10, paddingVertical: 4 }}
                >
                  <Text>-</Text>
                </TouchableOpacity>
                <Text style={{ paddingHorizontal: 12 }}>{quantity}</Text>
                <TouchableOpacity
                  onPress={() => setQuantity(quantity + 1)}
                  style={{ paddingHorizontal: 10, paddingVertical: 4 }}
                >
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{ marginLeft: 20 }}>
                <Text style={{ color: "#007AFF" }}>Mua sau</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Mã giảm giá */}
        <Text style={{ fontSize: 12, marginBottom: 4 }}>
          Mã giảm giá đã lưu <Text style={{ color: "#007AFF" }}>Xem tại đây</Text>
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 12 }}>
          <TextInput
            placeholder="Mã giảm giá"
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "#ddd",
              padding: 10,
              backgroundColor: "#fff",
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#007AFF",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Áp dụng</Text>
          </TouchableOpacity>
        </View>

        {/* Phiếu quà tặng */}
        <Text style={{ fontSize: 12, marginBottom: 12 }}>
          Bạn có phiếu quà tặng Tiki/Got it/Urbox?{" "}
          <Text style={{ color: "#007AFF" }}>Nhập tại đây?</Text>
        </Text>

        {/* Tạm tính */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 12,
            borderTopWidth: 1,
            borderColor: "#eee",
          }}
        >
          <Text style={{ fontSize: 14 }}>Tạm tính</Text>
          <Text style={{ fontSize: 14, color: "red", fontWeight: "bold" }}>141.800 đ</Text>
        </View>
      </ScrollView>

      {/* Footer: Thành tiền + Đặt hàng */}
      <View
        style={{
          borderTopWidth: 1,
          borderColor: "#ddd",
          padding: 12,
          backgroundColor: "#fff",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
          <Text style={{ fontSize: 14 }}>Thành tiền</Text>
          <Text style={{ fontSize: 16, color: "red", fontWeight: "bold" }}>141.800 đ</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            padding: 14,
            borderRadius: 4,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
