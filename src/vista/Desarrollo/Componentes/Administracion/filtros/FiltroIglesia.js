import React, { useState } from 'react';
import { Table, Form, Col, Button } from 'react-bootstrap';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

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
        if (a.NombreIglesia > b.NombreIglesia) {
            return 1;
        }
        if (a.NombreIglesia < b.NombreIglesia) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    console.log('----------', membresias);

    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([])
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
                                <p className='ParrafoCardReporte'>Total de miembros por Bautizo</p>
                                <h1 className='NumCardReporte'>{contBautizo}</h1>
                            </div>
                            <div className='CardMiembroPor'>
                                {/* <img src='./Icons/Icons.png' className='ImageCardReporte' ></img> */}
                                <p className='ParrafoCardReporte'>Total de miembros por Transferencia</p>
                                <h1 className='NumCardReporte'>{contTransferencia}</h1>
                            </div>
                            <div className='CardMiembroPor'>
                                {/* <img src='./Icons/Icons.png' className='ImageCardReporte' ></img> */}
                                <p className='ParrafoCardReporte'>Total de miembros por Solicitud</p>
                                <h1 className='NumCardReporte'>{contSolicitud}</h1>
                            </div>
                        </div>
                    </div>
                    <div className='GraficoContend'>
                        <div className='FondoGrafico'>
                        <LineChart width={600} height={300} data={iglesia} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                            <Line type="monotone" dataKey="miembros" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="Nombre" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                        </div>
                    </div>
                </div>
                <br />
                {
                    (busquedaSeleccionada === 0) ? (
                        <div className='ContainerButtonReport'>
                            <button className='ButtonSelect' onClick={() => { setBusquedaSeleccionada(0) }}>Busqueda de Iglesias</button>
                            <div style={{ width: '25px' }}></div>
                            <button className='ButtonUnselected' onClick={() => { setBusquedaSeleccionada(1) }}>Busqueda de Miembros</button>
                        </div>) : (
                        <div className='ContainerButtonReport'>
                            <button className='ButtonUnselected' onClick={() => { setBusquedaSeleccionada(0) }}>Busqueda de Iglesias</button>
                            <div style={{ width: '25px' }}></div>
                            <button className='ButtonSelect' onClick={() => { setBusquedaSeleccionada(1) }}>Busqueda de Miembros</button>
                        </div>
                    )
                }

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

                    {
                        (busquedaSeleccionada === 0) ? (
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
                                            // console.log('-------', igle.Facebook)
                                            // console.log('-------Iglesia', igle)
                                            // 
                                            // 
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{igle.Nombre}</td>
                                                    <td>{igle.miembros}</td>
                                                    <td>{igle.Direccion}</td>
                                                    <td>{(igle.Correo != null && igle.Correo != '') ? (<a href={`mailto:${igle.Correo}`}><img src={'/Icons/mail.svg'} width={30} /></a>) : ('')}</td>
                                                    <td>{(igle.Facebook != null && igle.Facebook != '') ? (<a href={igle.Facebook}><img src={'/Icons/facebook.svg'} width={30} /></a>) : ('')}</td>
                                                    <td>{(igle.NumeroCelular != null && igle.NumeroCelular != '') ? (<a href={`https://api.whatsapp.com/send?phone=591${igle.NumeroCelular}`}><img src={'/Icons/whatsapp.svg'} width={30} /></a>) : ('')}</td>
                                                    <td>{igle.Denominacion}</td>

                                                </tr>
                                            )
                                        })

                                    }


                                </tbody>
                            </Table>
                        ) : (busquedaSeleccionada === 1) ? (
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
                                            // 
                                            // 
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{getNombreIglesia(miembro.Iglesia)}</td>
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
                        ) : (<div>
                            <h1>Hola</h1>
                        </div>)
                    }



                    {
                        (busquedaSeleccionada === 0) ? (
                            <div className="Reportes">
                                <Button onClick={() => { DescargarExcel() }} variant="outline-light">Descargar</Button>
                            </div>
                        ) : (busquedaSeleccionada === 1) ? (
                            <div className="Reportes">
                                <Button onClick={() => { DescargarExcelMiembros() }} variant="outline-light">Descargar</Button>
                            </div>
                        ) : (
                            <div>
                                <h1>Busqueda seleccionada es distinto de 0 y 1</h1>
                            </div>
                        )

                    }
                </div>
            </div>

        </div>
    )
}
