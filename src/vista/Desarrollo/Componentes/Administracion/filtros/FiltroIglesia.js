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

    const columnasFiltradas = ['Nombre', 'Cant. Miembros', 'Direccion', "Correo", "Facebook", "WhatsApp", "Denominacion"];

    const DescargarExcel = () => {
        const XLSX = require('xlsx')

        // array of objects to save in Excel
        let binary_univers = listaVisible;
        let listaDescargable = [];

        binary_univers.forEach(element => {
            listaDescargable.push({
                Nombre: element.Nombre, Descripcion: element.Descripcion, Correo: element.Correo, Facebook: element.Facebook,
                Mision: element.Mision, Vision: element.Vision, NumeroCelular: element.NumeroCelular, Pastores: element.Pastores,
                Denominacion: element.Denominacion, miembros: element.miembros, Direccion: element.Direccion, HorarioDomingo: element.Horario,
                Horario_Lunes: element.Horario_Lunes, Horario_Martes: element.Horario_Martes, Horario_Miercoles: element.Horario_Miercoles,
                Horario_Jueves: element.Horario_Jueves, Horario_Viernes: element.Horario_Viernes, Horario_Sabado: element.Horario_Sabado
            })
        });

        let binaryWS = XLSX.utils.json_to_sheet(listaDescargable);

        // Create a new Workbook
        var wb = XLSX.utils.book_new()

        // Name your sheet
        XLSX.utils.book_append_sheet(wb, binaryWS, 'Iglesia')

        // export your excel
        XLSX.writeFile(wb, 'Iglesia.xlsx');
    }

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
                {/* <h1 className='TitleReporte'>Reportes</h1>
                */}
                <br />
                <div className='CardDisplay'>
                    <div className='CardReporte'>
                        <img src='./Icons/Icons.png' className='ImageCardReporte' ></img>
                        <p className='ParrafoCardReporte'>Total de Iglesias registradas</p>
                        <h1 className='NumCardReporte'>{iglesia.length}</h1>
                    </div>

                    <div className='CardReporte'>
                        <img src='./Icons/Icons.png' className='ImageCardReporte' ></img>
                        <p className='ParrafoCardReporte'>Total de miembros registrados</p>
                        <h1 className='NumCardReporte'>{membresias.length}</h1>
                    </div>

                </div>

                <br />

                <form onSubmit={handleSubmit} >
                    <div className='SearchReporte'>
                        <div className='TextContainer' >
                            <label className='TitleInputText'>Ingresa el dato de busqueda</label>
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

                            </tr>
                        </thead>
                        <tbody>

                            {
                                listaVisible.map((igle, index) => {
                                    // console.log('-------', igle)
                                    // <td>{(igle.Correo != null) ? (<a href={'mailto:' + igle.Correo}> Click </a>) : ({''})}</td>
                                    // <td>{(igle.NumeroCelular != null) ? (<a href={'https://api.whatsapp.com/send?phone=591' + igle.NumeroCelular}></a>) : ({''})}</td>
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{igle.Nombre}</td>
                                            <td>{igle.miembros}</td>
                                            <td>{igle.Direccion}</td>

                                            <td>{(igle.Facebook != null) ? (<a href={igle.Facebook}> Click </a>) : ('')}</td>

                                            <td>{igle.Denominacion}</td>

                                        </tr>
                                    )
                                })

                            }


                        </tbody>
                    </Table>
                    <div className="Reportes">
                        <Button onClick={() => { DescargarExcel() }} variant="outline-light">Descargar</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
