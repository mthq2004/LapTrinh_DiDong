import React from 'react'
import { Seat } from '../App'
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface SeatProps{
    seat : Seat;
    onClick: (seatNumber: number) => void;
}

export const SeatCard = ({seat, onClick} : SeatProps) => {
    let seatStatusColor = "blue";
    if(seat.isSelected) seatStatusColor = "red";
    else if(seat.isBooked) seatStatusColor = "gray";
  return (
    <Pressable style={[styles.cardContainer, {backgroundColor : seatStatusColor}]} onPress={()=>onClick(seat.seatNumber)}>
        <Text style={styles.title}>{seat.seatNumber}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        flex: 1,
        backgroundColor: "blue",
        margin: 5,
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    title:{
        fontSize: 18,
        color: "white"
    }
  })