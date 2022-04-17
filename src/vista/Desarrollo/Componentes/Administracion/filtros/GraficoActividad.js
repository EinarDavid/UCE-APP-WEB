import React, { useState } from 'react';
import { Table, Form, Col, Button } from 'react-bootstrap';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';

export const GraficoActividad = ({iglesia}) => {

    return (
        <div>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control as="select" name="Iglesia" required onChange={() => console.log('Enter')} >
                    <option value='Default' hidden >Seleccione la Iglesia</option>
                    {
                        iglesia.map(iglesia => {
                            return (
                                <option
                                    key={iglesia._id}
                                    value={iglesia._id} /*selected={option.selected}*/>
                                    {iglesia.Nombre}

                                </option>
                            )
                        })
                    }
                </Form.Control>
            </Form.Group>
            <div style={{ height: '10px' }} />
            <div className='DashboardContend'>
                <div className='CardContainerActividades'>
                    <div className='ContainerActividades'>
                        <h1 className='TituloGraficos'>Actividades</h1>
                        {
                            iglesia[0].Actividades.map((actividad) => {
                                return (
                                    <div className='ListActividad'>
                                        <img src={'/fotos/Iglesias/Actividad/' + actividad.FotoActividad} className='ImageActividad' ></img>
                                        <div className='DescriptionActividad'>
                                            <p className='TitleActividad'>{actividad.Titulo}</p>
                                            <div className='CantAsistencia'>
                                                <div className='ContAsistencia'>
                                                    <div className='Icon-Text'>
                                                        <img src='./Icons/Icons.png' className='ImageCardActividad' ></img>
                                                        <p className='NumAsistencia'>10</p>
                                                    </div>
                                                    <p className='EstadoCard'>Asistiran</p>
                                                </div>
                                                <div className='ContAsistencia'>
                                                    <div className='Icon-Text'>
                                                        <img src='./Icons/Icons.png' className='ImageCardActividad' ></img>
                                                        <p className='NumAsistencia'>10</p>
                                                    </div>
                                                    <p className='EstadoCard'>Les interesa</p>
                                                </div>
                                                <div className='ContAsistencia'>
                                                    <div className='Icon-Text'>
                                                        <img src='./Icons/Icons.png' className='ImageCardActividad' ></img>
                                                        <p className='NumAsistencia'>10</p>
                                                    </div>
                                                    <p className='EstadoCard'>No les interesa</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>


                </div>
                <div className='GraficoContendAsistencia'>
                    <div className='FondoGrafico'>
                        <h1 className='TituloGraficos'>Asistencia de actividades</h1>
                        <ResponsiveContainer width="100%" height={280}>
                            <LineChart data={iglesia} margin={{ top: 10, right: 30, bottom: 10, left: 0 }}>
                                <Line type="monotone" dataKey="miembros" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <XAxis dataKey="Nombre" />
                                <YAxis />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>
    )
}
