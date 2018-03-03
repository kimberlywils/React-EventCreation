import React, { Component } from 'react';
import '../css/Style.css';
import '../css/CreateEvent.css';
import '../css/SeeEvent.css';

class MEvent extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
			theevent:'',
            thetime:'',
			theMtime:'',
            avatar:''
        }
        
		this.eventChange = this.eventChange.bind(this);
		this.timeChange = this.timeChange.bind(this);
		this.timeMChange = this.timeMChange.bind(this);
        this.makeEvent= this.makeEvent.bind(this);
        this.imageChange = this.imageChange.bind(this);
            
	}

	eventChange(evt){
        
        var uevent = evt.target.value;
        
        this.setState({
            theevent:uevent
        })
    }
	
	timeChange(evt){
        
        var utime = evt.target.value;
        
        this.setState({
            thetime:utime
        })
    }
	
	timeMChange(evt){
        
        var uMtime = evt.target.value;
        
        this.setState({
            theMtime:uMtime
        })
    }
	
    makeEvent(){
        var obj = {
            thetime: this.state.thetime,
			theMtime: this.state.theMtime,
			theevent: this.state.theevent,
            avatar: this.state.avatar
			
        }
        
        this.props.pushEvent(obj);
        
    }
    
    imageChange(evt){
        var src = evt.target.src;
        this.setState({
            avatar:src
        })
    }
    
    
  render() {  
    return (
        
      <div className='eventsAll'>
		<div className='eventsAllin'>
		<div>
		<div className='titles'>event</div>
        <textarea className='eventInp' type='text' placeholder='type event' onChange={this.eventChange}/>
		</div>
    
		<div className='titles'>time</div>
		<div className='timeAllInp'>
        <input className='hourInp' maxLength='2' type='number' placeholder='00' onChange={this.timeChange}/>
		<div className='timeB'>:</div>
		<input className='minuteInp' maxLength='2' type='number' placeholder='00' onChange={this.timeMChange}/>
		</div>
		
		<div className='imgsAllCont'>
		<div className='titles'></div>
		<div className='imgsCont'>
		<div className='iconImgs'>
        <img src={require('../imgs/smile.png')} className='img1' onClick={this.imageChange}/>
		</div>
	
		<div className='iconImgs'>
        <img src={require('../imgs/meh.png')} className='img2' onClick={this.imageChange}/>
		</div>
		
		<div className='iconImgs'>
		<img src={require('../imgs/frown.png')} className='img3' onClick={this.imageChange}/>
		</div>
		
		</div>
		</div>
		
		<div className='makeBtnCont'>
        <button className='createEventBtn' onClick={this.makeEvent}>make event</button>
		</div>
		</div>
      </div>
    );
  }
}

export default MEvent;
