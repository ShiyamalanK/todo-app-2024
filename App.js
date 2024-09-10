import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <SafeAreaView 
      style={styles.safeAreaContainer}>
      <TodoList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer:{
    flex: 1,
    paddingVertical: 25
  },  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
