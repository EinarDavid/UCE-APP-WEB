import React from 'react';
import './FiltroIglesia.css';

export const FiltroMembresias = () => {

    const membresias = window.datos.membresias;
    
    console.log('----------', membresias);

    return (
        <div>
            <br/>
            <br/>
            <h1 className='TituloGraficos'>Registros</h1>
            <div className='CardContend'>
            <div className='CardReporte4'>
                    <img src='../../Icons/Icons.png' className='ImageCardReporte' ></img>
                    <p className='ParrafoCardReporte'>Total de miembros registrados</p>
                    <h1 className='NumCardReporte'>10</h1>
                </div>
                <div className='CardReporte4'>
                    <img src='../../Icons/Icons.png' className='ImageCardReporte' ></img>
                    <p className='ParrafoCardReporte'>Total de miembros por Bautizo</p>
                    <h1 className='NumCardReporte'>10</h1>
                </div>

                <div className='CardReporte4'>
                    <img src='../../Icons/Icons.png' className='ImageCardReporte' ></img>
                    <p className='ParrafoCardReporte'>Total de miembros por Transferencia</p>
                    <h1 className='NumCardReporte'>10</h1>
                </div>
                <div className='CardReporte4'>
                    <img src='../../Icons/Icons.png' className='ImageCardReporte' ></img>
                    <p className='ParrafoCardReporte'>Total de miembros por Solicitud</p>
                    <h1 className='NumCardReporte'>10</h1>
                </div>
            </div>
        </div>
    )
}
