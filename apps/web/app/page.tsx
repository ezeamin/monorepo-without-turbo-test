import { Button, IconButton, Pagination } from 'ui';
import { MdFirstPage, MdLastPage } from 'react-icons/md';

const Home = (): JSX.Element => {
  return (
    <main className="bg-slate-200">
      <Button
        colorDark="dark:bg-slate-700"
        colorLight="bg-gray-100"
        dti="example"
        textColorLight="text-blue-700"
        // unstyled
      >
        BUTTON COMPONENT
      </Button>

      <hr />

      <h1 className="text-blue-400">chau</h1>

      <div className='border-solid border-2 border-slate-400 md:w-6/12 w-full'>
        <Pagination 
          count = {150} 
          dti = "pagination50"
          page = {0} 
          rowsPerPage = {10}
        />
      </div>
      <div className='border-solid border-2 border-slate-400 w-full'>
        <Pagination 
          count = {150} 
          dti = "pagination100"
          page = {0} 
          rowsPerPage = {10} 
        />
      </div>

      <hr />

      <IconButton
        className='hover:bg-slate-500'
        colorDark='dark:bg-slate-700'
        colorLight='bg-slate-600'
        dti='colored-icon'
        iconComponent={<MdFirstPage color="#fff"/>}
        label="prueba"
      />

      <IconButton
        dti='outlined-icon'
        iconComponent={<MdLastPage color="#fff"/>}
      />
    </main>
  );
};

export default Home;
