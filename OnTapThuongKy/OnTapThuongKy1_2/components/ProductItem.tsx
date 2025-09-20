import React from 'react'
import { Product } from '../App'
import { Button, StyleSheet, Text, View } from 'react-native';

interface Prop {
    product : Product
    onAdd : (product: Product) => void;
}

const ProductItem = ({product, onAdd} : Prop) => {
  return (
    <View style={styles.productItemContainer}>
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
        <Button title='Thêm vào giỏ hàng' onPress={()=>onAdd(product)}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    productItemContainer:{
        flex: 2,
        justifyContent:"center",
        alignItems: "center",
        borderWidth: 1,
        gap: 15,
        margin: 10,
        padding:5,
        borderRadius: 10
    }
})

export default ProductItem