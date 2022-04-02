import React from 'react';
import './estilospaginainicio.css'
import BarraUsuarios from '../navbar/navbar';
import { Container,Button ,Image  } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Barraseciones from '../barrasecciones/barraseciones';
import Imagen_principal from '../../resources/compañiamadrugada.jpg';
import Botonesopciones from '../botonesopciones/botonesopciones';
import Himno from '../himno/himno';

export default class paginainicio extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
      


    };
  }
    
     
    mostrar(){

      

    }

  
  render() {
    return( 
    <Container>
    <Barraseciones/>
    <Container id="letrero_compañia">
     <h2 > COMPAÑIA GILIBERT </h2> 
     <br/>
     <Container>


      </Container> 
      <Image src={Imagen_principal}>

      </Image>
     
      <Container id="boton_opciones" >
      
        <Botonesopciones/>  
      </Container>
      
     
   

    </Container>
    </Container>
 

    )
    }
  
  } 

  
  
