import React from 'react';
import WineList from './WineList';
import NewWineForm from './NewWineForm';
import PropTypes from 'prop-types';
import CreateWineButton from './CreateWineButton';

class NewWineControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleShootingConfirmation = this.handleTroubleShootingConfirmation.bind(this);
  }

  handleTroubleShootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }


  render(){
    let currentlyVisibleContent = null;

    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewWineForm onNewWineCreation={this.props.onNewWineCreation}/>;
    } else {
      currentlyVisibleContent = <CreateWineButton onTroubleshootingConfirmation={this.handleTroubleShootingConfirmation}/>;
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
