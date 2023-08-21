import React, { Component } from "react";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWluYXI3IiwiYSI6ImNsa2JjdTc3MTBlajMzam8zbDBpbjZ5djUifQ.FaV8jPii2YjefDm2MjX38g";

class Mapa extends Component {
  
  constructor(props) {
    super(props);
    console.log("Props---", props);
    this.state = {
      Location: props.Location,
      lng: -66.1599,
      lat: -17.379,
      zoom: 12,
    };
    this.mapContainer = React.createRef();
    this.componentDidMount2=this.componentDidMount2.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.Location !== prevProps.Location) {
      //console.log("-------------------------------Location",this.props.Location);
      this.setState({Location: this.props.Location})
      this.componentDidMount2();
    }
  }
  componentDidMount(){

    this.componentDidMount2()
  }
  componentDidMount2() {
    
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.on("load", () => {
      //console.log("#########################")
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

      this.state.Location.map((user) => {
        if (user.Latitud != undefined && user.Longitud != undefined) {
          //console.log("User-------", user.Latitud, user.Longitud, user.Nombre);
            var NombreCompleto=""
          if(user.Ci != undefined){
            NombreCompleto =user.Nombre +" " +user.Apellido_Paterno + " " +user.Apellido_Materno;
          }else{
            NombreCompleto =user.Nombre ;
          }
          const url ="https://www.google.com/maps?q=" + user.Latitud + "," + user.Longitud;
          const texto ='<strong>' +NombreCompleto +'</strong><p><a href=' +url + 'target="_blank" title="Opens in a new window">Google Maps</a></p>'

          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(texto);

          const marker = new mapboxgl.Marker({
            color: "#000000",
            draggable: false,
          })
            .setLngLat([user.Longitud, user.Latitud])
            .setPopup(popup)
            .addTo(map);

          marker.on("dragend", () => {
            const lngLat = marker.getLngLat();
            this.setState({ lng: lngLat.lng, lat: lngLat.lat });
          });
        }
      });
    });
  }

  render() {
    const { lng, lat, zoom } = this.state;
    return (
      <div>
        <div >
          <div ref={this.mapContainer} className="map-container" />
        </div>
      </div>
    );
  }
}
export default Mapa;

/*
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

    this.state.Location.map((user)=>{
        
        if(user.Latitud != undefined && user.Longitud != undefined){
            console.log('User-------',user.Latitud, user.Longitud )
            const marker = new mapboxgl.Marker({
                color: "#000000",
                draggable: false,
              })
                .setLngLat([user.Longitud, user.Latitud])
                .addTo(map);
                
              marker.on("dragend", () => {
                const lngLat = marker.getLngLat();
                this.setState({ lng: lngLat.lng, lat: lngLat.lat });
              });
        }
        
    })*/

/*
    
    map.addSource('places', {
            // This GeoJSON contains features that include an "icon"
            // property. The value of the "icon" property corresponds
            // to an image in the Mapbox Streets style's sprite.
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
                            'icon': 'art-gallery'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-66.1599, -17.379]
                        }
                    },
                    
                ]
            }
        });

        // Add a layer showing the places.
        map.addLayer({
            'id': 'places',
            'type': 'symbol',
            'source': 'places',
            'layout': {
                'icon-image': ['get', 'icon'],
                'icon-allow-overlap': true,
                'icon-size': 1.5
            }
        });*/
