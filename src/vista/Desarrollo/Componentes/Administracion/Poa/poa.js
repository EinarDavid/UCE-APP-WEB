import React, { Component } from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
//import './main.scss'

import { Modal, Button, Form, Col } from 'react-bootstrap';

class POA extends Component {
  //export default class POA extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleDateClick = this.handleDateClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.calendarComponentRef = React.createRef()

    var actividades = window.datos.Iglesia.Actividades.map((a)=>{
      return {title:a.Titulo, date:a.Inicio}
    })
    console.log("Actividades",actividades)
    console.log("Iglesia", window.datos.Iglesia)
    this.state = {
      calendarWeekends: true,
      calendarEvents: actividades,
      show: false,
      actividad: "nada",
      dia: "hoy"
    }

  }
  handleClose() {
    this.setState({
      show: false
    })
  }
  render() {
    return (
      <div>
        <div className='demo-app'>
          <div className='demo-app-calendar'>
            <FullCalendar
              defaultView="dayGridMonth"
              header={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
              }}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              ref={this.calendarComponentRef}
              weekends={this.state.calendarWeekends}
              events={this.state.calendarEvents}
              dateClick={this.handleDateClick}
            />
          </div>
        </div>
        <Modal size="lg" show={this.state.show} onHide={this.handleClose} centered>

         
            <Modal.Header closeButton>
              <Modal.Title>
                Actividades del día de {this.state.dia}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div>
                {
                  this.state.actividad=="nada"?
                  (
                    <div>No hay actividades programacas para elste día</div>
                  )
                  :
                  this.state.actividad.map(a=>
                    {
                      (
                        <div>
                          Titulo: {a.Titulo}
                          Inicio: {a.Inicio}
                          Descripcion: {a.Descripcion}
                        </div>
                      )
                    })
                }
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>Close</Button>
              <Button type="submit" variant="outline-primary">Save</Button>
            </Modal.Footer>
          
        </Modal>
      </div>
    );
  }

  toggleWeekends() {
    this.setState({ // update a property
      calendarWeekends: !this.state.calendarWeekends
    })
  }

  gotoPast() {
    let calendarApi = this.calendarComponentRef.current.getApi()
    calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
  }

  handleDateClick(arg) {
      
      var actividad = window.datos.Iglesia.Actividades.filter(a=>{
        console.log(a.Inicio,arg.dateStr,a.Inicio==arg.dateStr)
        if(a.Inicio==arg.dateStr)
        {
          return a;
        }
      })
      console.log('FECHA--------------', actividad);
      if(actividad.length>0)
      {
        this.setState({  // add new event data
          show:true,
          actividad: actividad,
          dia: arg.dateStr
        })
      }
      else
      {
        this.setState({  // add new event data
          show:true,
          actividad: "nada",
          dia: arg.dateStr
        })
      }    
  }

}
export default POA;


//show: true
/*
<div className='demo-app-top'>
            <button onClick={this.toggleWeekends}>toggle weekends</button>&nbsp;
            <button onClick={this.gotoPast}>go to a date in the past</button>&nbsp;
            (also, click a date/time to add an event)
          </div>
*/