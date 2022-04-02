import React from 'react';
import './botonesopciones.css'
import { Button, Container} from "react-bootstrap";
import {AiOutlineCamera, AiOutlineFlag}  from "react-icons/ai";
import { BiShieldAlt2 } from "react-icons/bi";
import Descripcioncompañia from '../descripcioncompañia/descripcioncompañia';
import Himno from '../himno/himno';
import Cardpageimages from '../cardpageimages/cardpageimages'

export default class BarraUsuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHimno :  false,      
      showDescripcion : true,
      mostrarimagenes: false,

    };
  }

  mostrarhimno(){
    this.setState({showHimno: true,
                  showDescripcion: false,
                  motrarimagenes: false,
    
    })
    
    
  }

  mostradescripcion(){
    this.setState({showHimno: false,
                  showDescripcion: true,
                  mostrarimagenes: false,
    
    })
    
    
  }

  mostrarimagenes(){
    
    this.setState({showHimno: false,
                  showDescripcion: false,
                  mostrarimagenes: true,
    
    })
    
    
  }
  
 
  render() {
    let Contenidomostrar;
    const mostrarhimno = this.state.showHimno;
    const mostradescripcion = this.state.showDescripcion;
    const mostrarimagenes = this.state.mostrarimagenes;
    if(mostrarhimno){
      Contenidomostrar = <Himno/>;   
    }

    if(mostradescripcion){
      Contenidomostrar = <Descripcioncompañia/>
    }

    if(mostrarimagenes){
      Contenidomostrar = <Cardpageimages/> 
    }

    return (
     
    <Container>
    <Button variant="outline-primary" onClick={()=> this.mostradescripcion()}> <AiOutlineFlag/> Nuestra Mision</Button>
    <Button variant="outline-warning" onClick={() => this.mostrarhimno()}> <BiShieldAlt2/> Himno y logo</Button>
    <Button variant="outline-success" onClick={() => this.mostrarimagenes()} > <AiOutlineCamera/> Fotos </Button>
    
   
   
     {Contenidomostrar}



    </Container>
    )
  }
}

