import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import MainLayout from '../components/Layout/MainLayout';
import { Sidebar } from '../components/Layout/Sidebar';
import { Map as MapComponent } from '../components/Map/Map';

const Map: NextPage = () => {
  const MapWithNoSSR = dynamic(() => import('../components/Map/Map'), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>Map</title>
      </Head>
      <MainLayout>
        <Sidebar title="Map">
          <Sidebar.Entry>Epic</Sidebar.Entry>
        </Sidebar>
        <MapWithNoSSR />
      </MainLayout>
    </>
  );
};

export default Map;
