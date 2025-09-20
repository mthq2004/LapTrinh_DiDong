import React, { useState } from "react";
import { Alert, Button, FlatList, Platform, StyleSheet, Text, View } from "react-native";
import UserInfo from "./components/UserInfor";
import Seat from "./components/Seat";

export interface SeatType {
  id: number;
  isBooked: boolean;
  isSelected: boolean;
}
export default function App() {
  const initSeats: SeatType[] = Array.from({ length: 30 }, (_, i) => {
    const id = i + 1;
    return {
      id,
      isBooked: id === 13 || id === 15,
      isSelected: false,
    };
  });
  const [seats, setSeats] = useState<SeatType[]>(initSeats);
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [className, setClassName] = useState("");
  const handleSelect = (id: number) => {
    const seat = seats.find((s) => s.id === id);
    if (!seat) return;

    if (seat.isBooked) {
      if (Platform.OS === "web") {
        alert(`Chỗ ${id} đã bị đặt trước!`);
      } else {
        Alert.alert("Thông báo", `Chỗ ${id} đã bị đặt trước!`);
      }
      return;
    }
    setSeats((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, isSelected: !s.isSelected } : { ...s, isSelected: false }
      )
    );
    setSelectedSeat((prev) => (prev === id ? null : id));
  };

  const handleBooking = () => {
    if (!selectedSeat) {
      Alert.alert("Lỗi", "Bạn chưa chọn chỗ nào!");
      return;
    }
    setSeats((prev) =>
      prev.map((s) =>
        s.id === selectedSeat ? { ...s, isSelected: false, isBooked: true } : s
      )
    );
    setSelectedSeat(null);
  };

  const handleConfirm = () => {
    if (!selectedSeat) {
      if (Platform.OS === "web") {
        alert("Bạn chưa chọn chỗ nào!");
      } else {
        Alert.alert("Lỗi", "Bạn chưa chọn chỗ nào!");
      }
      return;
    }

    if (Platform.OS === "web") {
      const isConfirmed = window.confirm(`Bạn có chắc muốn đặt chỗ ${selectedSeat} không?`);
      if (isConfirmed) {
        handleBooking();
      }
    } else {
      Alert.alert(
        "Xác nhận đặt chỗ",
        `Bạn có chắc muốn đặt chỗ ${selectedSeat} không?`,
        [
          { text: "Từ chối", style: "cancel" },
          { text: "Đồng ý", onPress: () => handleBooking() },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phòng học - chọn chỗ ngồi sinh viên</Text>
      <UserInfo
        name={name}
        setName={setName}
        studentId={studentId}
        setStudentId={setStudentId}
        className={className}
        setClassName={setClassName}
      />
      <FlatList
        data={seats}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => <Seat seat={item} onSelect={handleSelect} />}
        contentContainerStyle={styles.list}
      />
      <Button title="Đặt chỗ" onPress={handleConfirm} />
      <Text style={styles.info}>
        {selectedSeat
          ? `${name} - MSSV: ${studentId} (${className}) đã chọn chỗ ${selectedSeat}`
          : "Bạn chưa chọn chỗ nào"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 40,
    backgroundColor: "#ffff"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  list: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  info: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});
