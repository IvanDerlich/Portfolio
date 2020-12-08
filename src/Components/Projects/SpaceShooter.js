import React from 'react';
import './SpaceShooter.css';
import image from '../../media/images/Projects-SpaceShooter.gif'

class Project extends React.Component {
  linkClick(){
    window.location.href = 'https://github.com/IvanDerlich/space-shooter-game';
  }
  
  render(){
    return (
      <div className="container space-shooter-container" id={this.props.name}>         
        <div class="image-container space-shooter-image">         
          <img src={image} alt={image}></img>
        </div>
        <div class="description space-shooter-description" >
          <div class="title">Space Shooter</div>
          <div class="text">An old-time style space shooter game</div>
          <div class="tags">
            <div>JavaScript</div>
            <div>Phaser</div>
          </div>
          <div onClick={this.linkClick} class="link">
            See Project
          </div>
        </div>        
      </div>
    );
  }  
}

export default Project;