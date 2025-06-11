// SplashScreen.tsx
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

interface SplashProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;}

export default function SplashScreen({setIsLoading}: SplashProps) {
const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/'); // or 'Login', etc.
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/splash.json')}
        autoPlay
        loop={false}
        resizeMode="cover"
        style={styles.animation}
        onAnimationFinish={()=>setIsLoading(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,  backgroundColor: '#FFF8F0', justifyContent: 'center', alignItems: 'center', },
  animation: { width: 200, height: 200 },
});
