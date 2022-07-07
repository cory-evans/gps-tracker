import { Dispatch, SetStateAction } from 'react';
import * as ReactDOMServer from 'react-dom/server';

import { divIcon, Map as LMap, Point } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { trpc } from '../../utils/trpc';
import { LocationMarkerIcon } from '@heroicons/react/outline';

const markerIcon = divIcon({
  className: 'bg-transperant border-none',
  html: ReactDOMServer.renderToString(
    <LocationMarkerIcon className="fill-blue-400 stroke-blue-600" />
  ),
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const popupOffset = new Point(0, -20);

interface MapProps {
  setMapRef: Dispatch<SetStateAction<LMap | null>>;
}

export const Map = ({ setMapRef }: MapProps) => {
  const positions = trpc.useQuery(['position.latest']);

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
      {positions?.data?.map((pos, index) => {
        return (
          <Marker key={index} position={[pos.lat, pos.lon]} icon={markerIcon}>
            <Popup offset={popupOffset}>
              <div className="flex flex-col items-center">
                <span>{pos.device.name}</span>
                <span>{pos.createdAt.toLocaleString()}</span>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
