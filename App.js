import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { extendTheme, NativeBaseProvider } from 'native-base';
import AppDrawer from './navigators/AppDrawer';

export default function App() {
  const config = {
    useSystemColorMode: false,
    initialColorMode: 'light'
  };
  const customTheme = extendTheme({ config });

  return (
    <NativeBaseProvider theme={customTheme}>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
