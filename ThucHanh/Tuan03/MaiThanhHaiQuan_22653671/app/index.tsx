import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to My App 👋</Text>
 
 <Link href="/FirstScreen" asChild>
        <Button title="Go to First Screen " />
      </Link>

       <Link href="/Farme1a" asChild>
        <Button title="Go to Farme 1a" />
      </Link>

        <Link href="/Farme1b" asChild>
        <Button title="Go to Farme 1b" />
      </Link>

      <Link href="/Farme1c" asChild>
        <Button title="Go to Farme 1c" />
      </Link>
          <Link href="/Farme1d" asChild>
        <Button title="Go to Farme 1d" />
      </Link>
          <Link href="/Farms1e" asChild>
        <Button title="Go to Farme 1e" />
      </Link>

           <Link href="/Farme2a" asChild>
        <Button title="Go to Farme 2a" />
      </Link>
     <Link href="/Farme2b" asChild>
        <Button title="Go to Farme 2b" />
      </Link>

      
    </View>
  );
}
