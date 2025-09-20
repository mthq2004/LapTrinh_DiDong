import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { SeatCard } from './components/SeatCard';

export interface Seat {
  seatNumber: number;
  isSelected: boolean;
  isBooked: boolean;
}

const initSeat: Seat[] = Array.from({length: 40}, (_, i)=>{
  return {
    seatNumber: i + 1,
    isSelected: false,
    isBooked: false,
  }
})

export default function App() {

  const [seats, setSeats] = useState<Seat[]>(initSeat);

  const handleSelect = (seatNumber: number) => {
    const seat = seats.find((item)=>item.seatNumber === seatNumber);
    if(!seat){
      return;
    }
    if(seat.isBooked){
      Alert.alert("Thông báo", "Ghế này đã có người đặt")
    }
    setSeats(prev => prev.map(item=>{
      if(item.seatNumber === seatNumber){
        return{
          ...item,
          isSelected: !item.isSelected,
        }
      }
      return item;
    }))
  }

  const handleSubmit = () =>{
    setSeats(prev => prev.map(item=>{
      if(item.isSelected){
        return{
          ...item,
          isSelected: false,
          isBooked: true,
        }
      }
      return item;
    }))
  }

  const handleConfirm = () =>{
    Alert.alert("Xác nhận", "Bạn có chắc chắn đặt chỗ này không?", [
      {
        text: "Đồng ý",
        onPress: () => handleSubmit()
      },
      {
        text: "Từ chối",
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text>Hello cậu</Text>
      <Button title='Đặt ghế' onPress={()=>handleConfirm()}></Button>
      <FlatList data={seats} numColumns={4} keyExtractor={(seat)=>seat.seatNumber.toString()} renderItem={({item})=><SeatCard onClick={handleSelect} seat={item}></SeatCard>}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
});
