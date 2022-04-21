import React, { useEffect, useRef, useState } from 'react';
import { Table, Form, Col, Button } from 'react-bootstrap';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';

import '../filtros/FiltroIglesia.css';

export const GraficosActividades = () => {

    const [graficoVisible, setGraficoVisible] = useState([]);
    const iglesia = window.datos.Iglesia;
    console.log('----', iglesia);

    const ActualizarGrafico = () => {

        var Actividad = [];

        iglesia.Actividades.forEach(act => {
            var ContTeInteresa = 0;
            var ContAsistire = 0;
            var ContNoMeIteresa = 0;

            act.AsistenciaActividad.forEach(asistencia => {
                if (asistencia.Estado == '1') {
                    ContTeInteresa += 1;
                } else if (asistencia.Estado == '2') {
                    ContAsistire += 1;
                } else if (asistencia.Estado == '3') {
                    ContNoMeIteresa += 1;
                }
            });

            Actividad.push({
                Id: act._id,
                Titulo: act.Titulo,
                FotoActividad: act.FotoActividad,

                ContTeInteresa: ContTeInteresa,
                ContAsistire: ContAsistire,
                ContNoMeIteresa: ContNoMeIteresa,

            })
        });

        setGraficoVisible(Actividad);

    }

    useEffect(() => {
        ActualizarGrafico();
    }, [])

    return (
        <div>
            <div className='DashboardContend'>
                <div className='CardContainerActividades'>
                    <div className='ContainerActividades'>
                        <h1 className='TituloGraficos'>Actividades</h1>
                        {
                            graficoVisible.map((actividad, i) => {
                                return (
                                    <div className='ListActividad' key={actividad.Id} >
                                        <img src={'/fotos/Iglesias/Actividad/' + actividad.FotoActividad} className='ImageActividad' ></img>
                                        <div className='DescriptionActividad'>
                                            <p className='TitleActividad'>{actividad.Titulo}</p>
                                            <div className='CantAsistencia'>
                                                <div className='ContAsistencia'>
                                                    <div className='Icon-Text'>
                                                        <img src='./Icons/Icons.png' className='ImageCardActividad' ></img>
                                                        <p className='NumAsistencia'>{actividad.ContAsistire}</p>
                                                    </div>
                                                    <p className='EstadoCard'>Asistiran</p>
                                                </div>
                                                <div className='ContAsistencia'>
                                                    <div className='Icon-Text'>
                                                        <img src='./Icons/Icons.png' className='ImageCardActividad' ></img>
                                                        <p className='NumAsistencia'>{actividad.ContTeInteresa}</p>
                                                    </div>
                                                    <p className='EstadoCard'>Les interesa</p>
                                                </div>
                                                <div className='ContAsistencia'>
                                                    <div className='Icon-Text'>
                                                        <img src='./Icons/Icons.png' className='ImageCardActividad' ></img>
                                                        <p className='NumAsistencia'>{actividad.ContNoMeIteresa}</p>
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

                            <BarChart data={graficoVisible} margin={{ top: 10, right: 30, bottom: 10, left: 0 }}>
                                <CartesianGrid stroke="#E1F1FF" strokeDasharray="3 3" />
                                <XAxis dataKey="Titulo" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="ContAsistire" fill="#00D8AF" />
                                <Bar dataKey="ContTeInteresa" fill="#00BCD1" />
                                <Bar dataKey="ContNoMeIteresa" fill="#9A51E0" />
                            </BarChart >
                        </ResponsiveContainer>


                    </div>
                </div>

            </div>
        </div>
    )
}
