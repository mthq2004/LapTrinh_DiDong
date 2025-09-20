import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { SeatType } from "../App";

interface Props {
  seat: SeatType;
  onSelect: (id: number) => void;
}

const Seat = ({ seat, onSelect }: Props) => {
  let bgColor = "#4CAF50";
  if (seat.isBooked) bgColor = "#f44336"; 
  else if (seat.isSelected) bgColor = "#2196F3"; 

  return (
    <Pressable
      style={[styles.seat, { backgroundColor: bgColor }]}
      onPress={() => onSelect(seat.id)}
    >
      <Text style={styles.text}>{seat.id}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  seat: {
    width: 60,
    height: 60,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Seat;
