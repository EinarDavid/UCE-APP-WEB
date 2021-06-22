import React from 'react';

class Galeria extends React.Component {
    render() {
        return (
            <div className="section-wrap photogallery photogallery-gridview white">
                <div className="photogallery-images">
                    {
                        window.datos.Iglesia.Fotos.map((a) => {
                            return (
                                <div className="photogallery-images-frame">
                                    <img src={'/fotos/Iglesias/' + a} width="auto" height="150px"/>
                                </div>
                            )
                        })

                    }
                </div>
            </div>

        );
    }
}
export default Galeria;
