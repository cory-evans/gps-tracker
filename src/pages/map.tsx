import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState, useMemo } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { Sidebar } from '../components/Layout/Sidebar';
import { trpc } from '../utils/trpc';

import { Map as LMap } from 'leaflet';
import clsx from 'clsx';

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
        <div className="flex flex-1 h-full">
          <Sidebar title="Map">
            {devices.data?.map((device, index) => {
              return (
                <Sidebar.Entry
                  key={index}
                  onClick={() => deviceEntryClick(device.id)}
                  className={clsx('p-2', 'cursor-pointer hover:bg-primary-100')}
                >
                  {device.name}
                </Sidebar.Entry>
              );
            })}
          </Sidebar>
          <MapWithNoSSR setMapRef={setMap} />
        </div>
      </MainLayout>
    </>
  );
};

export default Map;
