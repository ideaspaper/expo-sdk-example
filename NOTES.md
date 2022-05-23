# Notes

## Installing Drawer Navigator

1. Install the dependencies

   ```
   $ npm install @react-navigation/drawer
   $ expo install react-native-gesture-handler react-native-reanimated
   ```

1. Import `'react-native-gesture-handler'` in your **App.js**

   ```js
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
   ```

1. Add Reanimated's babel plugin to your **babel.config.js**

   ```js
   module.exports = function (api) {
     api.cache(true);
     return {
       plugins: ['react-native-reanimated/plugin'],
       presets: ['babel-preset-expo']
     };
   };
   ```

[Source](https://reactnavigation.org/docs/drawer-navigator#installation)
