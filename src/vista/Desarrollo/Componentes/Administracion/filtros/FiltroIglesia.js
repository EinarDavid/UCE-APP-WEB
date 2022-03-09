import React, { useState } from 'react';
import { Table, Form, Col, Button } from 'react-bootstrap';

import './FiltroIglesia.css';



// var excepciones = ["Actividades", "Cargos", "Fotos", "FotosSlider"]

// iglesia = iglesia.map(a => {
//     if (a != undefined) {
//         // rellenar.map(b => {
//         //     if (a[b] == undefined) {
//         //         a[b] = ""
//         //     }
//         //     return b;
//         // });
//         excepciones.map(c => {
//             delete a[c]
//             return c;
//         });
//     }
//     return a;
// })

// this.state = {
//     iglesias: iglesia,
// }
// console.log(this.state);



export const FiltroIglesia = () => {

    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([])

    console.log("bbbbbbbbbbbb", window.datos.iglesias);


    const iglesia = window.datos.iglesias;

    const columnas = window.datos.iglesias[0];
    var excepciones = ['Fotos', 'FotosSlider', 'Cargos', '_id', 'Descripcion', '__v', 'Horario', 'Mision', 'ResSocial', 'Vision', 'Logo', 'Actividades', 'Horario_Jueves', 'Horario_Lunes', 'Horario_Martes', 'Horario_Miercoles', 'Horario_Sabado', 'Horario_Viernes', 'Titulo_Descripcion']

    const nombreColumna = Object.getOwnPropertyNames(columnas)
    const columnasFiltradas = ['Nombre'];




    var rellenar = ["Denominacion"]
    console.log("Columna", nombreColumna);

    // columnas = columnas.map(a => {
    //     if (a != undefined ){
    //         excepciones.map(c => {
    //             delete a[c]
    //             return c;
    //         })
    //     }
    //     return a;
    // })


    // const columna = Object.getOwnPropertyNames(iglesia[0].map(columna => {
    //     console.log("columna===========================", columna)
    //     return (<th>{columna}</th>)
    // }))



    const handleInputChange = (e) => {
        setInputValue(e.target.value);

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

                <form onSubmit={handleSubmit} >
                    <div className='SearchReporte'>
                        <div className='TextContainer' >
                            <label className='TitleInputText'>Ingresa el dato de busqueda: {inputValue}</label>
                            <input type='text'
                                className='SearchTextInput'
                                placeholder='Ej. Villarroel'
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
                                    columnasFiltradas.map(columna => (
                                        <th>{columna}</th>
                                    ))
                                }
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
