import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer, Router } from './src/navigation';
import { AuthProvider } from './src/context';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </NavigationContainer>
  );
}
