import type { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import { Button } from '../components/Elements/Button';
import MainLayout from '../components/Layout/MainLayout';

const Home: NextPage = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <h1>Not signed in</h1>
        <Button onClick={() => signIn()}>Sign In</Button>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Create T3 App</title>
      </Head>
      <MainLayout>
        <div>
          <pre>{JSON.stringify(session)}</pre>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
