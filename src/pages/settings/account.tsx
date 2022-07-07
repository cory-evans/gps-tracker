import type { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import { Button } from '../../components/Elements/Button';
import { Input } from '../../components/Elements/Input';
import SettingsLayout from '../../components/Layout/pages/SettingsLayout';
import { trpc } from '../../utils/trpc';

const Home: NextPage = () => {
  const user = trpc.useQuery(['auth.getUserInfo']);

  if (!user || !user.data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>GPS Tracker | Settings</title>
      </Head>
      <SettingsLayout>
        <div className="p-4 flex-1">
          <div className="mt-4 sm:mt-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold">Account</h1>

            <div className="my-4">
              <h2 className="text-xl font-semibold my-2">Profile</h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="ml-2 text-gray-600 text-sm font-semibold">Name</label>
                  <Input type="text" value={user.data.name as string} />
                </div>
              </div>
            </div>

            <div className="my-4">
              <h2 className="text-xl font-semibold my-2">Contact Information</h2>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col">
                  <label className="ml-2 text-gray-600 text-sm font-semibold">Email Address</label>
                  <Input type="email" value={user.data.email as string} disabled />
                </div>
                <div className="flex flex-col">
                  <label className="ml-2 text-gray-600 text-sm font-semibold">Phone Number</label>
                  <Input type="tel" />
                </div>
              </div>
            </div>

            <hr className="my-8" />

            <div className="flex items-center justify-end space-x-2">
              <Button variant="inverse">Cancel</Button>
              <Button>Save</Button>
            </div>
          </div>
        </div>
      </SettingsLayout>
    </>
  );
};

export default Home;
