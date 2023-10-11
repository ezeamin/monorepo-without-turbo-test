import { Button, Pagination } from 'ui';

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

    </main>
  );
};

export default Home;
