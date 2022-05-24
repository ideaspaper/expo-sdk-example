import { Text, Box, HStack } from 'native-base';
import { Magnetometer } from 'expo-sensors';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MagnetometerScreen = () => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  Magnetometer.setUpdateInterval(100);

  const subscribe = () => {
    Magnetometer.addListener((result) => {
      setData(result);
    });
  };

  const unsubscribe = () => {
    Magnetometer.removeAllListeners();
  };

  useFocusEffect(
    useCallback(() => {
      subscribe();
      return () => {
        unsubscribe();
      };
    }, [])
  );

  const { x, y, z } = data;
  const calculateDirection = (x, y, z) => {
    x = Math.round(x);
    y = Math.round(y);
    z = Math.round(z);
    if (y > 0) {
      return Math.round(90 - (Math.atan(x / y) * 180) / Math.PI);
    } else if (y < 0) {
      return Math.round(270 - (Math.atan(x / y) * 180) / Math.PI);
    } else if (x < 0) {
      return 180;
    } else {
      return 0;
    }
  };

  return (
    <Box flex="1">
      <Box flex="1" justifyContent="center" alignItems="center">
        <Text fontSize="2xl">N</Text>
        <HStack alignItems="center" justifyItems="space-between" space="4">
          <Text fontSize="2xl">W</Text>
          <Ionicons
            style={[
              {
                transform: [{ rotateZ: `${calculateDirection(x, y, z)}deg` }]
              }
            ]}
            name="arrow-up-outline"
            size={200}
          />
          <Text fontSize="2xl">E</Text>
        </HStack>
        <Text fontSize="2xl">S</Text>
      </Box>
    </Box>
  );
};

export default MagnetometerScreen;
