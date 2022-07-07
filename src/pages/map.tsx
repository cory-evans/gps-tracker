import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState, useMemo } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { Sidebar } from '../components/Layout/Sidebar';
import { trpc } from '../utils/trpc';

import { Map as LMap } from 'leaflet';

const Map: NextPage = () => {
  const devices = trpc.useQuery(['devices.getDevices']);
  const positions = trpc.useQuery(['position.latest']);
  const [map, setMap] = useState<LMap | null>(null);

  const MapWithNoSSR = useMemo(
    () =>
      dynamic(() => import('../components/Map/Map'), {
        ssr: false,
      }),
    []
  );
  const deviceEntryClick = (deviceId: string) => {
    const pos = positions?.data?.find((v) => v.deviceID === deviceId);

    if (!pos) return;

    if (map) {
      map.flyTo([pos.lat, pos.lon]);
    }
  };
  return (
    <>
      <Head>
        <title>Map</title>
      </Head>
      <MainLayout>
        <Sidebar title="Map">
          {devices.data?.map((device, index) => {
            return (
              <Sidebar.Entry key={index} onClick={() => deviceEntryClick(device.id)}>
                {device.name}
              </Sidebar.Entry>
            );
          })}
        </Sidebar>
        <MapWithNoSSR setMapRef={setMap} />
      </MainLayout>
    </>
  );
};

export default Map;
