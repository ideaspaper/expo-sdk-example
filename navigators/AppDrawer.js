import { createDrawerNavigator } from '@react-navigation/drawer';
import CameraScreen from '../screens/CameraScreen';
import SensorsTab from './SensorsTab';

const AppDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="SensorsTab" options={{ title: 'Sensors' }} component={SensorsTab} />
      <Drawer.Screen name="Camera" component={CameraScreen} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
