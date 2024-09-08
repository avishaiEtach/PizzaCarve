import { useJsApiLoader } from "@react-google-maps/api";

export const useGoogleMap = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 40.705736,
    lng: -74.0042361,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAP_API}`,
    language: "en",
  });

  const mapStyle = [
    {
      stylers: [
        {
          hue: "#ff1a00",
        },
        {
          invert_lightness: true,
        },
        {
          saturation: -100,
        },
        {
          lightness: 33,
        },
        {
          gamma: 0.5,
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#2D333C",
        },
      ],
    },
  ];

  return { containerStyle, center, isLoaded, mapStyle };
};
