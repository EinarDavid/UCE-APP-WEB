import React from 'react';
import ReactDom from 'react-dom';
import Menu from './../src/Vista/Desarrollo/Componentes/Inicio_vista/Menu/Menu_Principal.js';
import Formulario from './../src/Vista/Desarrollo/Componentes/Administracion/formulario/registro_bautizo.js';
import SC from './../src/Vista/Desarrollo/Componentes/Administracion/formulario/registro_sc.js';
import Accion_Social from './../src/Vista/Desarrollo/clases/Accion_social.js';
import Galeria from './../src/Vista/Desarrollo/Componentes/Administracion_vista/Galeria/galeria.js';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

/*it("Test 1", ()=>{
const tree= renderer.create(<Menu/>).toJSON();
expect(tree).toHaveTextContent();
});*/


it("Test Menu Principal", () => {
  const tree = renderer.create(<Menu />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Test Formulario Registro Bautizo", () => {
  const tree = renderer.create(<Formulario />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Test Registro de Santa Cena", () => {
  const tree = renderer.create(<SC />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Test Vista Accion Social", () => {
  const tree = renderer.create(<Accion_Social />).toJSON();
  expect(tree).toMatchSnapshot();
});
it("Test Galeria", () => {
  const tree = renderer.create(<Galeria />).toJSON();
  expect(tree).toMatchSnapshot();
});

