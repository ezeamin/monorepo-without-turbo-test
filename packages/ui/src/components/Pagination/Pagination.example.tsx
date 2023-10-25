'use client';

import { useState } from 'react';

import { DTI, DTI_LIST } from 'dti';

import Pagination from './Pagination';

const PaginationExample = (): JSX.Element => {
  const [page1, setPage1] = useState(0);
  const [page2, setPage2] = useState(0);

  const changePage1 = (_e: React.SyntheticEvent, newPage: number): void => {
    setPage1(newPage);
  };
  const changePage2 = (_e: React.SyntheticEvent, newPage: number): void => {
    setPage2(newPage);
  };

  return (
    <>
      <div className="md:w-6/12 w-full">
        Width 50%
        <Pagination
          count={150}
          dti={DTI(`${DTI_LIST.PAGINATION.PAGE_SELECTOR}-w50`)}
          onPageChange={changePage1}
          page={page1}
          rowsPerPage={10}
        />
      </div>
      <div className="w-full">
        Width 100%
        <Pagination
          count={150}
          dti={DTI(`${DTI_LIST.PAGINATION.PAGE_SELECTOR}-w100`)}
          onPageChange={changePage2}
          page={page2}
          rowsPerPage={10}
        />
      </div>
    </>
  );
};

export default PaginationExample;
