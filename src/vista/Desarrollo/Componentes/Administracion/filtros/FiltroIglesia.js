import React, { useState } from 'react';
import { Table, Form, Col, Button } from 'react-bootstrap';

import './FiltroIglesia.css';



export const FiltroIglesia = () => {

    const iglesia = window.datos.iglesias;
    const membresias = window.datos.membresias;
    const contarMiembros = () => {
        iglesia.forEach(igle => {
            var contador = 0;
            membresias.forEach(miembro => {
                if (igle._id === miembro.Iglesia) {
                    contador += 1;
                }
            });
            igle.miembros = contador;
        });
    }
    contarMiembros();

    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([])
    const [listaVisible, setListaVisible] = useState(iglesia);

    console.log("bbbbbbbbbbbb", window.datos.membresias);

    const columnas = window.datos.iglesias[0];
    var excepciones = ['Fotos', 'FotosSlider', 'Cargos', '_id', 'Descripcion', '__v', 'Horario', 'Mision', 'ResSocial', 'Vision', 'Logo', 'Actividades', 'Horario_Jueves', 'Horario_Lunes', 'Horario_Martes', 'Horario_Miercoles', 'Horario_Sabado', 'Horario_Viernes', 'Titulo_Descripcion']

    const nombreColumna = Object.getOwnPropertyNames(columnas)
    const columnasFiltradas = ['Nombre', 'Cant. Miembros', 'Direccion', "Correo", "Facebook", "NumeroCelular", "Denominacion"];

    

    const handleInputChange = (e) => {
        setInputValue(e.target.value);


        const result = [];

        if (e.target.value.trim().length > 0) {
            iglesia.forEach(element => {
                var stringunido = '';

                if (element.Nombre != null)
                    stringunido += element.Nombre + ' ';
                if (element.Correo != null)
                    stringunido += element.Correo + ' ';
                if (element.NumeroCelular != null)
                    stringunido += element.NumeroCelular + ' ';
                if (element.Direccion != null)
                    stringunido += element.Direccion;

                console.log('Valor del texto------', stringunido);

                if (stringunido.toLowerCase().match(e.target.value.toLowerCase()) !== null) {
                    result.push(element);
                }
            });
            setListaVisible(result);
        } else {
            setListaVisible(iglesia);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log('handleSubmit', inputValue)
        if (inputValue.trim().length > 2) {
            setInputValue('');
        }

    }
    //this.columnas = Object.getOwnPropertyNames(this.state.iglesias[0]);

    return (
        <div>
            {/* <h1>Pagina Iglesia filtro</h1> */}
            <br />
            <br />
            <div>
                <h1 className='TitleReporte'>Reportes</h1>
                <br />

                <div className='CardDisplay'>
                    <div className='CardReporte'>
                        <img src='./Icons/Icons.png' className='ImageCardReporte' ></img>
                        <p className='ParrafoCardReporte'>Total de Iglesias registradas</p>
                        <h1 className='NumCardReporte'>{iglesia.length}</h1>
                    </div>

                    <div className='CardReporte'>
                        <img src='./Icons/Icons.png' className='ImageCardReporte' ></img>
                        <p className='ParrafoCardReporte'>Cantidad de miembros registrados</p>
                        <h1 className='NumCardReporte'>20</h1>
                    </div>
                    <div className='CardReporte'>
                        <img src='./Icons/Icons.png' className='ImageCardReporte' ></img>
                        <p className='ParrafoCardReporte'>Total de Iglesias registradas</p>
                        <h1 className='NumCardReporte'>20</h1>
                    </div>
                    <div className='CardReporte'>
                        <img src='./Icons/Icons.png' className='ImageCardReporte' ></img>
                        <p className='ParrafoCardReporte'>Total de Iglesias registradas</p>
                        <h1 className='NumCardReporte'>20</h1>
                    </div>
                </div>

                <br />

                <form onSubmit={handleSubmit} >
                    <div className='SearchReporte'>
                        <div className='TextContainer' >
                            <label className='TitleInputText'>Ingresa el dato de busqueda: {inputValue}</label>
                            <input type='text'
                                className='SearchTextInput'
                                placeholder='Ej. Mayorazgo'
                                value={inputValue}
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        {/* <button type='submit' className='ButtonReporte' > BUSCAR </button> */}
                    </div>
                </form>

                {/* <br /> */}
                <div className='Form-filtro'>
                    <Table responsive striped hover>
                        <thead>
                            <tr>
                                <th>Nro</th>
                                {
                                    columnasFiltradas.map((columna, i) => (
                                        <th key={i}>{columna}</th>
                                    ))
                                }
                                <th>Datos</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                listaVisible.map((igle, index) => {
                                    // console.log('-------', igle)
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{igle.Nombre}</td>
                                            <td>{igle.miembros}</td>
                                            <td>{igle.Direccion}</td>
                                            <td>{igle.Correo}</td>
                                            <td>{igle.Facebook}</td>
                                            <td>{igle.NumeroCelular}</td>
                                            <td>{igle.Denominacion}</td>
                                            <td>Acción</td>
                                        </tr>
                                    )
                                })

                            }


                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
