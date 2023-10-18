'use client';

import { DTI, DTI_LIST } from 'dti';

import IconButton from '../IconButton/IconButton';
import {
  MdChevronLeft,
  MdChevronRight,
  MdFirstPage,
  MdLastPage,
} from 'react-icons/md';

import type { PaginationPropsType } from './Pagination.types';

/**
 * A custom Pagination component.
 *
 * @param props - The props for the Pagination component.
 * @param count - Number of elements.
 * @param page - Current page.
 * @param rowsPerPage - Number of displayed elements.
 * @param onPageChange - Function to execute on click
 * @returns JSX.Element A custom combo box element.
 */

const Pagination = (props: PaginationPropsType): JSX.Element => {
  const { count = 0, onPageChange, page = 0, rowsPerPage = 10 } = props;

  // Functions
  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    onPageChange(event, 0);
  };
  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    onPageChange(event, page + 1);
  };
  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  // TODO: revisar hover modo oscuro

  return (
    <div className="flow-root w-full">
      <IconButton
        className="float-left hover:bg-slate-500 m-2"
        colorDark="dark:bg-slate-700"
        colorLight="bg-slate-600"
        disabled={page === 0}
        dti={DTI(DTI_LIST.BUTTON('first'))}
        iconComponent={<MdFirstPage color="#fff" />}
        label="Primera Página"
        onClick={handleFirstPageButtonClick}
      />
      <IconButton
        className="float-left hover:bg-slate-500 m-2"
        colorDark="dark:bg-slate-700"
        colorLight="bg-slate-600"
        disabled={page === 0}
        dti={DTI(DTI_LIST.BUTTON('prev'))}
        iconComponent={<MdChevronLeft color="#fff" />}
        label="Página Anterior"
        onClick={handleBackButtonClick}
      />
      <IconButton
        className="float-right hover:bg-slate-500 m-2"
        colorDark="dark:bg-slate-700"
        colorLight="bg-slate-600"
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        dti={DTI(DTI_LIST.BUTTON('last'))}
        iconComponent={<MdLastPage color="#fff" />}
        label="Última Página"
        onClick={handleLastPageButtonClick}
      />
      <IconButton
        className="float-right hover:bg-slate-500 m-2"
        colorDark="dark:bg-slate-700"
        colorLight="bg-slate-600"
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        dti={DTI(DTI_LIST.BUTTON('next'))}
        iconComponent={<MdChevronRight color="#fff" />}
        label="Próxima Página"
        onClick={handleNextButtonClick}
      />
    </div>
  );
};

export default Pagination;
