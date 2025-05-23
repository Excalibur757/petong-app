// app/_layout.tsx (ou app/_app.tsx)
import { AuthProvider } from '../contexts/AuthContext';
import { Slot } from 'expo-router';

export default function Layout() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
