import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';

export interface Product{
  id: number;
  name: string;
  price: number;
}

export default function App() {

  const products: Product[] = [
    {id: 1, name: "Sản phẩm 1", price: 10000},
    {id: 2, name: "Sản phẩm 2", price: 20000},
    {id: 3, name: "Sản phẩm 3", price: 30000},
    {id: 4, name: "Sản phẩm 4", price: 40000},
    {id: 5, name: "Sản phẩm 5", price: 50000},
    {id: 6, name: "Sản phẩm 6", price: 60000},
  ]

  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart(prev => [...prev, product])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Danh sách sản phẩm</Text>
      <CartSummary cart={cart}/>
      <ProductList products={products} onAddToCart={handleAddToCart}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 15,
    padding: 10
  },
  header:{
    textAlign:"center",
    fontSize: 18,
    fontWeight:"bold",
  }
});
