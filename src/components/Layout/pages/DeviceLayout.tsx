import type { ReactNode } from 'react';
import MainLayout from '../MainLayout';
import { Sidebar } from '../Sidebar';

const DeviceLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MainLayout>
      <Sidebar title="Manage Devices" divider={true}>
        <Sidebar.NavLink to="/devices/manage">My Devices</Sidebar.NavLink>
        <Sidebar.NavLink to="/devices/add">Register New Device</Sidebar.NavLink>
      </Sidebar>

      {children}
    </MainLayout>
  );
};

export default DeviceLayout;
