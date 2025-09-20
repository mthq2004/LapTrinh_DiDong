import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Spot } from "../App";

interface Props {
  spot: Spot;
  onSelect: (id: number) => void;
}

const ParkingSpot = ({ spot, onSelect }: Props) => {
  let bgColor = "#4CAF50"; // xanh = trống
  if (spot.isBooked) bgColor = "#f44336"; // đỏ = đã đặt
  else if (spot.isSelected) bgColor = "#2196F3"; // xanh dương = đang chọn

  return (
    <Pressable
      style={[styles.spot, { backgroundColor: bgColor }]}
      onPress={() => onSelect(spot.id)}
    >
      <Text style={styles.text}>{spot.id}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  spot: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ParkingSpot;
