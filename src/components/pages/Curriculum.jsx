import React from "react";
import cvimg from '../img/CV_RamosRosalesEduardo.jpg'
import cvpdf from '../documentos/CV_RamosRosalesEduardo.pdf'
import '../../components/styles/Curriculum.css'

const Curriculum = () => {
    return (
        <div>
            <div className="descarga-contenedor">
                <a className="descarga" href={cvpdf} download>
                    {' '}
                    Descargar CV
                </a>            
            </div>

            <div className="imagen-contenedor">
                <img src={cvimg} />
            </div>
        </div>
    )
}

export default Curriculum