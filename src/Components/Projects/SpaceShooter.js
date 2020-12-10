import React from 'react';
import './SpaceShooter.css';
import image from '../../media/images/Projects-SpaceShooter.gif'

class Project extends React.Component {
  
  render(){
    return (
      <div className="container" id={this.props.name}>         
        <div class="image-container space-shooter">         
          <img src={image} alt={image}></img>
        </div>
        <div class="description" >
          <div class="title">Space Shooter</div>
          <div class="text">An old-time style space shooter game</div>
          <div class="tags">
            <div>JavaScript</div>
            <div>Phaser</div>
          </div>
          <a href="https://github.com/IvanDerlich/space-shooter-game" class="link">
            See Project
          </a>
        </div>        
      </div>
    );
  }  
}

export default Project;