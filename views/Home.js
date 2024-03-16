import { Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef} from 'react';

import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import {MaterialIcons} from '@expo/vector-icons';

import { css } from '../assets/css/Css';
import config from '../config/index.json';

export default function Home(props) {
  const mapEl = useRef(null);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(null);
  const [price, setPrice] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const getLocationPermission = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          throw new Error('Location permission not granted');
        }

        const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        setOrigin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.000922,
          longitudeDelta: 0.000421,
        });
      } catch (error) {
        console.error('Error getting location:', error.message);
      }
    };

    getLocationPermission();
  }, []);

  return (
    <View style={css.container}>
      <MapView 
        style={css.map} 
        initialRegion={origin} 
        showsUserLocation={true} 
        zoomEnabled={false}
        loadingEnabled={true}
        ref={mapEl}
        >
        
        {destination && 
         <MapViewDirections 
          origin={origin} 
          destination={destination} 
          apikey={config.googleApi}
          strokeWidth={3}
          onReady={result => {
              setDistance(result.distance);
              setPrice(result.distance * 3);
              mapEl.current.fitToCoordinates(
                result.coordinates, {edgePadding: {top: 50, bottom: 50, left: 50, right: 50}}
              );
            }}
          />}

      </MapView>

      <View style={css.search}>
          <GooglePlacesAutocomplete
          placeholder='Para onde vamos?'
          onPress={(data, details = null) => {
            setAddress(data.description);
            setDestination({
              latitude: details.geometry.location.lat, 
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.000922,
              longitudeDelta: 0.000421,
            });
          }}
          query={{
            key: config.googleApi,
            language: 'pt-br',
          }}
          fetchDetails={true}
          styles={{
            listView: {backgroundColor: '#fff', zIndex: 10},
            container: {position: 'absolute', width: '100%'}
          }}
        />
        {distance && (
        <View style={css.distance}> 
          <Text style={css.distance_text}>Distância: {distance.toFixed(2)}Km</Text>
          <TouchableOpacity style={css.price} onPress={() => props.navigation.navigate('Checkout', {price: price.toFixed(2), address: address})}>
            <Text style={css.price_text}><MaterialIcons name="payment" size={20} color="white"/> Pagar R$ {price.toFixed(2)}</Text>
          </TouchableOpacity>
        </View>
        )}
      </View> 
    </View>
  );
}
