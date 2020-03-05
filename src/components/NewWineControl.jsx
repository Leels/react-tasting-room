import React from 'react';
import WineList from './WineList';
import NewWineForm from './NewWineForm';
import PropTypes from 'prop-types';
import Admin from './Admin';


class NewWineControl extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false
      };
      this.handleNewWineFormButton = this.handleNewWineFormButton.bind(this);
    }

    handleNewWineFormButton(){
      this.setState({formVisibleOnPage: true});

    }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewWineForm onNewWineCreation={this.props.onNewWineCreation}/>;
    } else {
      currentlyVisibleContent = <Admin onNewWineFormButton={this.handleNewWineFormButton}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewWineControl.propTypes = {
  onNewWineCreation: PropTypes.func
};

export default NewWineControl;
