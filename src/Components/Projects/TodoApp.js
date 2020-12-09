import React from 'react';
import './TodoApp.css';
import image from '../../media/images/Projects-ToDoApp.gif'

class Project extends React.Component {
  linkClick(){
    window.location.href = 'https://github.com/IvanDerlich/to-do';
  }
  
  render(){
    return (
      <div className="container" id={this.props.name}>         
        <div class="image-container todo-app ">         
          <img src={image} alt={image}></img>
        </div>
        <div class="description  reverse" >                                
          <div class="title">To Do App</div>
          <div class="text">A Single Page Aplication using only JavaScipt</div>
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