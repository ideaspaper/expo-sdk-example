import { Text, Box, HStack, VStack } from 'native-base';
import { Accelerometer } from 'expo-sensors';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';

const AccelerometerScreen = () => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  Accelerometer.setUpdateInterval(100);

  const subscribe = () => {
    Accelerometer.addListener((result) => {
      setData(result);
    });
  };

  const unsubscribe = () => {
    Accelerometer.removeAllListeners();
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

  return (
    <Box flex="1">
      <VStack flex="1" justifyContent="center" space="2" alignItems="center" m="16">
        <HStack>
          <Text fontSize="2xl" fontWeight="bold">
            X
          </Text>
          <Text fontSize="xl" flex="1" textAlign="right">
            {x}
          </Text>
        </HStack>
        <HStack>
          <Text fontSize="2xl" fontWeight="bold">
            Y
          </Text>
          <Text fontSize="xl" flex="1" textAlign="right">
            {y}
          </Text>
        </HStack>
        <HStack>
          <Text fontSize="2xl" fontWeight="bold">
            Z
          </Text>
          <Text fontSize="xl" flex="1" textAlign="right">
            {z}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AccelerometerScreen;
