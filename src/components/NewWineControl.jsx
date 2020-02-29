import React from 'react';
import WineList from './WineList';
import NewWineForm from './NewWineForm';
import PropTypes from 'prop-types';
import NewWineButton from './NewWineButton';


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
      currentlyVisibleContent = <NewWineForm />;
    } else {
      currentlyVisibleContent = <WineList onNewWineFormButton={this.handleNewWineFormButton}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewWineControl;
