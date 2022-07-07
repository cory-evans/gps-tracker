import type { NextPage } from 'next';
import Head from 'next/head';
import SettingsLayout from '../../components/Layout/pages/SettingsLayout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GPS Tracker | Settings</title>
      </Head>
      <SettingsLayout>
        <div className="p-4 flex-1">
          <div className="mt-4 sm:mt-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold">Swagger</h1>
          </div>
        </div>
      </SettingsLayout>
    </>
  );
};

export default Home;
