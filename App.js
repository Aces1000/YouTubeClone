import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer, Router } from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
