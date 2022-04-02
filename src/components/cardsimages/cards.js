import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import "./cards.css";
export default class cards extends Component {
  render() {
    
    const imagen = this.props.message
    const autor = "Edwin Triana";   
    return (
      
      <Container id="">
        <Card border="success" id="diseñocard">
          <Card.Img src={require('../../resources' + imagen)} width="200" height="300" />
          <Card.Body>
            <Card.Text>foto tomada por : {autor}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">foto publicada : {autor} </small>
          </Card.Footer>
        </Card>
      </Container>
    );
  }
}
