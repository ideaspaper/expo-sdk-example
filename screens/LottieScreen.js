import { useFocusEffect } from '@react-navigation/native';
import { Box, Button, FormControl, Input, Stack, Text, View } from 'native-base';
import { useCallback, useRef } from 'react';
import LottieView from 'lottie-react-native';

const LottieScreen = () => {
  const animationConfetti = useRef(null);
  const animationHello = useRef(null);

  useFocusEffect(
    useCallback(() => {
      animationHello.current.play();
    }, [animationHello])
  );

  return (
    <Box flex="1">
      <Box flex="1">
        <LottieView
          loop={false}
          ref={animationConfetti}
          source={require('./../assets/confetti.json')}
        />
        <LottieView loop={false} ref={animationHello} source={require('./../assets/hello.json')} />
        <FormControl p="5" style={{ zIndex: 1 }} flex="1">
          <Stack flex="1" space="5" justifyContent="space-between">
            <Box>
              <Stack>
                <FormControl.Label>Username</FormControl.Label>
                <Input type="text" variant="underlined" p={2} placeholder="Username" />
              </Stack>
              <Stack>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" variant="underlined" p={2} placeholder="Password" />
              </Stack>
            </Box>
            <Button
              onPress={() => {
                animationConfetti.current?.reset();
                animationConfetti.current?.play();
              }}
            >
              Submit
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
};

export default LottieScreen;
