import React from 'react';
import'../css/stylos.css'


export const LinkCatalogo = () =>{
    return(
        <div className="divprod" >
            <div className="vistaproduct">
            <img className="catalogo"  src="https://cdn1-prd.beautymovers.com/sys-master/s3medias/hf4/hc0/9123765092382/200087496_productPicture_prodGallery_superZoom" alt=""/>
            <p>Ruborizador Pink</p>
            <p>Precio Publico: S/55</p>
            <p>Precio para ti: S/43</p>
            </div>
            <div className="vistaproduct">
            <img className="catalogo"  src="https://cdn1-prd.beautymovers.com/sys-master/s3medias/he8/hce/9123680387102/200093715_productPicture_prodGallery_superZoom" alt=""/>
            <p>Base Primer facial</p>
            <p>Precio Publico: S/55</p>
            <p>Precio para ti: S/43</p>
            </div>
            <div className="vistaproduct">
            <img className="catalogo"  src="https://cdn1-prd.beautymovers.com/sys-master/s3medias/h7e/hef/9126839681054/200084722_productPicture_prodGallery_superZoom" alt=""/>
            <p>Colonia Fresa</p>
            <p>Precio Publico: S/55</p>
            <p>Precio para ti: S/43</p>
            </div>
        </div>
    )
}