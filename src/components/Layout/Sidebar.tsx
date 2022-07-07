import clsx from 'clsx';
import Link from 'next/link';
import ActiveLink from '../Elements/ActiveLink';

type SidebarProps = {
  title: string;
  children: React.ReactNode;
  divider?: boolean;
};

export const Sidebar = ({ title, children, divider = false }: SidebarProps) => {
  return (
    <div className="h-full flex flex-col w-64">
      <div className="bg-white shadow z-[1] flex items-center h-16">
        <h1 className="text-xl font-semibold ml-2">{title}</h1>
      </div>
      <ul className={clsx('flex flex-col flex-1 bg-white', divider && 'divide-y')}>{children}</ul>
    </div>
  );
};

type SidebarEntryProps = {
  children: React.ReactNode;
} & React.ComponentProps<'li'>;

Sidebar.Entry = ({ children, ...props }: SidebarEntryProps) => {
  return <li {...props}>{children}</li>;
};

type SidebarNavLinkProps = {
  to: string;
} & React.ComponentProps<'li'>;

Sidebar.NavLink = ({ to, children, ...props }: SidebarNavLinkProps) => {
  return (
    <li {...props}>
      <ActiveLink href={to} activeClassName="bg-primary-100">
        <a className="block p-2">{children}</a>
      </ActiveLink>
    </li>
  );
};
