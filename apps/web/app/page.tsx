
import { MdAddToDrive } from "react-icons/md";
import { Button } from 'ui';

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

      <h2>Prueba icono</h2>
      <MdAddToDrive />

      <h1 className="text-blue-400">chau</h1>
    </main>
  );
};

export default Home;
