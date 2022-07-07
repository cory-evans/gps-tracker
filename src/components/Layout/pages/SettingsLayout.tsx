import { BellIcon, DocumentTextIcon, KeyIcon, UserIcon } from '@heroicons/react/outline';
import type { ReactNode } from 'react';
import MainLayout from '../MainLayout';
import { Sidebar } from '../Sidebar';

const SettingsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MainLayout>
      <div className="flex flex-1 h-full">
        <Sidebar title="Settings" divider={true}>
          <Sidebar.NavLink to="/settings/account">
            <div className="flex items-center space-x-3 text-gray-600">
              <UserIcon className="h-8 w-8" />
              <div>
                <h2 className="font-semibold text-black">Account</h2>
                <p>Manage your user account information</p>
              </div>
            </div>
          </Sidebar.NavLink>
          <Sidebar.NavLink to="/settings/notifications">
            <div className="flex items-center space-x-3 text-gray-600">
              <BellIcon className="h-8 w-8" />
              <div>
                <h2 className="font-semibold text-black">Notifications</h2>
                <p>Manage your notification preferences</p>
              </div>
            </div>
          </Sidebar.NavLink>
          <Sidebar.NavLink to="/settings/security">
            <div className="flex items-center space-x-3 text-gray-600">
              <KeyIcon className="h-8 w-8" />
              <div>
                <h2 className="font-semibold text-black">Security</h2>
                <p>Manage your sessions and security log</p>
              </div>
            </div>
          </Sidebar.NavLink>
          <div className="flex-1"></div>
          <Sidebar.NavLink to="/settings/swagger">
            <div className="flex items-center space-x-3 text-gray-600">
              <DocumentTextIcon className="h-8 w-8" />
              <div>
                <h2 className="font-semibold text-black">API Documentation</h2>
                <p>View OpenAPI specifications with SwaggerUI</p>
              </div>
            </div>
          </Sidebar.NavLink>
        </Sidebar>
        <div className="flex-1">{children}</div>
      </div>
    </MainLayout>
  );
};

export default SettingsLayout;
