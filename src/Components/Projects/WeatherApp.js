import React from 'react';
import './WeatherApp.css';
import image from '../../media/images/Projects-WeatherApp.gif'

class Project extends React.Component {
  
  render(){
    const openNewTab = this.props.clickHandler;
    return (
      <div className="container" id={this.props.name}>         
        <div class="image-container weather-app">         
          <img src={image} alt={image}></img>
        </div>
        <div class="description" >
          <div class="title">Weather App</div>
          <div class="text">An app that tells you the weather all around the world.</div>
          <div class="text">Just type the city and it retrieves the weather from another server.</div>
          <div class="text">This app gets the info through asynchronous API calls.</div>
          <div class="tags">
            <div>JavaScript</div>
            <div>HTML</div>
            <div>CSS</div>
          </div>
          <a 
            onClick={openNewTab}
            onMouseDown={openNewTab}
            href="https://github.com/IvanDerlich/weather-app" class="link">
            See Project
          </a>
          <a
            onClick={openNewTab}
            onMouseDown={openNewTab} 
            href="http://ivanderlich-weather-app.surge.sh/" class="link">
            Live Version
          </a>
        </div>        
      </div>
    );
  }  
}

export default Project;