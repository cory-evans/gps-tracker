import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../../components/Elements/Button';
import { ConfirmationDialog } from '../../components/Elements/ConfirmationDialog';
import DeviceLayout from '../../components/Layout/pages/DeviceLayout';
import { trpc } from '../../utils/trpc';

const Home: NextPage = () => {
  const devices = trpc.useQuery(['devices.getDevices']);
  const positions = trpc.useQuery(['position.latest']);
  const deleteDeviceMutation = trpc.useMutation(['devices.removeDevice']);

  const deleteDevice = (id: string) => {
    deleteDeviceMutation.mutate({ id });
    devices.refetch();
    positions.refetch();
  };

  return (
    <>
      <Head>
        <title>Manage Devices</title>
      </Head>
      <DeviceLayout>
        <div className="p-4 sm:max-w-4xl sm:mx-auto">
          <h2 className="text-xl font-semibold my-2">Devices</h2>
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
                  <div className="flex mt-4">
                    <ConfirmationDialog
                      icon="danger"
                      title={`Delete device "${device.name}"`}
                      body="Are you sure you want to delete this device?"
                      triggerButton={<Button variant="danger">Delete this device</Button>}
                      confirmButton={
                        <Button variant="danger" onClick={() => deleteDevice(device.id)}>
                          Delete
                        </Button>
                      }
                    />
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
