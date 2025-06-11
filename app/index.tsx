import React from 'react';
import HomeScreen from './HomeScreen';
import SplashScreen from './SplashSceen';


export default function App() {
  const[isLoading, setIsLoading] = React.useState<boolean>(true);
  return (
  isLoading ? <SplashScreen setIsLoading={setIsLoading}/> : <HomeScreen/>
  );
}

