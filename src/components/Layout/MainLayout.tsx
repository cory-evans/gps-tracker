import { ReactNode } from 'react';
import Head from 'next/head';
import { Navigation } from './Navigation';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex overflow-hidden bg-gray-50">
        <Navigation />
        <main className="z-0 flex-1 relative overflow-y-auto focus:outline-none">{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
