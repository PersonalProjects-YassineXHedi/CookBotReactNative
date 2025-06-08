import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
 const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CookBot!</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.navigate('/Camera')}>
      <Text style={styles.buttonText}>Search recipes</Text>
    </TouchableOpacity>
     <TouchableOpacity style={styles.button} onPress={() => router.navigate('/')}>
      <Text style={styles.buttonText}>View old carts</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
  button: { backgroundColor: '#000000', padding: 12, borderRadius: 10, marginBottom:10},
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
