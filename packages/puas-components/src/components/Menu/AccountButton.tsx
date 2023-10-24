import { DTI, DTI_LIST } from 'dti';

const AccountButton = (): JSX.Element => {
  return (
    <button
      className="bg-sky-100 dark:bg-neutral duration-500 flex gap-x-4 items-center mb-5 px-4 rounded shadow text-center"
      data-testid={DTI(DTI_LIST.BUTTON('my-account'))}
      onClick={() => {}}
      type="button"
    >
      <span className="inline-block">Mi Cuenta</span>
    </button>
  );
};

export default AccountButton;
