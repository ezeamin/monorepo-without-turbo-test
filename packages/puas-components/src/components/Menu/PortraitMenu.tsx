import { DTI, DTI_LIST } from 'dti';

import modules from '../../data/modules';
import options from '../../data/options';
import ProfileAvatar from '../ProfileAvatar';
import ThemeToggler from '../ThemeToggler';
import AccountButton from './AccountButton';
import LogoutButton from './LogoutButton';
import MenuModuleButton from './MenuModuleButton';
import MenuOptionButton from './MenuOptionButton';
import { BiMenuAltRight } from 'react-icons/bi';
import { BsXLg } from 'react-icons/bs';
import { Drawer } from 'vaul';

const PortraitMenu = (): JSX.Element => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button color="btn-ghost" type="button">
          <BiMenuAltRight size="3em" />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0 z-50">
          <div className="bg-white dark:bg-primary duration-300 rounded-t-[10px] flex-1 p-4">
            <div className="mx-auto w-12 h-1 flex-shrink-0 rounded-full bg-zinc-300 mb-4" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="flex font-medium gap-x-4 items-center mb-4 text-center w-full">
                {/* Avatar */}
                <ProfileAvatar />
                {/* Boton de Cerrar */}
                <Drawer.Close
                  className="ms-auto p-3 rounded-full shadow"
                  data-testid={DTI(DTI_LIST.BUTTON('close'))}
                >
                  <BsXLg size="1.5em" />
                </Drawer.Close>
              </Drawer.Title>
              {/* Botones de los Modulos */}
              {modules.map((el) => (
                <MenuModuleButton el={el} key={el.id} open />
              ))}
            </div>
          </div>
          <div className="bg-white border-t border-zinc-200 dark:bg-primary duration-400 mt-auto p-4">
            <div className="flex gap-4 justify-center max-w-md mx-auto">
              {/* Botones de las Opciones */}
              {options.map((el) => (
                <MenuOptionButton el={el} key={el.id} />
              ))}
            </div>
            <div className="flex gap-4 justify-center max-w-md mx-auto mb-5">
              {/* Boton para Cuenta */}
              <AccountButton />
              {/* Boton para el Tema */}
              <ThemeToggler className="bg-sky-100 dark:bg-neutral duration-500 flex gap-x-4 items-center px-4 rounded shadow text-center" />
              {/* Boton para Cerrar Sesion */}
              <LogoutButton className="px-4" open />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default PortraitMenu;
