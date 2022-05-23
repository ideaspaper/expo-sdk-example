import { createDrawerNavigator } from '@react-navigation/drawer';
import CameraScreen from '../screens/CameraScreen';
import MagnetometerScreen from '../screens/MagnetometerScreen';

const AppDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Camera" component={CameraScreen} />
      <Drawer.Screen name="Magnetometer" component={MagnetometerScreen} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
