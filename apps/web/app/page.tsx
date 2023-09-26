import { Button } from 'ui';

const Home = () => {
  return (
    <main className="bg-slate-200">
      <Button
        colorDark="bg-slate-700"
        colorLight="bg-gray-100"
        dti="example"
        textColorLight="text-blue-700"
      >
        BUTTON COMPONENT
      </Button>

      <hr />

      <h1 className="text-blue-400">chau</h1>
    </main>
  );
};

export default Home;
