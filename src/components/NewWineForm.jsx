import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button } from 'react-bootstrap';

function NewWineForm(props){
  let _name = null;
  let _origin = null;
  let _price = null;
  let _keywords = null;
  let _pairings = null;

  const createButton = {
    marginBottom: "15px"
  }

  function handleNewWineFormSubmission(event) {
    event.preventDefault();
    props.onWineCreation({name: _name.value, origin: _origin.value, price: _price.value, keywords: _keywords.value, pairings: _pairings.value, id: v4()});
    _name.value = '';
    _origin.value = '';
    _price.value = '';
    _keywords.value = '';
    _pairings.value = '';
  }

  return(


    <Form onSubmit={handleNewWineFormSubmission}>
      <Form.Group controlId="name.ControlInput1">
        <Form.Label>Name of Wine</Form.Label>
        <Form.Control type="text" id='name' ref={(input) => {_name = input;}} placeholder="Chateau Miraval Cotes de Provence" />
      </Form.Group>
      <Form.Group controlId="origin.ControlInput2">
        <Form.Label>Origin</Form.Label>
        <Form.Control as="text" id='origin' ref={(input) => {_origin = input;}} placeholder="Provence, Florence"/>
      </Form.Group>
      <Form.Group controlId="price.ControlInput3">
        <Form.Label>Bottle Price</Form.Label>
        <Form.Control type="text" id='price' ref={(input) => {_price = input;}} placeholder="$16" />
      </Form.Group>
      <Form.Group controlId="keywords.ControlInput4">
        <Form.Label>Keywords</Form.Label>
        <Form.Control type="text" id='keywords' ref={(input) => {_keywords = input;}} placeholder="Rose, Cinsaut - Grenache, Crisp, Dry" />
      </Form.Group>
      <Form.Group controlId="keywords.ControlInput5">
        <Form.Label>Pairings</Form.Label>
        <Form.Control type="text" id='pairings' ref={(input) => {_pairings = input;}} placeholder="Rose, Cinsaut - Grenache, Crisp, Dry" />
      </Form.Group>
      <Button style={createButton} variant="info" type='submit'>Create</Button>
    </Form>

  );
}

NewWineForm.propTypes = {
  onWineCreation: PropTypes.func
};

export default NewWineForm;
