import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import './NewWineForm.css'


function NewWineForm(props){
  let _name = null;
  let _image = null;
  let _origin = null;
  let _price = null;
  let _keywords = null;
  let _pairings = null;

  function handleNewWineFormSubmission(event) {
    event.preventDefault();
    props.onNewWineCreation({name: _name.value, image: _image.value, origin: _origin.value, price: _price.value, keywords: _keywords.value, pairings: _pairings.value, id: v4()});
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
    marginBottom: "20vh"
  }

  return(
    <div style={formSize}>
    <div class="container">
      <form onSubmit={handleNewWineFormSubmission}>
        <div class="row">
          <div class="col-25">
            <label for="name">Name of Wine</label>
          </div>
          <div class="col-75">
          <input
          type='text'
          id='name'
          ref={(input) => {_name = input;}}/>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="image">Wine Image</label>
          </div>
          <div class="col-75">
          <input
          type='text'
          id='image'
          ref={(input) => {_image = input;}}/>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="origin">Origin</label>
          </div>
          <div class="col-75">
          <input
          type='text'
          id='origin'
          ref={(input) => {_origin = input;}}/>
          </div>
        </div>
    <div class="row">
      <div class="col-25">
        <label for="price">Price</label>
      </div>
      <div class="col-75">
      <input
      type='text'
      id='price'
      ref={(input) => {_price = input;}}/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="keywords">Tasting Notes</label>
      </div>
      <div class="col-75">
      <input
      type='text'
      id='keywords'
      ref={(input) => {_keywords = input;}}/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="pairings">Food Pairing</label>
      </div>
      <div class="col-75">
      <input
      type='text'
      id='pairings'
      ref={(input) => {_pairings = input;}}/>
      </div>
    </div>
        <div class="row">
          <input value="Submit" type="submit"/>
        </div>
      </form>
    </div>
    </div>
  );
}

NewWineForm.propTypes = {
  onNewWineCreation: PropTypes.func
};


export default NewWineForm;
