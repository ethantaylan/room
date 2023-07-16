import { Fragment, PropsWithChildren } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export interface ItemsProps {
  href?: string;
  title: string;
  onDisconnect?: () => void;
}

export interface DropdownProps {
  items: ItemsProps[];
}

export const Dropdown: React.FC<PropsWithChildren<DropdownProps>> = ({
  children,
  items
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>{children}</Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item: ItemsProps, index: number) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <NavLink
                    onClick={item.onDisconnect}
                    to={item.href || ''}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {item.title}
                  </NavLink>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
