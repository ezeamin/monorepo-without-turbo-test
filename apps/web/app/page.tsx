'use client';

import { useState } from 'react';
import { Button, IconButton, Pagination } from 'ui';
import { MdFirstPage, MdLastPage } from 'react-icons/md';

const Home = (): JSX.Element => {

  const [page1, setPage1] = useState(0);
  const [page2, setPage2] = useState(0);

  const changePage1 = (_e: React.SyntheticEvent, newPage: number):void => {
    setPage1(newPage)
  }
  const changePage2 = (_e: React.SyntheticEvent, newPage: number):void => {
    setPage2(newPage)
  }

  return (
    <main className="bg-slate-200">
      <hr />
      <h1 className="p-2 text-blue-400">BUTTON:</h1>
      <Button
        className='m-2'
        colorDark="dark:bg-slate-700"
        colorLight="bg-gray-100"
        dti="example"
        textColorLight="text-blue-700"
        // unstyled
      >
        BUTTON COMPONENT
      </Button>

      <hr />
      <h1 className="p-2 text-blue-400">ICON BUTTON:</h1>
      <IconButton
        className='m-2'
        dti='outlined-icon'
        iconComponent={<MdLastPage color="#fff"/>}
      />
      <IconButton
        className='hover:bg-slate-500'
        colorDark='dark:bg-slate-700'
        colorLight='bg-slate-600'
        dti='colored-icon'
        iconComponent={<MdFirstPage color="#fff"/>}
        label="with Color and Tooltip"
      />

      <hr />
      <h1 className="p-2 text-blue-400">PAGINATION:</h1>
      <div className='md:w-6/12 w-full'>
        Width 50%
        <Pagination 
          count = {150} 
          dti = "pagination50"
          onPageChange = {changePage1}
          page = {page1} 
          rowsPerPage = {10}
        />
      </div>
      <div className='w-full'>
        Width 100%
        <Pagination 
          count = {150} 
          dti = "pagination100"
          onPageChange = {changePage2}
          page = {page2} 
          rowsPerPage = {10}
        />
      </div>

      
    </main>
  );
};

export default Home;
