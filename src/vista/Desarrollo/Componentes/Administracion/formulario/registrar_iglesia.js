import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWluYXI3IiwiYSI6ImNsa2JjdTc3MTBlajMzam8zbDBpbjZ5djUifQ.FaV8jPii2YjefDm2MjX38g";


class Formulario extends Component {
  constructor() {
    super();
    this.state = {
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
      <div className="Form-registro">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nombre*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre*"
              name="Nombre"
              required
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
      </div>
    );
  }
}
export default Formulario;
