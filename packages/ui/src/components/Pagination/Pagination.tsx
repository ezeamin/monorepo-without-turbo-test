'use client';

import Button from '../Button/Button';

import { DTI, DTI_LIST } from 'dti';

import { MdChevronLeft, MdChevronRight, MdFirstPage, MdLastPage } from 'react-icons/md';

import type { PaginationPropsType } from './Pagination.types';

/**
 * A custom Pagination component.
 *
 * @param props - The props for the Pagination component.
 * @param count - Number of elements.
 * @param page - Current page.
 * @param rowsPerPage - Number of displayed elements.
 +
 * @returns JSX.Element A custom combo box element.
 */


const Pagination = (props: PaginationPropsType): JSX.Element => {
  const {
    count = 0, 
    page = 0, 
    rowsPerPage = 10
  } = props;


  // Functions
  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(event, 0);
  };
  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(event, page - 1);
  };
  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(event, page + 1);
  };
  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };


  // TODO: revisar hover modo oscuro

  return (
    <div
        className="flow-root w-full"
    >
      <Button
        aria-label = "Primera Página"
        className = "float-left m-2"
        colorDark = "dark:bg-transparent"
        colorLight = "bg-transparent"
        disabled = { page === 0 }
        dti = {DTI(DTI_LIST.BUTTON('first'))}
        onClick = { handleFirstPageButtonClick }
        outlineButton
        textColorDark = "dark:text-white"
        textColorLight = "text-black"
      >
        <MdFirstPage />
      </Button>
      <Button
        aria-label = "Página Anterior"
        className = "float-left m-2"
        colorDark = "dark:bg-transparent"
        colorLight = "bg-transparent"
        disabled = { page === 0 }
        dti = {DTI(DTI_LIST.BUTTON('prev'))}
        onClick = { handleBackButtonClick }
        outlineButton
        textColorDark = "dark:text-white"
        textColorLight = "text-black"
      >
        <MdChevronLeft />
      </Button>
      <Button
        aria-label = "Última Página"
        className = "float-right m-2"
        colorDark = "dark:bg-transparent"
        colorLight = "bg-transparent"
        disabled = { page >= Math.ceil(count / rowsPerPage) - 1 }
        dti = {DTI(DTI_LIST.BUTTON('last'))}
        onClick = { handleLastPageButtonClick }
        outlineButton
        textColorDark = "dark:text-white"
        textColorLight = "text-black"
      >
        <MdLastPage />
      </Button>
      <Button
        aria-label = "Próxima Página"
        className = "float-right m-2"
        colorDark = "dark:bg-transparent"
        colorLight = "bg-transparent"
        disabled = { page >= Math.ceil(count / rowsPerPage) - 1 }
        dti = {DTI(DTI_LIST.BUTTON('next'))}
        onClick = { handleNextButtonClick }
        outlineButton
        textColorDark = "dark:text-white"
        textColorLight = "text-black"
      >
        <MdChevronRight />
      </Button>
    </div>
  );
};

export default Pagination;
