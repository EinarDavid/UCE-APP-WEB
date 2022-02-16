import React from 'react';
import { Table, Form, Col, Button } from 'react-bootstrap';

import './FiltroIglesia.css';

export const FiltroIglesia = () => {

    console.log("aaaaaaaaaaa", window.datos);
    console.log("bbbbbbbbbbbb", window.datos.iglesias);
    console.log("cccccccccccccc", window.datos.filtro);

    const iglesia = window.datos.iglesias

    // const iglesias = iglesia.find();

    console.log("Cantidad de Iglesias:", iglesia.length);

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
                        <p className='ParrafoCardReporte'>Total de Iglesias registradas</p>
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

                <form>
                    <div className='SearchReporte'>
                        <div className='TextContainer' >
                            <label className='TitleInputText'>Ingresa el dato de busqueda</label>
                            <input type='search' className='SearchTextInput' placeholder='Ej. Villarroel'></input>
                        </div>
                        <button type='submit' className='ButtonReporte' > BUSCAR </button>
                    </div>
                </form>

                {/* <br /> */}
                <div className='Form-filtro'>
                    <Table responsive striped hover>
                        <thead>
                            <tr>
                                <th>Nro</th>
                                <th>Datos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Dave Loose</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
