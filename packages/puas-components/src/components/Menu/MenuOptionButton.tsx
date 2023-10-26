import Link from 'next/link';

import { DTI, DTI_LIST } from 'dti';

import { type MenuOptionButtonProps } from '../interface';

const MenuOptionButton = (props: MenuOptionButtonProps): JSX.Element => {
  // Tomo los props
  const { el } = props;

  // Renderizo
  return (
    <Link
      data-testid={DTI(DTI_LIST.MENU.LINK(el.id))}
      href={el.url}
      key={el.id}
    >
      <button
        className="bg-sky-100 dark:bg-neutral duration-500 flex gap-x-4 items-center h-10 mb-5 px-4 rounded shadow"
        data-testid={DTI(DTI_LIST.BUTTON(`module-${el.id}`))}
        type="button"
      >
        <span className="text-l">{el.description}</span>
      </button>
    </Link>
  );
};

export default MenuOptionButton;
