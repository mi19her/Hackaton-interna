import React, { useState } from 'react';
import { Inicio } from '../components/Inicio'
import { RedesSociales } from '../components/RedesSociales'
import { LinkCatalogo } from '../components/LinkCatalogo';
import { Premios } from '../components/Premios';

export const Consultora = () =>{
    const [mostrar, setMostrar] = useState(false)

    return(
        <div className="flex" >
          <Inicio click={()=>{
              setMostrar(true)
          }}/>
          {mostrar === true?
          <RedesSociales/>
          :null}
          <h5>GANA MÁS</h5>
          <LinkCatalogo/>
          <h5>PREMIOS DEL MES</h5>
          <Premios/>
          </div>        
    )
}