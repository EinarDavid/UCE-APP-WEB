import React, { useState } from 'react';
import { Table, Form, Col, Button } from 'react-bootstrap';

import './FiltroIglesia.css';

export const FiltroMembresias = () => {

    const membresias = window.datos.membresias;

    console.log('User....', window.datos.user)

    var TotalMiembros = 0;
    const MiembrosIglesia = [];

    const contarMiembros = () => {
        var contador = 0;
        membresias.forEach(miembro => {
            if (window.datos.user.Iglesia === miembro.Iglesia) {
                contador += 1;
                MiembrosIglesia.push(miembro);
            }
        });
        TotalMiembros = contador;
    }
    contarMiembros();

    var contBautizo = 0;
    var contTransferencia = 0;
    var contSolicitud = 0;

    MiembrosIglesia.forEach(element => {
        if (element.MiembroBautizo != undefined) {
            element.MiembroPor = 'Bautizo';
            contBautizo += 1;
        } else if (element.MiembroTransferencia != undefined) {
            element.MiembroPor = 'Transferencia';
            contTransferencia += 1;
        } else if (element.MiembroSolicitud != undefined) {
            element.MiembroPor = 'Solicitud';
            contSolicitud += 1;
        }
    });

    MiembrosIglesia.sort(function (a, b) {
        if (a.Apellido_Paterno > b.Apellido_Paterno) {
            return 1;
        }
        if (a.Apellido_Paterno < b.Apellido_Paterno) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });

    const [inputValue, setInputValue] = useState('');
    const [listaVisibleMiembros, setlistaVisibleMiembros] = useState(MiembrosIglesia);

    const columnasMiembros = ['Nro', 'Nombre', 'Apellidos', 'Contacto', 'Profesión', 'C.I.', 'Miembro por'];

    const handleInputChange = (e) => {
        setInputValue(e.target.value);

        const result = [];

        if (e.target.value.trim().length > 0) {
            MiembrosIglesia.forEach(element => {
                var stringunido = '';

                if (element.NombreIglesia != '')
                    stringunido += element.NombreIglesia + ' ';
                if (element.Nombre != null)
                    stringunido += element.Nombre + ' ';
                if (element.Apellido_Paterno != null)
                    stringunido += element.Apellido_Paterno + ' ';
                if (element.Apellido_Materno != null)
                    stringunido += element.Apellido_Materno + ' ';
                if (element.Contacto != null)
                    stringunido += element.Contacto + ' ';
                if (element.Profesion != null)
                    stringunido += element.Profesion + ' ';
                if (element.Ci != null)
                    stringunido += element.Ci + ' ';
                if (element.MiembroPor != null)
                    stringunido += element.MiembroPor;
                // console.log('Valor del texto------', stringunido);

                if (stringunido.toLowerCase().match(e.target.value.toLowerCase()) !== null) {
                    result.push(element);
                }
            });
            setlistaVisibleMiembros(result);
        } else {
            setlistaVisibleMiembros(MiembrosIglesia);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('handleSubmit', inputValue)
        if (inputValue.trim().length > 2) {
            setInputValue('');
        }
    }

    const DescargarExcelMiembros = () => {
        const XLSX = require('xlsx')

        // array of objects to save in Excel
        let binary_univers = listaVisibleMiembros;
        let listaDescargable = [];

        binary_univers.forEach(element => {
            listaDescargable.push({
                Nombre: element.Nombre, Apellido_Paterno: element.Apellido_Paterno, Apellido_Materno: element.Apellido_Materno, Ci: element.Ci,
                Contacto: element.Contacto, Direccion: element.Direccion, Email: element.Email, Estado_Civil: element.Estado_Civil,
                Fecha_Nacimiento: element.Fecha_Nacimiento, Genero: element.Genero, Lugar_Nacimiento: element.Lugar_Nacimiento,
                Profesion: element.Profesion
            })
        });

        let binaryWS = XLSX.utils.json_to_sheet(listaDescargable);

        // Create a new Workbook
        var wb = XLSX.utils.book_new()

        // Name your sheet
        XLSX.utils.book_append_sheet(wb, binaryWS, 'Membresias')

        // export your excel
        XLSX.writeFile(wb, 'Membresias.xlsx');
    }

    console.log('----------', MiembrosIglesia);

    return (
        <div>
            <br />
            <br />
            <h1 className='TituloGraficos'>Registros</h1>
            <div className='CardContend'>
                <div className='CardReporte4'>
                    <img src='../../Icons/Icons.png' className='ImageCardReporte' ></img>
                    <p className='ParrafoCardReporte'>Total de miembros registrados</p>
                    <h1 className='NumCardReporte'>{TotalMiembros}</h1>
                </div>
                <div className='CardReporte4'>
                    <img src='../../Icons/Icons.png' className='ImageCardReporte' ></img>
                    <p className='ParrafoCardReporte'>Total de miembros por Bautizo</p>
                    <h1 className='NumCardReporte'>{contBautizo}</h1>
                </div>

                <div className='CardReporte4'>
                    <img src='../../Icons/Icons.png' className='ImageCardReporte' ></img>
                    <p className='ParrafoCardReporte'>Total de miembros por Transferencia</p>
                    <h1 className='NumCardReporte'>{contTransferencia}</h1>
                </div>
                <div className='CardReporte4'>
                    <img src='../../Icons/Icons.png' className='ImageCardReporte' ></img>
                    <p className='ParrafoCardReporte'>Total de miembros por Solicitud</p>
                    <h1 className='NumCardReporte'>{contSolicitud}</h1>
                </div>
            </div>

            <br />

            <form onSubmit={handleSubmit} >
                <div className='SearchReporte'>
                    <div className='TextContainer' >
                        <label className='TitleInputText'>Ingresa el dato de busqueda</label>
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
            <div className='Form-filtro'>
                <Table responsive striped hover>
                    <thead>
                        <tr>
                            {
                                columnasMiembros.map((columna, i) => (
                                    <th key={i}>{columna}</th>
                                ))
                            }

                        </tr>
                    </thead>
                    <tbody>

                        {
                            listaVisibleMiembros.map((miembro, index) => {
                                // console.log('-------', miembro)
                                // console.log('-------membresia', miembro)

                                {/* <td>{getNombreIglesia(miembro.Iglesia)}</td> */ }
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{miembro.Nombre}</td>
                                        <td>{((miembro.Apellido_Paterno != undefined) ? (miembro.Apellido_Paterno + ' ') : ('')) + ((miembro.Apellido_Materno != undefined) ? (miembro.Apellido_Materno) : (''))}</td>
                                        <td>{(miembro.Contacto != null && miembro.Contacto != '') ? (<a href={`https://api.whatsapp.com/send?phone=591${miembro.Contacto}`}><img src={'/Icons/whatsapp.svg'} width={30} /></a>) : ('')}</td>
                                        <td>{miembro.Profesion}</td>
                                        <td>{miembro.Ci}</td>
                                        <td>{miembro.MiembroPor}</td>
                                    </tr>
                                )
                            })

                        }

                    </tbody>
                </Table>
                <div className="Reportes">
                    <Button onClick={() => { DescargarExcelMiembros() }} variant="outline-light">Descargar</Button>
                </div>
            </div>
        </div>
    )
}
