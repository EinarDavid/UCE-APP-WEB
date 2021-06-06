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
      actividad: "nada"
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

          <Form action="#" method="post" >
            <Modal.Header closeButton>
              <Modal.Title>Registro de Actividades</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div className="Form-registro">
                  <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                      <Form.Label>Departamento</Form.Label>
                      <Form.Control as="select" name="departamento">
                        <option value="juvenil">Soc. Juvenil</option>
                        <option value="femenil">Soc. Femenil</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                      <Form.Label>area</Form.Label>
                      <Form.Control as="select" name="area">
                        <option value="ministerial">Ministerial</option>
                        <option value="accion_social">Accion Social</option>
                        <option value="ev_min">Evangelismo y Misiones</option>
                        <option value="edu_cris">Educacion Cristiana</option>
                        <option value="administracion">Administracion</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Titulo*</Form.Label>
                      <Form.Control type="text" placeholder="Nombre" name="nombre_actividad" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Presupuesto</Form.Label>
                      <Form.Control type="number" placeholder="Presupuesto" name="presupuesto" />
                    </Form.Group>
                  </Form.Row>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>Close</Button>
              <Button type="submit" variant="outline-primary">Save</Button>
            </Modal.Footer>
          </Form>
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
        if(a.Inicio==arg.dateSrt)
        {
          return a;
        }
      })
      console.log('FECHA--------------', actividad);
      if(actividad.length>0)
      {
        this.setState({  // add new event data
          show:true,
          actividad: actividad
        })
      }
      else
      {
        this.setState({  // add new event data
          show:true,
          actividad: "nada"
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