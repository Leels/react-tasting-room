import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function NewWineForm(){
  let _name = null;
  let _image = null;
  let _origin = null;
  let _price = null;
  let _keywords = null;
  let _pairings = null;

  function handleNewWineFormSubmission(event) {
    event.preventDefault();
    _name.value = '';
    _image.value = '';
    _origin.value = '';
    _price.value = '';
    _keywords.value = '';
    _pairings.value = '';
  }

  const createButton = {
    marginBottom: "15px"
  }

  const formSize = {
    height: "100vh"
  }

  return (
    <div style={formSize}>
    <form onSubmit={handleNewWineFormSubmission}>
    <input
    type='text'
    id='name'
    placeholder="Name of Wine"
    ref={(input) => {_name = input;}}/>
    <input
    type='text'
    id='image'
    placeholder="Wine Image"
    ref={(input) => {_image = input;}}/>
    <input
    type='text'
    id='origin'
    placeholder="Origin"
    ref={(input) => {_origin = input;}}/>
    <input
    id='price'
    placeholder='Price'
    ref={(input) => {_price = input;}}/>
    <input
    id='keywords'
    placeholder='Keywords'
    ref={(input) => {_keywords = input;}}/>
    <input
    id='pairings'
    placeholder='Pairings'
    ref={(input) => {_pairings = input;}}/>
    <button type='submit'>Create</button>
    </form>
    </div>

  );
}


export default NewWineForm;
