import React from 'react';
import { Table } from 'react-bootstrap';

import './FiltroIglesia.css';

export const FiltroIglesia = () => {
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
                    <div className='CardReporte'>
                        <img src='./Icons/Icons.png' className='ImageCardReporte' ></img>
                        <p className='ParrafoCardReporte'>Total de Iglesias registradas</p>
                        <h1 className='NumCardReporte'>20</h1>
                    </div>
                </div>
                <br />
                
                <div className='SearchReporte'>
                    <input type='search' className='SearchTextInput' placeholder='Ej. Villarroel'></input>
                    <button type='submit' className='ButtonReporte' > BUSCAR </button>
                </div>
                <br />

                <div className="Form-filtro2">
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
