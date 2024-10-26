"use client";
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api"; // Import Marker component

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.7594235,
  lng: -73.9850933,
};

function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-google-maps-script", // Ensure correct ID
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  // No need for `map` state (unless you need direct map interaction)

  const onLoad = React.useCallback(
    (mapInstance: google.maps.Map) => {
      const bounds = new window.google.maps.LatLngBounds(center);
      mapInstance.fitBounds(bounds);
    },
    [] // Empty dependency array to prevent unnecessary re-renders
  );

  const OPTIONS = {
    minZoom: 1,
    maxZoom: 18,
  }



  return isLoaded ? (
      <div className="w-full h-full grayscale hover:grayscale-0 transition duration-500">
<GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            onLoad={onLoad}
            zoom={1000}
            options={OPTIONS}
            className="grayscale"
          >
            {/* Child components, such as markers, info windows, etc. */}
            <Marker position={center} title="Your Location" /> {/* Basic marker example */}
      </GoogleMap>
      </div>
      
    
  ) : (
    <></> // Display a loading indicator or placeholder while loading
  );
}

export default React.memo(GoogleMaps);