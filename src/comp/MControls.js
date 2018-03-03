import React, { Component } from 'react';
import '../css/Style.css';
import '../css/CreateEvent.css';
import '../css/SeeEvent.css';

class MControls extends Component {
    
     constructor(props){
        super(props);
        
        this.changeDisplay = this.changeDisplay.bind(this);
         this.changeCreate = this.changeCreate.bind(this);
           
    }
    
    changeDisplay(){
        this.props.changeDisplay(false);
    }
    
    changeCreate(){
        this.props.changeDisplay(true);
    }
  
    
    render() {
        
    return (
        
      <div className='btnsCont'>
        <button className="createBtn" onClick={this.changeCreate}>create event</button>
        <button className="listBtn" onClick={this.changeDisplay}>see events</button>
      </div>
    );
  }
}

export default MControls;