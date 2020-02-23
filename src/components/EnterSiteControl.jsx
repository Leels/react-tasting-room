import React from 'react';
import Header from './Header'
import Menu from './Menu';

class EnterSiteControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
 }

 handleTroubleshootingConfirmation(){
   this.setState({formVisibleOnPage: true});
 }

 render(){
   let currentlyVisibleContent = null;
   if (this.state.formVisibleOnPage){
     currentlyVisibleContent = <Menu />;
    } else {
      currentlyVisibleContent = <Header onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default EnterSiteControl;
