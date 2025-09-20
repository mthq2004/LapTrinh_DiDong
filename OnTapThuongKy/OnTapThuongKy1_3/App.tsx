import React, { useState } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, View } from "react-native";
import ParkingSpot from "./components/ParkingSpot";
import UserInfo from "./components/UserInfo";

export interface Spot {
  id: number;
  isBooked: boolean;
  isSelected: boolean;
}

export default function App() {
  const initSpots: Spot[] = Array.from({ length: 20 }, (_, i) => {
    const id = i + 1;
    return {
      id,
      isBooked: id === 13 || id === 15, // chỗ 13 và 15 đã đặt sẵn
      isSelected: false,
    };
  });

  const [spots, setSpots] = useState<Spot[]>(initSpots);
  const [selectedSpot, setSelectedSpot] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [className, setClassName] = useState("");

  const handleSelect = (id: number) => {
    const spot = spots.find((s) => s.id === id);
    if (!spot) return;

    if (spot.isBooked) {
      Alert.alert("Thông báo", `Chỗ ${id} đã bị đặt trước!`);
      return;
    }

    setSpots((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, isSelected: !s.isSelected } : { ...s, isSelected: false }
      )
    );

    setSelectedSpot((prev) => (prev === id ? null : id));
  };

  const handleBooking = () => {
    if (!selectedSpot) {
      Alert.alert("Lỗi", "Bạn chưa chọn chỗ nào!");
      return;
    }

    setSpots((prev) =>
      prev.map((s) =>
        s.id === selectedSpot ? { ...s, isSelected: false, isBooked: true } : s
      )
    );

    
    setSelectedSpot(null);
  };

  const handleConfirm = () =>{
    Alert.alert("Xác nhânj", `Bạn có chắc muốn đặt chỗ ${selectedSpot} này chứ?`, [
      {text: "Đồng ý", 
        onPress: () => handleBooking()
      },
      {
        text: "Từ chối"
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bãi giữ xe, chọn chỗ đậu</Text>

      <UserInfo
        name={name}
        setName={setName}
        studentId={studentId}
        setStudentId={setStudentId}
        className={className}
        setClassName={setClassName}
      />

      <FlatList
        data={spots}
        keyExtractor={(item) => item.id.toString()}
        numColumns={5}
        renderItem={({ item }) => (
          <ParkingSpot spot={item} onSelect={handleSelect} />
        )}
        contentContainerStyle={styles.list}
      />

      <Button title="Đặt chỗ" onPress={handleConfirm} />

      <Text style={styles.info}>
        {selectedSpot
          ? `${name} - MSSV: ${studentId} (${className}) đã chọn chỗ ${selectedSpot}`
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
