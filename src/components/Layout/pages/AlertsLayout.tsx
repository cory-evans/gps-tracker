import type { ReactNode } from 'react';
import MainLayout from '../MainLayout';
import { Sidebar } from '../Sidebar';

const AlertsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MainLayout>
      <div className="flex flex-1 h-full">
        <Sidebar title="Manage Alerts" divider={true}>
          <Sidebar.NavLink to="/alerts/view">View Alerts</Sidebar.NavLink>
          <Sidebar.NavLink to="/alerts/new">Create new alert</Sidebar.NavLink>
        </Sidebar>
        <div className="flex-1">{children}</div>
      </div>
    </MainLayout>
  );
};

export default AlertsLayout;
