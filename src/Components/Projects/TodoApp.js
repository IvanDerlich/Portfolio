import React from 'react';
import './TodoApp.css';
import image from '../../media/images/Projects-ToDoApp.gif'

class Project extends React.Component {
  
  render(){
    const openNewTab = this.props.clickHandler;
    return (
      <div className="container" id={this.props.name}>         
        <div class="image-container todo-app ">         
          <img src={image} alt={image}></img>
        </div>
        <div class="description  reverse" >                                
          <div class="title">To Do App</div>
          <div class="text">A responsive and stateful web app</div>
          <div class="text">that helps you organize your tasks.</div>
          <div class="tags">
            <div>JavaScript</div>
            <div>HTML</div>
            <div>CSS</div>
          </div>
          <a
            onClick={openNewTab}
            onMouseDown={openNewTab} 
            href="https://github.com/IvanDerlich/to-do" class="link">
            See Project
          </a>
          <a
            onClick={openNewTab}
            onMouseDown={openNewTab} 
            href="https://ivanderlich.github.io/to-do/" class="link">
            Live Version
          </a>
        </div>        
      </div>
    );
  }  
}

export default Project;