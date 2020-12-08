import React from 'react';
import './Template.css';
import spaceShooterImage from '../media/images/Projects-SpaceShooter.gif'

class Project extends React.Component {
  
  render(){
    return (
      <div className="container" id={this.props.name}>         
        <div class="half-container image ">         
          <img src={spaceShooterImage} alt="Space Shooter"></img>
        </div>
        <div class="half-container description" >
          Description
        </div>        
      </div>
    );
  }  
}

export default Project;