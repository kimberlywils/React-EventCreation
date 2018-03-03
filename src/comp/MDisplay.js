import React, { Component } from 'react';
import '../css/Style.css';
import '../css/CreateEvent.css';
import '../css/SeeEvent.css';

var num = 0;

class MDisplay extends Component {
    
    
    constructor(props){
        super(props);
        
        this.state = {
            keyword:""
        }
        
        this.filterEvents = this.filterEvents.bind(this);
           
    }
    
    filterEvents(evt){
        var val = evt.target.value;
        
        this.setState({
            keyword:val
        });
    }
  
    render() {
        
        var allEvents = [];
        var filter = this.props.events.filter((obj)=>{
            return (obj.theevent.indexOf(this.state.keyword) != -1);
        });
        
        for(var i = 0; i <filter.length; i++){
            var comp = (
            <div className='allEventsList' key={i}>
				
				<div>
				<img src={filter[i].avatar} height='60' />
				</div>
				
				<div className='descAll'>
				<div className='eventTitle'>{filter[i].theevent}
				</div>
				
				<div></div>
				
				<div className='timeDisplay'>
				{filter[i].thetime}
				<div>:</div>
				{filter[i].theMtime}
				</div>
				</div>
				
                </div>
            );
            
            allEvents.push(comp);
        }
        
    return (
        
      <div className='displayAllEvents'>
        <input className='eventFiltInp' type='text' onChange= {this.filterEvents} placeholder='filter'/>
        <div>
            {allEvents}
        </div>
    
      </div>
    );
  }
}

export default MDisplay;