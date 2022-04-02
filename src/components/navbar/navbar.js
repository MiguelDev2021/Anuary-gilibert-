import React from 'react';

import { Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import LogoPrincipal from "../../logos/logo-pagina.jpg"
export default class BarraUsuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 
 
  render() {
    return (
    
    <Container>
    <Navbar fixed='top' expand='lg' variant="dark" bg="success"  >
    <Container >
    <Navbar.Brand href="#home">
    <img
        src={LogoPrincipal}
        width="300"
        height="80"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />

    </Navbar.Brand>
    
    </Container>
  </Navbar>
  </Container>  

     
    )
  }
}

