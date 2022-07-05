import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '../../components/Layout/MainLayout';
import { trpc } from '../../utils/trpc';

const Home: NextPage = () => {
  const devices = trpc.useQuery(['devices.getDevices']);
  return (
    <>
      <Head>
        <title>Manage Devices</title>
      </Head>
      <MainLayout>
        <div>
          <pre>{JSON.stringify(devices.data, undefined, 4)}</pre>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
