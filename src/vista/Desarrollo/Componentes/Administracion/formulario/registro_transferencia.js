import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWluYXI3IiwiYSI6ImNsa2JjdTc3MTBlajMzam8zbDBpbjZ5djUifQ.FaV8jPii2YjefDm2MjX38g";


class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      iglesias: window.datos.iglesias,
      lng: -66.1599,
      lat: -17.379,
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
      .setLngLat([-66.1599, -17.379])
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
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>CI*</Form.Label>
              <Form.Control type="number" placeholder="CI" name="Ci" required />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Contraseña*</Form.Label>
              <Form.Control
                type="Password"
                placeholder="Contraseña"
                name="Contraseña"
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Nombre*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                name="Nombre"
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Apellido_Paterno*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellido Paterno"
                name="Apellido_Paterno"
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Apellido_Materno</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellido Materno"
                name="Apellido_Materno"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Label>Genero</Form.Label>
              <Form.Control as="select" name="Genero">
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="number"
                placeholder="Celular"
                name="Contacto"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" name="Email" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Fecha_de_nacimiento</Form.Label>
              <Form.Control type="date" name="Fecha_Nacimiento" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Lugar de nacimiento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Lugar de nacimiento"
                name="Lugar_Nacimiento"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Numero Reg Civil</Form.Label>
              <Form.Control
                type="text"
                placeholder="Numero Reg Civil"
                name="Numero_Registro_Civil"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Profesion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Profesion"
                name="Profesion"
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Label>Dirección</Form.Label>
          <div className="containerMap">
            {/* <div className="sidebar">
              Latitud: {lat} | Longitud: {lng} | Zoom: {zoom}
            </div> */}
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
            {/* <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="direccion" name="Direccion" />
                        </Form.Group> */}
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Label>Estado_civil</Form.Label>
              <Form.Control as="select" name="Estado_Civil">
                <option value="Solter@">Solter@</option>
                <option value="Casad@">Casad@</option>
                <option value="Viud@">Viud@</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Label>Cargo en la Iglesia</Form.Label>
              <Form.Control as="select" name="Cargo_Ministerial">
                <option value="Ninguno">Ninguno</option>
                <option value="Anciano">Anciano</option>
                <option value="Diacono">Diacono</option>
                <option value="Diaconisa">Diaconisa</option>
                <option value="Soc. Juvenil">Soc. Juvenil</option>
                <option value="Soc. Femenil">Soc. Femenil</option>
                <option value="Min. Pre Juvenil">Min. Pre Juvenil</option>
                <option value="Oansa">Oansa</option>
                <option value="Superintendencia">Superintendencia</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Imagen Membresia</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                name="Imagen_Membresia"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Foto Perfil</Form.Label>
              <Form.Control type="file" accept="image/*" name="FotoPerfil" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Fecha_Bautizo</Form.Label>
              <Form.Control type="date" name="Fecha_Bautizo" required />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Carta de Transferencia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Carta de Transferencia"
                name="Carta_Transferencia"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Fecha de Transferencia</Form.Label>
              <Form.Control type="date" name="Fecha_Transferencia" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Iglesia de Salida</Form.Label>
              <Form.Control as="select" name="Iglesia_Salida">
                {this.state.iglesias.map((iglesia) => {
                  return (
                    <option value={iglesia._id} /*selected={option.selected}*/>
                      {iglesia.Nombre}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
          </Form.Row>
        </div>
      </div>
    );
  }
}
export default Formulario;
