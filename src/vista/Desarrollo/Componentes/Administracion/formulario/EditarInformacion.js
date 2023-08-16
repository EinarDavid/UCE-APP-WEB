import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWluYXI3IiwiYSI6ImNsa2JjdTc3MTBlajMzam8zbDBpbjZ5djUifQ.FaV8jPii2YjefDm2MjX38g";


class Formulario extends Component {
 
  constructor() {
    super();
    var Lng = -66.1599;
    var Lat =-17.379;

    if(window.datos.Iglesia.Longitud != undefined){
      Lng = window.datos.Iglesia.Longitud;
      Lat = window.datos.Iglesia.Latitud;
    }
    this.state = {
      lng: Lng,
      lat: Lat,
      zoom: 12,
    };
    this.mapContainer = React.createRef();
  }
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    const marker = new mapboxgl.Marker({
      color: "#000000",
      draggable: true,
    })
      .setLngLat([lng, lat])
      .addTo(map);
    marker.on("dragend", () => {
      const lngLat = marker.getLngLat();
      this.setState({ lng: lngLat.lng, lat: lngLat.lat });
    });
  }
  render() {
    const { lng, lat, zoom } = this.state;
    return (
      <div>
        <div className="Form-registro">
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Nombre de la Iglesia*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de la Iglesia"
                name="Nombre"
                required
                defaultValue={window.datos.Iglesia.Nombre}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Denominación*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Denominación"
                name="Denominacion"
                required
                defaultValue={window.datos.Iglesia.Denominacion}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Titulo de la Descripción*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Titulo de la Descripción"
                name="Titulo_Descripcion"
                required
                defaultValue={window.datos.Iglesia.Titulo_Descripcion}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                placeholder="Descripcion"
                name="Descripcion"
                defaultValue={window.datos.Iglesia.Descripcion}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Misión</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                placeholder="Misión"
                name="Mision"
                required
                defaultValue={window.datos.Iglesia.Mision}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Visión</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                placeholder="Visión"
                name="Vision"
                required
                defaultValue={window.datos.Iglesia.Vision}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Numero de Celular</Form.Label>
              <Form.Control
                type="number"
                placeholder="Numero de Celular"
                name="NumeroCelular"
                defaultValue={window.datos.Iglesia.NumeroCelular}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Correo Electronico"
                name="Correo"
                defaultValue={window.datos.Iglesia.Correo}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Sitio Web de Facebook</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sitio Web de Facebook"
                name="Facebook"
                defaultValue={window.datos.Iglesia.Facebook}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Responsabilidad Social</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                placeholder="Responsabilidad Social"
                name="ResSocial"
                defaultValue={window.datos.Iglesia.ResSocial}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Pastores</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                placeholder="Pastores"
                name="Pastores"
                defaultValue={window.datos.Iglesia.Pastores}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Horarios de Servicio</Form.Label>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Lunes</Form.Label>
              <Form.Control
                type="text"
                placeholder="Lunes"
                name="Horario_Lunes"
                defaultValue={window.datos.Iglesia.Horario_Lunes}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Martes</Form.Label>
              <Form.Control
                type="text"
                placeholder="Martes"
                name="Horario_Martes"
                defaultValue={window.datos.Iglesia.Horario_Martes}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Miercoles</Form.Label>
              <Form.Control
                type="text"
                placeholder="Miercoles"
                name="Horario_Miercoles"
                defaultValue={window.datos.Iglesia.Horario_Miercoles}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Jueves</Form.Label>
              <Form.Control
                type="text"
                placeholder="Jueves"
                name="Horario_Jueves"
                defaultValue={window.datos.Iglesia.Horario_Jueves}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Viernes</Form.Label>
              <Form.Control
                type="text"
                placeholder="Viernes"
                name="Horario_Viernes"
                defaultValue={window.datos.Iglesia.Horario_Viernes}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Sábado</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sábado"
                name="Horario_Sabado"
                defaultValue={window.datos.Iglesia.Horario_Sabado}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Domingo</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                placeholder="Horario"
                name="Horario"
                defaultValue={window.datos.Iglesia.Horario}
              />
            </Form.Group>
          </Form.Row>
          <Form.Label>Dirección</Form.Label>
          <div >
            <div ref={this.mapContainer} className="map-container" />
          </div>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Latitud</Form.Label>
              <Form.Control
                type="text"
                placeholder="Latitud"
                name="Latitud"
                value={lat}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Longitud</Form.Label>
              <Form.Control
                type="text"
                placeholder="Longitud"
                name="Longitud"
                value={lng}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label className="Color-Advertencia">
                *Si quieres modificar las Imagenes deselecciona el Checked
              </Form.Label>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Logo</Form.Label>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Imagenes</Form.Label>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <div className="Form-registro-Check">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="checkbox"
                  name="MantenerLogo"
                  defaultChecked={true}
                />
              </Form.Group>
            </div>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="file" accept="image/*" name="Logo" />
            </Form.Group>
            <div className="Form-registro-Check">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="checkbox"
                  name="MantenerFotos"
                  defaultChecked={true}
                />
              </Form.Group>
            </div>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                type="file"
                accept="image/*"
                name="Fotos"
                multiple="multiple"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Imagenes Slider</Form.Label>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <div className="Form-registro-Check">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="checkbox"
                  name="MantenerFotosSlider"
                  defaultChecked={true}
                />
              </Form.Group>
            </div>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                type="file"
                accept="image/*"
                name="FotosSlider"
                multiple="multiple"
              />
            </Form.Group>
          </Form.Row>
        </div>
      </div>
    );
  }
}
export default Formulario;
