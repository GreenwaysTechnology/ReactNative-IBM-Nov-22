import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Greeter } from './greeter/greeter';


export default function App() {
  return (
    <View style={styles.container}>
      <Greeter title="Welcome to React Native!!" />
      <Greeter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
