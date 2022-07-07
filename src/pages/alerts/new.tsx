import type { NextPage } from 'next';
import Head from 'next/head';
import AlertsLayout from '../../components/Layout/pages/AlertsLayout';

const NewAlertPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alerts</title>
      </Head>
      <AlertsLayout>{null}</AlertsLayout>
    </>
  );
};

export default NewAlertPage;
