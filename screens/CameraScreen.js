import { Box, ScrollView, Text, Button, VStack, Icon } from 'native-base';
import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import PermissionErrorPage from '../components/PermissionErrorPage';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [show, setShow] = useState(false);
  const [resetCamera, setResetCamera] = useState(false);
  const [qrResult, setQrResult] = useState({});

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setShow(true);
      return () => {
        setShow(false);
      };
    })
  );

  const handleOnBarCodeScanned = (result) => {
    setQrResult(result);
  };

  const handlePressReset = () => {
    setQrResult({});
    setResetCamera(!resetCamera);
  };

  return (
    <>
      {!hasPermission && <PermissionErrorPage />}
      {hasPermission && show && (
        <Box flex="1">
          <Box flex="4" px="3" pt="3">
            <Camera
              key={resetCamera}
              style={{ flex: 1 }}
              type={CameraType.back}
              ratio="4:3"
              barCodeScannerSettings={{ barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr] }}
              onBarCodeScanned={handleOnBarCodeScanned}
            />
          </Box>
          <Box flex="3">
            <Box m="3" flex="1">
              <VStack flex="1" space="3">
                <ScrollView borderWidth="1" borderColor="gray.400" borderRadius="md" mb="3">
                  <Text color="black" m="2" selectable>
                    {qrResult.data?.trim() || 'No result'}
                  </Text>
                </ScrollView>
              </VStack>
              <Button
                mx="16"
                leftIcon={<Icon as={Ionicons} name="search-circle" size="xl" />}
                onPress={handlePressReset}
              >
                RESCAN
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CameraScreen;
