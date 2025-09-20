import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import FirstScreen from './components/FirstScreen';
import SecondScreen from "./components/SecondScreen"
import ForgetPasswordScreen from "./components/ForgetPasswordScreen"
import VerifyCodeScreen from "./components/VerifyCodeScreen"
import LoginScreen from "./components/LoginSreen"
import RegisterScreen from "./components/RegisterScreen"
import SevenScreen from "./components/SevenSreen"
import EightSreen from "./components/EightSreen"
export default function App() {
  return (
    <LoginScreen/>
    )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
