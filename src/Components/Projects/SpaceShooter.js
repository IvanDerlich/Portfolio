import React from 'react';
import './SpaceShooter.css';
import image from '../../media/images/Projects-SpaceShooter.gif'

class Project extends React.Component {
  
  render(){
    const openNewTab = this.props.clickHandler;
    return (
      <div className="container" id={this.props.name}>         
        <div class="image-container space-shooter">         
          <img src={image} alt={image}></img>
        </div>
        <div class="description" >
          <div class="title">Space Shooter</div>
          <div class="text">A space shooter like old times arcade games.</div>
          <div class="text">Save the Earth by shooting alien invaders in space.</div>
          <div class="text">If you want to play, go to "See Project" for instructions.</div>
          <div class="text">Desktop only. Doesn't work on mobile yet.</div>
          <div class="tags">
            <div>JavaScript</div>
            <div>Phaser</div>
          </div>
          <a
            onClick={openNewTab}
            onMouseDown={openNewTab}
            href="https://github.com/IvanDerlich/space-shooter-game" class="link"
            >
            See Project
          </a>
          <a
            onClick={openNewTab}
            onMouseDown={openNewTab} 
            href="https://ivanderlich-space-shooter.netlify.app/" class="link">
            Live Version
          </a>
        </div>        
      </div>
    );
  }  
}

export default Project;