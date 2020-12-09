import React from 'react';
import './WeatherApp.css';
import image from '../../media/images/Projects-WeatherApp.gif'

class Project extends React.Component {
  linkClick(){
    window.location.href = 'https://github.com/IvanDerlich/weather-app';
  }
  
  render(){
    return (
      <div className="container weather-app-container" id={this.props.name}>         
        <div class="image-container weather-app-image">         
          <img src={image} alt={image}></img>
        </div>
        <div class="description weather-app-description" >
          <div class="title">Weather App</div>
          <div class="text">A JavaScript App that makes API calls</div>
          <div class="tags">
            <div>JavaScript</div>
            <div>HTML</div>
            <div>CSS</div>
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