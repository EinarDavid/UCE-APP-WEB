import React from 'react';
import { Table, Form, Col, Button } from 'react-bootstrap';

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
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Ingresa el dato de Busqueda</Form.Label>
                                <Form.Control type="search" placeholder="Ej. Villarroel" className='SearchTextInput' required />
                            </Form.Group>
                            {/* <Button variant="primary" type="submit">Submit</Button> */}
                            <Button type="submit" className='ButtonReporte'>BUSCAR</Button>
                        </Form.Row>
                    </Form>


                </div>

                <div className='SearchReporte'>
                    <br />
                    <input type='search' className='SearchTextInput' placeholder='Ej. Villarroel'></input>
                    <button type='submit' className='ButtonReporte' > BUSCAR </button>
                    <br />
                </div>

                <div className='Form-filtro2'>
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
