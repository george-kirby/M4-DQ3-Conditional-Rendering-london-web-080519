import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      currentTab: 'profile'
    }
  }
  
  changeCurrentTab = (newTab) => {
    this.setState({currentTab: newTab})
  }

  
  render() {
    
    /*
    
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?
    
    */

    const tabDisplay = {
      "profile": Profile(),
      "photo": Photos(),
      "cocktail": Cocktails(),
      "pokemon": <Pokemon/>
    }

    const detailsToDisplay = <div>
      {tabDisplay[this.state.currentTab]}
    </div>

    return (
      <div>
        <MenuBar currentTab={this.state.currentTab} changeCurrentTab={this.changeCurrentTab}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
