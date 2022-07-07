import type { NextPage } from 'next';
import Head from 'next/head';
import DeviceLayout from '../../components/Layout/pages/DeviceLayout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register a device</title>
      </Head>
      <DeviceLayout>{null}</DeviceLayout>
    </>
  );
};

export default Home;
