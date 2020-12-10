import React from 'react';
import './WeatherApp.css';
import image from '../../media/images/Projects-WeatherApp.gif'

class Project extends React.Component {
  
  render(){
    return (
      <div className="container" id={this.props.name}>         
        <div class="image-container weather-app">         
          <img src={image} alt={image}></img>
        </div>
        <div class="description" >
          <div class="title">Weather App</div>
          <div class="text">A JavaScript App that makes API calls</div>
          <div class="tags">
            <div>JavaScript</div>
            <div>HTML</div>
            <div>CSS</div>
          </div>
          <a href="https://github.com/IvanDerlich/weather-app" class="link">
            See Project
          </a>
          <a href="http://ivanderlich-weather-app.surge.sh/" class="link">
            Live Version
          </a>
        </div>        
      </div>
    );
  }  
}

export default Project;