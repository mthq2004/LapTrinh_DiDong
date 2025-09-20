import React from 'react'
import { Product } from '../App'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    cart: Product[]
}

const CartSummary = ({cart}: Props) => {
    const totalItem = cart.length;
    const totalPrice = cart.reduce((sum, item)=> sum+item.price, 0);
  return (
    <View>
        <Text style={{textAlign:"center"}}>Giỏ hàng: có {totalItem} sản phẩm - Tổng tiền: {totalPrice}</Text>
    </View>
  )
}
export default CartSummary