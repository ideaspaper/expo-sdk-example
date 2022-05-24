import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from '../screens/AboutScreen';
import CameraScreen from '../screens/CameraScreen';
import LottieScreen from '../screens/LottieScreen';
import SensorsTab from './SensorsTab';

const AppDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="SensorsTab" options={{ title: 'Sensors' }} component={SensorsTab} />
      <Drawer.Screen name="Camera" component={CameraScreen} />
      <Drawer.Screen name="Lottie" component={LottieScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
