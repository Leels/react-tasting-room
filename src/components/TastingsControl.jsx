import React from 'react';
import WineCellar from './WineCellar';
import Menu from './Menu';
import Tastings from './Tastings';

class TastingsControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tastingsVisibleOnPage: false
    };
    this.handleTastingsTroubleshootingConfirmation = this.handleTastingsTroubleshootingConfirmation.bind(this);
 }

 handleTastingsTroubleshootingConfirmation(){
   this.setState({tastingsVisibleOnPage: true});
 }

 render(){
   let currentlyVisibleContent = null;
    if (this.state.tastingsVisibleOnPage){
     currentlyVisibleContent = <Tastings />;
    } else {
      currentlyVisibleContent = <Menu onTastingsTroubleshootingConfirmation={this.handleTastingsTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default TastingsControl;
