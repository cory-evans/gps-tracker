import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { Button } from '../../components/Elements/Button';
import { Input } from '../../components/Elements/Input';
import DeviceLayout from '../../components/Layout/pages/DeviceLayout';
import { trpc } from '../../utils/trpc';

const Home: NextPage = () => {
  const [newDeviceName, setNewDeviceName] = useState('');
  const mutation = trpc.useMutation(['devices.addDevice']);

  const onClick = () => {
    mutation.mutate({ name: newDeviceName });
    setNewDeviceName('');
  };
  return (
    <>
      <Head>
        <title>Register a device</title>
      </Head>
      <DeviceLayout>
        <div className="p-4">
          <div className="flex space-x-2 items-cenrter">
            <Input value={newDeviceName} onChange={(e) => setNewDeviceName(e.target.value)} />
            <Button onClick={onClick}>Click me</Button>
          </div>

          {mutation.error && mutation.error.message}
        </div>
      </DeviceLayout>
    </>
  );
};

export default Home;
