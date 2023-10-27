import { cn } from 'utilities';

import { DTI, DTI_LIST } from 'dti';

import { FiLogOut } from 'react-icons/fi';

import { type LogoutButtonProps } from '../interface';

const LogoutButton = (props: LogoutButtonProps): JSX.Element => {
  // Tomo los props
  const { className, open = true } = props;

  // Logout
  const handleLogout = (): void => {
    // console.log('LOGOUT');
  };

  // Renderizo
  return (
    <button
      className={cn(
        'bg-red-100 dark:bg-error duration-300 gap-x-4 hover:bg-red-200 hover:dark:bg-red-700 inline-block items-center py-2 rounded shadow text-center tooltip tooltip-right',
        className
      )}
      data-testid={DTI(DTI_LIST.BUTTON('logout'))}
      data-tip={!open ? 'Cerrar Sesión' : null}
      onClick={handleLogout}
      type="button"
    >
      <FiLogOut
        className="inline-block text-xl"
        data-testid={DTI(DTI_LIST.BUTTON('logout-icon'))}
      />
      <span
        className={`inline-block ml-2 origin-left ${
          !open ? 'delay-0 scale-0' : ''
        } ${open ? 'delay-100 duration-200' : ''}`}
      >
        Cerrar Sesión
      </span>
    </button>
  );
};

export default LogoutButton;
