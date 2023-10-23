<<<<<<< HEAD
import { Button } from 'ui';
// import { Checkbox } from 'ui'
=======
import { Button, IconButton } from 'ui';
import { MdAddToDrive, MdFirstPage, MdLastPage } from 'react-icons/md';
>>>>>>> 154f1d29a9eddbc9887c05f7faf81c1e495cb4fc

const Home = (): JSX.Element => {
  return (
    <main className='bg-slate-200'>
      <Button
        colorDark='dark:bg-slate-700'
        colorLight='bg-gray-100'
        dti='example'
        textColorLight='text-blue-700'
        // unstyled
      >
        BUTTON COMPONENT
      </Button>
      <hr />
      {/* <Checkbox/> */}

      <h2>Prueba icono</h2>
      <MdAddToDrive />

      <h1 className='text-blue-400'>chau</h1>

      <hr />

      <IconButton
        className='hover:bg-slate-500'
        colorDark='dark:bg-slate-700'
        colorLight='bg-slate-600'
        dti='colored-icon'
        iconComponent={<MdFirstPage color='#fff' />}
        label='prueba'
      />

      <IconButton
        dti='outlined-icon'
        iconComponent={<MdLastPage color='#fff' />}
      />
    </main>
  );
};

export default Home;
