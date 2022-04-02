import './barraseciones-estilos.css'
import React from 'react';
import BarraUsuarios from '../navbar/navbar';
import {Nav, Container} from 'react-bootstrap';
import { Router } from 'react-router-dom';
export default class barraseciones extends React.Component {
  render() {
    return (
      <Container>
      <BarraUsuarios/>
        <Container id='seccionesbar'>
        

        
        <Nav justify variant="tabs" defaultActiveKey="/home" >
        <Nav.Item>
          <Nav.Link href="/home">COMPAÑIA GILIBERT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">SECCION 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">SECCION 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">SECCION 3</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">SECCION 4</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5">SECCION 5</Nav.Link>
        </Nav.Item>
      </Nav>
      
     </Container>
     </Container>
    )
  }
}
