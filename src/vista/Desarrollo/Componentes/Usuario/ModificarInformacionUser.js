import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWluYXI3IiwiYSI6ImNsa2JjdTc3MTBlajMzam8zbDBpbjZ5djUifQ.FaV8jPii2YjefDm2MjX38g";

class Formulario extends Component {
  constructor(props) {
    super(props);
    var Lng = -66.1599;
    var Lat = -17.379;
    if (window.datos.original.Longitud != undefined) {
      Lng = window.datos.original.Longitud;
      Lat = window.datos.original.Latitud;
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
              <Form.Label>Nombres*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                name="Nombre"
                required
                defaultValue={window.datos.original[this.props.id].Nombre}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellido Paterno"
                name="Apellido_Paterno"
                required
                defaultValue={
                  window.datos.original[this.props.id].Apellido_Paterno
                }
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellido Materno"
                name="Apellido_Materno"
                defaultValue={
                  window.datos.original[this.props.id].Apellido_Materno
                }
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Genero</Form.Label>
              <Form.Control
                as="select"
                name="Genero"
                defaultValue={window.datos.original[this.props.id].Genero}
              >
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="number"
                placeholder="Celular"
                name="Contacto"
                defaultValue={window.datos.original[this.props.id].Contacto}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Correo Electronico"
                name="Email"
                defaultValue={window.datos.original[this.props.id].Email}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control
                type="date"
                name="Fecha_Nacimiento"
                defaultValue={
                  window.datos.original[this.props.id].Fecha_Nacimiento
                }
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Lugar de nacimiento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Lugar de nacimiento"
                name="Lugar_Nacimiento"
                defaultValue={
                  window.datos.original[this.props.id].Lugar_Nacimiento
                }
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Profesión</Form.Label>
              <Form.Control
                type="text"
                placeholder="Profesión"
                name="Profesion"
                defaultValue={window.datos.original[this.props.id].Profesion}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="direccion"
                name="Direccion"
                defaultValue={window.datos.original[this.props.id].Direccion}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Estado_civil</Form.Label>
              <Form.Control
                as="select"
                name="Estado_Civil"
                defaultValue={window.datos.original[this.props.id].Estado_Civil}
              >
                <option value="Solter@">Solter@</option>
                <option value="Casad@">Casad@</option>
                <option value="Viud@">Viud@</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Label>Dirección</Form.Label>
          <div>
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
                *Si quieres modificar tu foto de perfil deselecciona el Checked
              </Form.Label>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Foto de Perfil</Form.Label>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <div className="Form-registro-Check">
              <Form.Group as={Col}>
                <Form.Control
                  type="checkbox"
                  name="MantenerFotoPerfil"
                  defaultChecked={true}
                />
              </Form.Group>
            </div>
            <Form.Group as={Col}>
              <Form.Control type="file" accept="image/*" name="FotoPerfil" />
            </Form.Group>
          </Form.Row>
        </div>
      </div>
    );
  }
}
export default Formulario;
