import { DTI, DTI_LIST } from 'dti';

const AccountButton = (): JSX.Element => {
  return (
    <button
      className="bg-sky-100 dark:bg-neutral duration-500 text-center px-4 rounded shadow"
      data-testid={DTI(DTI_LIST.BUTTON('my-account'))}
      onClick={() => {}}
      type="button"
    >
      <span className="inline-block">Mi Cuenta</span>
    </button>
  );
};

export default AccountButton;
