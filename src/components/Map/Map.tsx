import { Dispatch, SetStateAction } from 'react';
import { divIcon, Map as LMap, Point } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

interface MapProps {
  setMapRef: Dispatch<SetStateAction<LMap | null>>;
}

export const Map = ({ setMapRef }: MapProps) => {
  return (
    <MapContainer
      center={[-39.520397, 176.86227]}
      zoom={13}
      scrollWheelZoom={true}
      className="h-full w-full"
      ref={setMapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
