import React, { Component } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
//import './main.scss'

import { Modal, Button, Form, Col } from "react-bootstrap";



class POAGENERAL extends Component {
  //export default class POA extends React.Component {
  iglesiafiltrada;
    
  constructor(props, context) {
    super(props, context);
    console.log("Props-------",props)

    this.iglesiafiltrada = this.props.iglesia.find(i=>i._id===this.props.id);
    console.log('Filter', this.iglesiafiltrada)
   

    this.handleDateClick = this.handleDateClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.calendarComponentRef = React.createRef();

    var actividades = this.iglesiafiltrada.Actividades.map((a) => {
      return { title: a.Titulo, date: a.Inicio };
    });
    //console.log("Actividades", actividades)

    this.state = {
      calendarWeekends: true,
      calendarEvents: actividades,
      show: false,
      actividad: "nada",
      dia: "hoy",
    };

    this.actualizarDatos();
  }
  handleClose() {
    this.setState({
      show: false,
    });
  }

 actualizarDatos() {
    
    var actividadOriginal = this.iglesiafiltrada.Actividades;

    actividadOriginal = actividadOriginal.map((act, index) => {
      var ContTeInteresa = 0;
      var ContAsistire = 0;
      var ContNoMeIteresa = 0;

      act.AsistenciaActividad.map((asistencia) => {
        if (asistencia.Estado == "1") {
          ContTeInteresa += 1;
        } else if (asistencia.Estado == "2") {
          ContAsistire += 1;
        } else if (asistencia.Estado == "3") {
          ContNoMeIteresa += 1;
        }
      });
      act.ContTeInteresa = ContTeInteresa;
      act.ContNoMeIteresa = ContNoMeIteresa;
      act.ContAsistire = ContAsistire;

      return act;
    });
    console.log("Actividad---", actividadOriginal);
    //this.setState.actividad(Actividad);
  }

  render() {
    return (
      <div id="texto">
        <div className="demo-app">
          <div className="demo-app-calendar">
            <FullCalendar
              defaultView="dayGridMonth"
              header={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
              }}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              ref={this.calendarComponentRef}
              weekends={this.state.calendarWeekends}
              events={this.state.calendarEvents}
              dateClick={this.handleDateClick}
            />
          </div>
        </div>
        
        <Modal
          size="lg"
          show={this.state.show}
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Actividades del día de {this.state.dia}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="Actividad-contenedor">
              {this.state.actividad == "nada" ? (
                <h2>No hay actividades programacas para elste día</h2>
              ) : (
                this.state.actividad.map((a) => {
                  console.log("datos", a);
                  if (a.FotoActividad == undefined) {
                    a.FotoActividad = "/fotos/Membresias/IconoPersona.jpg";
                  } else {
                    a.FotoActividad =
                      "/fotos/Iglesias/Actividad/" + a.FotoActividad;
                  }
                  return (
                    <div className="Activity-FullCalendar">
                      <div className="Cotenedor-image">
                        <img
                          src={a.FotoActividad}
                          width="100%"
                          height="auto"
                        ></img>
                      </div>

                      <div className="Contenedor-Contenido">
                        <h2>Titulo: {a.Titulo}</h2>
                        <h3>Descripcion: {a.Descripcion}</h3>
                        <h3>Area: {a.Area} </h3>
                        <h3>Departamento: {a.Departamento} </h3>
                        <h3>Fecha Inicio: {a.Inicio} </h3>
                        <h3>Fecha Fin: {a.Fin}</h3>
                        <h3>Presupuesto:{a.Presupuesto} </h3>
                        <h3>
                          <strong>Respuesta en la aplicación</strong>
                        </h3>
                        <h3>Asistiran: {a.ContAsistire}</h3>
                        <h3>Les interesa: {a.ContTeInteresa}</h3>
                        <h3>No les interesa: {a.ContNoMeIteresa}</h3>
                        <h3>
                          <strong>Resultados de la actividad</strong>
                        </h3>
                        <Form
                          action={"/Editar/Actividad/" + a._id}
                          method="post"
                        >
                          <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>Número de Asistencia*</Form.Label>
                              <Form.Control
                                type="number"
                                placeholder="Asistencia"
                                name="Asistencia"
                                required
                                defaultValue={a.Asistencia || ""}
                              />
                            </Form.Group>

                            <Form.Group
                              as={Col}
                              controlId="exampleForm.ControlSelect1"
                            >
                              <Form.Label>Resultado</Form.Label>
                              <Form.Control
                                as="select"
                                name="Resultado"
                                defaultValue={a.Resultado || ""}
                              >
                                <option value="Excelente">Excelente</option>
                                <option value="Muy Bueno">Muy Bueno</option>
                                <option value="Bueno">Bueno</option>
                                <option value="Masomenos">Masomenos</option>
                                <option value="Malo">Malo</option>
                              </Form.Control>
                            </Form.Group>
                          </Form.Row>
                          {/* <Button type="submit" variant="outline-primary">
                            Guardar
                          </Button> */}
                        </Form>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  toggleWeekends() {
    this.setState({
      // update a property
      calendarWeekends: !this.state.calendarWeekends,
    });
  }

  gotoPast() {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  }

  handleDateClick(arg) {
    var actividad = this.iglesiafiltrada.Actividades.filter((a) => {
      //console.log(a.Inicio, arg.dateStr, a.Inicio == arg.dateStr)
      if (a.Inicio == arg.dateStr) {
        return a;
      }
    });
    //console.log('FECHA--------------', actividad);
    if (actividad.length > 0) {
      this.setState({
        // add new event data
        show: true,
        actividad: actividad,
        dia: arg.dateStr,
      });
    } else {
      this.setState({
        // add new event data
        show: true,
        actividad: "nada",
        dia: arg.dateStr,
      });
    }
  }
}
export default POAGENERAL;

//show: true
/*
<div className='demo-app-top'>
            <button onClick={this.toggleWeekends}>toggle weekends</button>&nbsp;
            <button onClick={this.gotoPast}>go to a date in the past</button>&nbsp;
            (also, click a date/time to add an event)
          </div>


           //Inicio: {a.Inicio}
*/
