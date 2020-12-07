import React from 'react';
import './Template.css';

class Project extends React.Component {
  
  render(){
    return (
      <div className="container" id={this.props.name}>         
        <div class="half-container image ">
          Image
        </div>
        <div class="half-container description" >
          Description
        </div>        
      </div>
    );
  }  
}

export default Project;