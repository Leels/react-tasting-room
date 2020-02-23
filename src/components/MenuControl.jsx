import React from 'react';
import WineCellar from './WineCellar';
import Menu from './Menu';
import Tastings from './Tastings';

class MenuControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      winesVisibleOnPage: false,
      tastingsVisibleOnPage: false
    };
    this.handleWinesTroubleshootingConfirmation = this.handleWinesTroubleshootingConfirmation.bind(this);
    this.handleTastingsTroubleshootingConfirmation = this.handleTastingsTroubleshootingConfirmation.bind(this);
 }

 handleWinesTroubleshootingConfirmation(){
   this.setState({winesVisibleOnPage: true});
 }

 handleTastingsTroubleshootingConfirmation(){
   this.setState({tastingsVisibleOnPage: true});
 }

 render(){
   let currentlyVisibleContent = null;
   if (this.state.winesVisibleOnPage){
     currentlyVisibleContent = <WineCellar />;
   } else if (this.state.tastingsVisibleOnPage){
     currentlyVisibleContent = <Tastings />;
    } else {
      currentlyVisibleContent = <Menu onWinesTroubleshootingConfirmation={this.handleWinesTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default MenuControl;
