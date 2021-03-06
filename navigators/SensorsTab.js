import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MagnetometerScreen from '../screens/MagnetometerScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccelerometerScreen from '../screens/AccelerometerScreen';

const SensorsTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Magnetometer':
                iconName = focused ? 'compass' : 'compass-outline';
                break;
              case 'Accelerometer':
                iconName = focused ? 'game-controller' : 'game-controller-outline';
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        };
      }}
    >
      <Tab.Screen name="Magnetometer" component={MagnetometerScreen} />
      <Tab.Screen name="Accelerometer" component={AccelerometerScreen} />
    </Tab.Navigator>
  );
};

export default SensorsTab;
