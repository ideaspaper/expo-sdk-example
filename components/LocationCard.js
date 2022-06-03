import { Box, Divider, Heading, Image, VStack, Text } from 'native-base';

const LocationCard = ({ location }) => {
  return (
    <Box
      flex="1"
      m="5"
      justifyContent="center"
      borderWidth="1"
      borderColor="gray.400"
      borderRadius="md"
    >
      <VStack px="4" space="4">
        <Box pb="4">
          <Image
            source={{
              uri: 'https://wallpaperaccess.com/full/317501.jpg'
            }}
            alt="Alternate Text"
            size="xl"
          />
        </Box>
        <Box>
          <Heading size="md">{location.description}</Heading>
        </Box>
        <Box>
          <Text italic>{location.address}</Text>
        </Box>
        <Box>
          <Text>{location.longDescription}</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default LocationCard;
