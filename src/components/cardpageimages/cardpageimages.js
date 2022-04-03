import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Cards from '../cardsimages/cards'
import './cardpage.css'
export default class cardpageimages extends Component {

  {}
  constructor(props) {
    super(props);
    this.state = {
      
      


    };
  }


 

  render() {
    const imagenes =  require.context("../../resources", false, /\.JPG$/);
    const imagenesKeys= imagenes.keys();

    console.log(imagenesKeys)
    

    return (
       <Container id="container-fotos" >
          <Row xs={1} md={2} className="g-4">
            {
           
              imagenesKeys.map(imagenkey =>(
                <Col>
                <Cards message = {imagenkey.slice(1)} />
                </Col>
              ) )
            }
          
          </Row>
       </Container> 

    )
  }
}
