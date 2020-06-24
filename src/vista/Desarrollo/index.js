import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import './index.css';
import './App.css';
//import * as serviceWorker from './serviceWorker';
import Administracion from './clases/Administracion';
import Inicio from './clases/Inicio';
import Login from './clases/Login';
import '/bootstrap/dist/css/bootstrap.min.css';

import Footer_black from './Componentes/Inicio_vista/texto_inicio/footer_black';

ReactDOM.render(<Login/>, document.getElementById('login'));
ReactDOM.render(<Administracion/>, document.getElementById('admin'));
ReactDOM.render(<Inicio/>, document.getElementById('inicio'));

