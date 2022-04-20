import React from 'react';
import './FiltroIglesia.css';

export const FiltroMembresias = () => {

    const membresias = window.datos.membresias;

    console.log('User....', window.datos.user)
    
    var TotalMiembros= 0;
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
        if (a.NombreIglesia > b.NombreIglesia) {
            return 1;
        }
        if (a.NombreIglesia < b.NombreIglesia) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
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
        </div>
    )
}
