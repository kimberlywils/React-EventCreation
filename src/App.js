import React, { Component } from 'react';
import './css/Style.css';
import './css/CreateEvent.css';
import './css/SeeEvent.css';
import MControl from "./comp/MControls";
import MDisplay from "./comp/MDisplay";
import MEvent from "./comp/MEvent";

class App extends Component {
     
    constructor(props){
        super(props);
        
        this.state = {
            events: [],
            display:true
        }
        
        this.pushEvent = this.pushEvent.bind(this);
        this.filterEvents = this.filterEvents.bind(this);
        this.changeDisplay = this.changeDisplay.bind(this);
            
    }
   
    pushEvent(data){
       var arr = this.state.events;
        arr.push(data);
        
        this.setState({
            events:arr
        });
        
        console.log(arr);
    
    
    }

    filterEvents(){
    
    }
    
    changeDisplay(show){
        
       this.setState ({
           display:show
       })
        
    }
    
    
     
  render() {  
      
      var mycomp = null;
      if(this.state.display == false){
          mycomp = <MDisplay events={this.state.events}/>;
          
      } else {
          mycomp = <MEvent pushEvent={this.pushEvent}/>;
      }
      
    return (
      <div className="all">
	<div className="squarePop">
        <MControl changeDisplay={this.changeDisplay}/>
        {mycomp}
      </div>
	  </div>
        
    );
  }
}

export default App;
