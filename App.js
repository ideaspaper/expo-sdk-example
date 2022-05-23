import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import AppDrawer from './navigators/AppDrawer';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
