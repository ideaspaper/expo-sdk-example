import { Box } from 'native-base';
import { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import PermissionErrorPage from '../components/PermissionErrorPage';
import PagerView from 'react-native-pager-view';
import LocationCard from '../components/LocationCard';

const MapScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [location, setLocation] = useState(null);
  const mapContainer = useRef(null);

  const markers = [
    {
      id: 1,
      latitude: -7.334,
      longitude: 112.79,
      address: 'Jl. Somewhere, Surabaya',
      title: 'A-Shop',
      description: "Acong's Shop",
      longDescription: 'The main business of this shop is to sell high quality sporting goods'
    },
    {
      id: 2,
      latitude: -7.339,
      longitude: 112.8,
      address: 'Jl. Someplace, Surabaya',
      title: 'D-Shop',
      description: "Djoko's Shop",
      longDescription: 'The main business of this shop is to sell delicious food'
    },
    {
      id: 3,
      latitude: -7.333,
      longitude: 112.8,
      address: 'Jl. That Place, Surabaya',
      title: 'S-Shop',
      description: "Sitorus's Shop",
      longDescription: 'The main business of this shop is to sell high quality musical instruments'
    }
  ];

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setHasPermission(status === 'granted');
      setLocation(await Location.getCurrentPositionAsync());
    })();
  });

  const handleOnPageSelected = (event) => {
    const markerIndex = event.nativeEvent.position;
    mapContainer.current.animateToRegion(
      {
        latitude: markers[markerIndex].latitude,
        longitude: markers[markerIndex].longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      },
      1000
    );
  };

  return (
    <>
      {!hasPermission && <PermissionErrorPage />}
      {hasPermission && (
        <Box flex="1">
          <MapView
            ref={mapContainer}
            style={{ flex: 1 }}
            showsUserLocation={true}
            showsCompass={true}
            userInterfaceStyle="dark"
            initialRegion={
              location && {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
              }
            }
          >
            {markers.map((marker) => {
              return (
                <Marker
                  key={marker.id}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude
                  }}
                  title={marker.title}
                  description={marker.description}
                />
              );
            })}
          </MapView>
          <PagerView style={{ flex: 1 }} initialPage={0} onPageSelected={handleOnPageSelected}>
            {markers.map((marker) => {
              return (
                <View key={marker.id} style={{ justifyContent: 'center' }}>
                  <LocationCard location={marker} />
                </View>
              );
            })}
          </PagerView>
        </Box>
      )}
    </>
  );
};

export default MapScreen;
