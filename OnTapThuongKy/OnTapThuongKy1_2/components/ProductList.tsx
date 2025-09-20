import React from 'react'
import { FlatList, View } from 'react-native'
import { Product } from '../App';
import ProductItem from './ProductItem';

interface Props{
    products: Product[];
    onAddToCart: (product: Product) => void;
}

const ProductList = ({products, onAddToCart}: Props) => {
  return (
    <FlatList data={products} 
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) => (
        <ProductItem product={item} onAdd={onAddToCart}/>
    )}
    ></FlatList>
  )
}

export default ProductList