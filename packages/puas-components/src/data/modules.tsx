// @ts-expect-error - logo is not a component
import logo from 'images/logos/logo-144.png';

const modules = [
  {
    id: 1,
    description: 'Ejemplo 1',
    img: logo,
    url: '/prueba1',
  },
  {
    id: 2,
    description: 'Ejemplo 2',
    img: logo,
    url: '/prueba2',
  },
  {
    id: 3,
    description: 'Ejemplo 3',
    img: logo,
    url: '/prueba3',
  },
];

export default modules;
