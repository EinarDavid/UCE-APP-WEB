import React, { useState } from 'react';
import { Table, Form, Col, Button } from 'react-bootstrap';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import { GraficoActividad } from './GraficoActividad';

import './FiltroIglesia.css';

export const DashboardIglesia = () => {
  
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

    const getNombreIglesia = (id) => {
        for (let i = 0; i < iglesia.length; i++) {
            if (iglesia[i]._id == id) {
                return iglesia[i].Nombre;
            }
        }
        return '';
    }

    iglesia.sort(function (a, b) {
        if (a.Nombre > b.Nombre) {
            return 1;
        }
        if (a.Nombre < b.Nombre) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    var contBautizo = 0;
    var contTransferencia = 0;
    var contSolicitud = 0;
    membresias.forEach(element => {
        const NombreIglesia = getNombreIglesia(element.Iglesia);
        element.NombreIglesia = NombreIglesia;

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

    membresias.sort(function (a, b) {
        if (a.Apellido_Paterno > b.Apellido_Paterno) {
            return 1;
        }
        if (a.Apellido_Paterno < b.Apellido_Paterno) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    // console.log('----------', membresias);
    // console.log('Iglesias-------', iglesia);

    const [inputValue, setInputValue] = useState('');

    const [listaVisible, setListaVisible] = useState(iglesia);
    const [listaVisibleMiembros, setlistaVisibleMiembros] = useState(membresias)
    const [busquedaSeleccionada, setBusquedaSeleccionada] = useState(0);

    // console.log("bbbbbbbbbbbb", window.datos.membresias);
    const dataGrafico = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },];
    const columnas = window.datos.iglesias[0];

    const columnasFiltradas = ['Nombre', 'Cant. Miembros', 'Direccion', "Correo", "Facebook", "WhatsApp", "Denominacion"];
    const columnasMiembros = ['Nro', 'Iglesia', 'Nombre', 'Apellidos', 'Contacto', 'Profesión', 'C.I.', 'Miembro por'];

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

    const DescargarExcelMiembros = () => {
        const XLSX = require('xlsx')

        // array of objects to save in Excel
        let binary_univers = listaVisibleMiembros;
        let listaDescargable = [];

        binary_univers.forEach(element => {
            listaDescargable.push({
                Nombre: element.Nombre, Apellido_Paterno: element.Apellido_Paterno, Apellido_Materno: element.Apellido_Materno, Ci: element.Ci,
                Contacto: element.Contacto, Direccion: element.Direccion, Email: element.Email, Estado_Civil: element.Estado_Civil,
                Fecha_Nacimiento: element.Fecha_Nacimiento, Genero: element.Genero, Iglesia: getNombreIglesia(element.Iglesia), Lugar_Nacimiento: element.Lugar_Nacimiento,
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

    const handleInputChange = (e) => {
        setInputValue(e.target.value);

        if (busquedaSeleccionada === 0) {
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
                        stringunido += element.Direccion + ' ';
                    if (element.Denominacion != null)
                        stringunido += element.Denominacion;

                    // console.log('Valor del texto------', stringunido);

                    if (stringunido.toLowerCase().match(e.target.value.toLowerCase()) !== null) {
                        result.push(element);
                    }
                });
                setListaVisible(result);
            } else {
                setListaVisible(iglesia);
            }

        } else if (busquedaSeleccionada === 1) {
            const result = [];

            if (e.target.value.trim().length > 0) {
                membresias.forEach(element => {
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
                setlistaVisibleMiembros(membresias);
            }
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
                <div className='DashboardContend'>
                    <div className='CardDisplay'>
                        <h1 className='TituloGraficos'>Registros</h1>
                        <div className='CardContend'>
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
                        <div style={{ height: '25px' }} />
                        <div className='CardContendMiembro'>
                            <div className='CardMiembroPor'>
                                {/* <img src='./Icons/Icons.png' className='ImageCardReporte' ></img> */}
                                <div style={{ height: '5px' }} />
                                <p className='ParrafoCardReporte'>Total de miembros por Bautizo</p>
                                <h1 className='NumCardReporte'>{contBautizo}</h1>
                            </div>
                            <div className='CardMiembroPor'>
                                {/* <img src='./Icons/Icons.png' className='ImageCardReporte' ></img> */}
                                <div style={{ height: '5px' }} />
                                <p className='ParrafoCardReporte'>Total de miembros por Transferencia</p>
                                <h1 className='NumCardReporte'>{contTransferencia}</h1>
                            </div>
                            <div className='CardMiembroPor'>
                                {/* <img src='./Icons/Icons.png' className='ImageCardReporte' ></img> */}
                                <div style={{ height: '5px' }} />
                                <p className='ParrafoCardReporte'>Total de miembros por Solicitud</p>
                                <h1 className='NumCardReporte'>{contSolicitud}</h1>
                            </div>
                        </div>
                    </div>
                    <div className='GraficoContend'>
                        <div className='FondoGrafico'>
                            <h1 className='TituloGraficos'>Miembros por Iglesia</h1>
                            {/* <br/> */}

                            <ResponsiveContainer width="100%" height={280}>
                                <BarChart data={iglesia} margin={{ top: 10, right: 30, bottom: 10, left: 0 }}>
                                    <CartesianGrid stroke="#E1F1FF" strokeDasharray="3 3" />
                                    <XAxis dataKey="Nombre" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="miembros" fill="#73A9FC" />
                                </BarChart >
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                <div style={{ height: '30px' }} />


                {/* GRAFICO */}
                
                <GraficoActividad iglesia={iglesia} />

                {/* <div style={{ height: '30px' }} /> */}
                
            </div>

        </div>
    
  )
}



