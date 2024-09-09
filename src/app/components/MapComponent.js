'use client';

// map script

import { useEffect, useRef } from 'react';
import L from 'leaflet';

export const MapComponent = ({ coordinates = [51.505, -0.09], zoom = 15 }) => {
  const mapRef = useRef(null); // Using useRef to store the map instance across renders

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current === null) {
      // Initialize the map only if it hasn't been initialized
      mapRef.current = L.map('map', {
        attributionControl: false,
      }).setView(coordinates, zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapRef.current);
    } else {
      // Update the view if the map is already initialized
      mapRef.current.setView(coordinates, zoom);
    }

    // Clean up the map instance on unmount
    return () => {
      if (mapRef.current !== null) {
        mapRef.current.remove();
        mapRef.current = null; // Reset map reference
      }
    };
  }, [coordinates, zoom]); // Re-run if coordinates or zoom changes

  // Function to handle map click and redirect to Google Maps
  const handleMapClick = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${coordinates[0]},${coordinates[1]}`;
    window.open(googleMapsUrl, '_blank'); // Opens Google Maps in a new tab or app
  };

  return (
    <div
      id="map"
      className="h-[30rem] w-full hoverable"
      onClick={handleMapClick} // Click event to open Google Maps
      style={{ cursor: 'pointer' }} // Optional: change cursor style to pointer to indicate it's clickable
    ></div>
  );
};
