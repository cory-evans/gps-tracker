import type { ReactNode } from 'react';
import MainLayout from '../MainLayout';
import { Sidebar } from '../Sidebar';

const DeviceLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MainLayout>
      <div className="flex flex-1 h-full">
        <Sidebar title="Manage Devices" divider={true}>
          <Sidebar.NavLink to="/devices/manage">My Devices</Sidebar.NavLink>
          <Sidebar.NavLink to="/devices/add">Register New Device</Sidebar.NavLink>
        </Sidebar>
        <div className="flex-1">{children}</div>
      </div>
    </MainLayout>
  );
};

export default DeviceLayout;
