import React from 'react';

class Actividades extends React.Component {
    render() {
        return (
            <div className="section-wrap fondo_area_estrategica" id="texto">
                <div className="section-row">
                    <div className="rowtitles">
                        <p className="rowtitle lighttext">
                            <font> Actividades</font>
                        </p>
                    </div>
                    <div className="grid row2">
                        {
                            window.datos.Iglesia.Actividades.map((a,i) => {
                                var fechaactual = new Date();

                                var fecha = new Date(a.Inicio);
                                fecha.setDate(fecha.getDate() + 2);

                                if (fechaactual <= fecha) {
                                    return (
                                        <div  key = {i}>
                                            <div className="imagecomponent col2 colspan_1_of_3 ">
                                                <div className="imagecomponent-image ">
                                                    <a> <img src={'/fotos/Iglesias/Actividad/' + a.FotoActividad}></img>
                                                    </a>
                                                </div>
                                                <p className="imagecomponent-title">
                                                    <font > {a.Titulo}</font>
                                                </p>
                                                <div className="imagecomponent-text">
                                                    <p ><font >{a.Descripcion} </font>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }


                    </div>
                </div>
            </div>
        );
    }
}
export default Actividades;
//<p style="vertical-align: inherit;"> Nombre Actividad</p>
/*
<div className="imagecomponent col2 colspan_1_of_3 ">
                            <div className="imagecomponent-image ">
                                <a ><img src="https://d9nqqwcssctr8.cloudfront.net/wp-content/uploads/2019/03/20013001/UNITED_People_Album-art-300x300.jpg"></img>
                                </a>
                            </div>
                            <p className="imagecomponent-title">
                            <font > Actividaasddes</font>
                            </p>
                            <div className="imagecomponent-text">
                            <p ><font > Actividades</font>
                                </p>
                            </div>
                        </div>
                        <div className="imagecomponent col2 colspan_1_of_3 ">
                            <div className="imagecomponent-image ">
                                <a><img src="https://d9nqqwcssctr8.cloudfront.net/wp-content/uploads/2019/09/12235647/HSW_Awake_Albumcover1-300x300.jpg"></img>
                                </a>
                            </div>
                            <p className="imagecomponent-title">
                            <font > Actividaasddes</font>
                            </p>
                            <div className="imagecomponent-text">
                                <p ><font > Actividades</font>
                                </p>
                            </div>
                        </div>
                        <div className="imagecomponent col2 colspan_1_of_3 ">
                            <div className="imagecomponent-image ">
                                <a ><img src="https://d9nqqwcssctr8.cloudfront.net/wp-content/uploads/2019/03/20013001/UNITED_People_Album-art-300x300.jpg"></img>
                                </a>
                            </div>
                            <p className="imagecomponent-title">
                            <font > Actividaasddes</font>
                            </p>
                            <div className="imagecomponent-text">
                            <p ><font > Actividades</font>
                                </p>
                            </div>
                        </div>
                        <div className="imagecomponent col2 colspan_1_of_3 ">
                            <div className="imagecomponent-image ">
                                <a ><img src="https://d9nqqwcssctr8.cloudfront.net/wp-content/uploads/2019/03/20013001/UNITED_People_Album-art-300x300.jpg"></img>
                                </a>
                            </div>
                            <p className="imagecomponent-title">
                            <font > Actividaasddes</font>
                            </p>
                            <div className="imagecomponent-text">
                            <p ><font > Actividades</font>
                                </p>
                            </div>
                        </div>
*/