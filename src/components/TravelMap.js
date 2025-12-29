import React, { useEffect, useState, useRef } from 'react';
import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import { ScatterplotLayer, TextLayer, PathLayer } from '@deck.gl/layers';
import travelData from '../configs/travelData';
import customMapStyle from '../configs/customMapData.json';

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Replace with your Google Maps API key


const INITIAL_VIEW_STATE = {
  longitude: 0, // Center of the world
  latitude: 0,  // Center of the world
  zoom: 2,      // Zoom level to show the whole world
  pitch: 0,     // No tilt
  bearing: 0,   // No rotation
};

export default function TravelMap() {
  const mapRef = useRef(null); // Reference to the map container
  const [googleLoaded, setGoogleLoaded] = useState(false); // Track if Google Maps is loaded
  const [year, setYear] = useState(2017); // Current year for the animation
  const [visibleTrips, setVisibleTrips] = useState([]);
  const [animationProgress, setAnimationProgress] = useState(0); // Track animation progress

  // Dynamically load the Google Maps script
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
        script.async = true;
        script.onload = () => setGoogleLoaded(true);
        document.head.appendChild(script);
      } else {
        setGoogleLoaded(true);
      }
    };

    loadGoogleMapsScript();
  }, []);

  useEffect(() => {
    if (!googleLoaded || !mapRef.current) return;

    // Calculate the appropriate zoom level to fit the entire globe
    const calculateZoomLevel = (mapWidth) => {
        const WORLD_DIM = 256; // Base tile size in Google Maps
        const ZOOM_MAX = 21; // Maximum zoom level in Google Maps
        const zoom = Math.floor(Math.log2(mapWidth / WORLD_DIM));
        return Math.min(zoom, ZOOM_MAX);
    };

    // Get the map's width in pixels
    const mapWidth = mapRef.current.offsetWidth;
    const zoomLevel = calculateZoomLevel(mapWidth);

    // Initialize Google Maps
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: INITIAL_VIEW_STATE.latitude, lng: INITIAL_VIEW_STATE.longitude },
      zoom: zoomLevel,
      tilt: INITIAL_VIEW_STATE.pitch,
      heading: INITIAL_VIEW_STATE.bearing,
      mapTypeId: 'roadmap',
      styles: customMapStyle, // Apply the custom map style here
      disableDefaultUI: true, // Disable default UI controls
      draggable: false,       // Disable dragging
      scrollwheel: false,     // Disable scroll zoom
      disableDoubleClickZoom: true, // Disable double-click zoom
      keyboardShortcuts: false, // Disable keyboard shortcuts
      restriction: {
        latLngBounds: {
          north: 85, // Northernmost latitude
          south: -85, // Southernmost latitude
          west: -180, // Westernmost longitude
          east: 180, // Easternmost longitude
        },
        strictBounds: true, // Prevent the map from showing areas outside the bounds
      },
    });

    // Initialize Deck.gl overlay
    const overlay = new GoogleMapsOverlay({
      layers: [],
    });

    overlay.setMap(map);

    // Save the map instance for later use
    mapRef.current = { map, overlay };
  }, [googleLoaded]);

  useEffect(() => {
    // Update the year every 2 seconds
    const interval = setInterval(() => {
      setYear((prev) => (prev < 2025 ? prev + 1 : prev));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Filter trips based on the current year
    const filtered = travelData.filter(
      (trip) => parseInt(trip.from.split('-')[0]) <= year
    );
    setVisibleTrips(filtered);
  }, [year]);

  useEffect(() => {
    if (!mapRef.current || !mapRef.current.overlay) return;

    const { overlay } = mapRef.current;

    // Create Deck.gl layers
    const pointLayer = new ScatterplotLayer({
      id: 'scatterplot-layer',
      data: visibleTrips,
      getPosition: (d) => [d.longitude, d.latitude],
      getRadius: 50000 + Math.sin(animationProgress) * 10000, // Pulsing effect
      getFillColor: [255, 140, 0],
      radiusMinPixels: 5,
      radiusMaxPixels: 20,
      updateTriggers: {
        getRadius: animationProgress, // Trigger updates for pulsing effect
      },
    });

    const textLayer = new TextLayer({
      id: 'text-layer',
      data: visibleTrips,
      getPosition: (d) => [d.longitude, d.latitude],
      getText: (d) => `${d.city}, ${d.country}\n(${d.from.split('-')[0]})`, // Display country and year with a new line
      getSize: 10,
      getColor: [0, 0, 0], // Black text
      background: true,
      backgroundPadding: [4, 4], // Padding around the text
      getBackgroundColor: [255, 255, 255, 200], // White background with transparency
    });

    const pathLayer = new PathLayer({
      id: 'path-layer',
      data: visibleTrips.map((trip, idx, arr) => {
        if (idx === 0) return null;
        return {
          path: [
            [arr[idx - 1].longitude, arr[idx - 1].latitude],
            [trip.longitude, trip.latitude],
          ],
        };
      }).filter(Boolean),
      getPath: (d) => d.path,
      getColor: [173, 216, 230], // pastel blue
      getWidth: 4,
      widthMinPixels: 2,
      trailLength: 20, // Create a trailing effect
      currentTime: animationProgress, // Animate the trail
    });

    // Update the overlay with the new layers
    overlay.setProps({
      layers: [pointLayer, textLayer, pathLayer],
    });
  }, [visibleTrips, animationProgress]);
  useEffect(() => {
    let animationInterval = setInterval(() => {
      setAnimationProgress((prev) => {
        const nextValue = (prev + 1) % 1000; // Loop the animation
        return nextValue;
      });
    }, 50); // Adjust the speed of the animation
  
    // Cleanup function to clear the interval
    return () => {
      console.log('Clearing interval');
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div style={{ height: '50vh', width: '100%', position: 'relative' }}>
      {/* Map Container */}
      <div ref={mapRef} style={{ height: '100%', width: '100%' }} />

      {/* Year Counter */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '18px',
          fontWeight: 'bold',
        }}
      >
        Year: {year}
      </div>
    </div>
  );
}