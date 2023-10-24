import Image from 'next/image';
import Link from 'next/link';

import { DTI, DTI_LIST } from 'dti';

// @ts-expect-error - logo is not a component
import logo from 'images/logos/logo-144.png';

const LogoPjt = (): JSX.Element => {
  return (
    <Link data-testid={DTI(DTI_LIST.MENU.LINK(0))} href="/">
      <Image
        alt="Poder Judicial de Tucumán"
        className="bg-white border-none cursor-pointer mt-4 p-1 rounded-full shadow"
        data-testid={DTI(DTI_LIST.MENU.LOGO)}
        height={50}
        // DO NOT delete, it WILL throw an ESLint error
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- logo is not a component
        src={typeof logo === 'object' && 'src' in logo ? logo.src : ''}
        width={50}
      />
    </Link>
  );
};

export default LogoPjt;
