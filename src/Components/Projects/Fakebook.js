import React from 'react';
import './Fakebook.css';
import image from '../../media/images/Projects-Fakebook.gif'

class Project extends React.Component {
  
  render(){
    const openNewTab = this.props.clickHandler;
    return (
      <div className="container" id={this.props.name}>  
        <div class="image-container fakebook">         
          <img src={image} alt="Space Shooter"></img>
        </div> 
        <div class="description reverse" >
          <div class="title">Fakebook</div>
          <div class="text">A Social Network with basic</div>
          <div class="text">functions from a real social network.</div>
          <div class="text">Built with Ruby on Rails and deployed in Heroku.</div>
          <div class="tags">          
            <div>Rails</div>
            <div>PostgresSQL</div>
            <div>Ruby</div>
          </div>
          <a
            onClick={openNewTab}
            onMouseDown={openNewTab} 
            href="https://github.com/IvanDerlich/Fakebook" class="link">
            See Project
          </a>
          <a
            onClick={openNewTab}
            onMouseDown={openNewTab} 
            href="https://afternoon-wave-75260.herokuapp.com/" class="link">
            Live Version
          </a>
        </div>   
            
      </div>
    );
  }  
}

export default Project;