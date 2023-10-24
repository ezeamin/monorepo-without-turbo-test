import { Button, IconButton } from 'ui';
import { MdFirstPage, MdLastPage } from 'react-icons/md';
import GridExample from 'ui/src/components/Grid/Grid.example';

const Home = (): JSX.Element => {
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
      <h1 className="p-2 text-blue-400">GRID:</h1>
      <GridExample />

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
    </main>
  );
};

export default Home;
