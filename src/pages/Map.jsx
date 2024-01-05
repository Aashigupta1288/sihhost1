import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import custommarker from "./output-onlinepngtools (1).png";
import { useEffect, useRef, useState } from "react";
import "./Map.css";
import Navbar from "./Navbar";

const Map = (props) => {
  const { isLoaded } = props;
  const [selectedMarker, setSelectedMarker] = useState("");

  const containerStyle = {
    width: "100vw",
    height: "100vh",
  };
  const center = {
    lat: 30.987320,
    lng: 77.028610,
  };

  const markers = [
    {
      name: "KANDAGHAT",
      status: "CODE = 'FIRE'",
      location: {
        lat: 30.9702,
        lng: 77.1054,
      },
    },
    {
      name: "SOLAN",
      status: "CODE = 'LANDSLIDE'",
      location: {
        lat: 30.9084,
        lng: 77.0999,
      },
    },
    {
      name: "SHIMLA",
      status: "CODE = 'LANDSLIDE'",
      location: {
        lat: 31.1048,
        lng: 77.1734,
      },
    },
    {
      name: "Chandigarh",
      status: "CODE = 'FIRE'",
      location: {
        lat: 30.7333,
        lng: 76.7794,
      },
    },
    {
      name: "Dehradun",
      status: "CODE = 'FLOOD'",
      location: {
        lat: 30.267,
        lng: 78.0909,
      },
    },
  ];

  const [changeMyTypeID, setToggleChangeMyTypeID] = useState(1);
  const mapRef = useRef(null);

  const onMapLoad = (mapInstance) => {
    mapRef.current = mapInstance;
  };
  console.log("mapRefCurrent", mapRef.current);

  const MapType = {
    roadmap: "roadmap",
    satellite: "satellite",
    hybrid: "hybrid",
    terrain: "terrain",
  };
  const handleMapToggle = () => {
    if (changeMyTypeID === 0) {
      setToggleChangeMyTypeID(1);
    } else if (changeMyTypeID === 1) {
      setToggleChangeMyTypeID(2);
    } else if (changeMyTypeID === 2) {
      setToggleChangeMyTypeID(3);
    } else if (changeMyTypeID === 3) {
      setToggleChangeMyTypeID(4);
    } else if (changeMyTypeID === 4) {
      setToggleChangeMyTypeID(1);
    }
  };

 
  return (
    
    isLoaded && (
      <>
      
    
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onMapLoad}
        >
          {markers.map((marker) => {
            return (
              <div key={marker.name}>
                <Marker
                  position={marker.location}
                  options={{
                    icon: custommarker,
                    scaledSize: new window.google.maps.Size(-25, -25)
                  }}
                  onClick={() => {
                    setSelectedMarker(marker);
                  }}
                />
              </div>
            );
          })}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.location}
              options={{
                pixelOffset: new window.google.maps.Size(0, -40),
              }}
            >
              <div>
                <h1>location -{selectedMarker.name}</h1>
                <h1>status - {selectedMarker.status}</h1>
                <button onClick={() => setSelectedMarker("")}>close</button>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </>
    )
  );
};

export default Map;