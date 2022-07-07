import type { NextPage } from 'next';
import Head from 'next/head';
import DeviceLayout from '../../components/Layout/pages/DeviceLayout';
import { trpc } from '../../utils/trpc';

const Home: NextPage = () => {
  const devices = trpc.useQuery(['devices.getDevices']);
  const positions = trpc.useQuery(['position.latest']);

  return (
    <>
      <Head>
        <title>Manage Devices</title>
      </Head>
      <DeviceLayout>
        <div className="flex-1 flex flex-col items-center">
          <ul className="flex flex-col space-y-2">
            {devices.data?.map((device, index) => {
              const pos = positions?.data?.find((v) => v.deviceID === device.id);
              var lastSeen = 'never';
              if (pos) {
                lastSeen = pos.createdAt.toLocaleString();
              }

              return (
                <li key={index} className="bg-white rounded shadow p-4 text-gray-600">
                  <div className="flex items-center justify-between ">
                    <div className="flex flex-col">
                      <h3 className="font-bold">{device.name}</h3>
                      <span className="text-gray-600 text-sm">ID: {device.id}</span>
                      <span className="text-gray-600 text-sm">Last seen: {lastSeen}</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </DeviceLayout>
    </>
  );
};

export default Home;
