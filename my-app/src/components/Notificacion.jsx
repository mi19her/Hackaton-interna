import React from 'react'
import { Form } from 'react-bootstrap'
import '../css/main.css'
import {Link} from 'react-router-dom';


export const Notificacion = () => {
  return (
    <Form className="login-form">
      <li className="buton"><Link to="/notificacion">Atrás</Link></li>
      <div className="cabecera-pedidos">
        <h2 className="mt-5 mb-5">Mis pedidos</h2>
        <h6 className="mb-9">CLIENTE</h6>
        <p className="ps">Mayra Salazar</p>
        <p className="ps mb-5">Teléfono : 973431434</p>
      </div>
      <div className=" total mb-6">
        <h6>Total</h6>
        <p className="mb-4">S/218.99</p>
      </div>
      <div className="container-fluid">
        <h4>PRODUCTOS</h4>
        <div className="contenedor">
          <img className ="imagenes"src="https://cdn1-prd.beautymovers.com/sys-master/s3medias/hfd/h06/9124200775710/200093188_productPicture_prodGallery_superZoom" alt="" />
          <div>
            <p>  PERFUMES
            DIOR  GRAND BAL
            PIECE UNIQUE
           </p>
            <p>$1,840.00</p>
            <p>Quanty: 1</p>
          </div>
        </div>
        <div className="contenedor">
          <img className="imagenes"src="https://cdn1-prd.beautymovers.com/sys-master/s3medias/h5b/h5a/9123764174878/200084479_productPicture_prodGallery_superZoom" alt="" />
          <div>
            <p>  PERFUMES
            DIOR  GRAND BAL
            PIECE UNIQUE
            </p>
            <p>$1,840.00</p>
            <p>Quanty: 1</p>
          </div>
        </div>
      </div>
    </Form>

  );
}
export default Notificacion