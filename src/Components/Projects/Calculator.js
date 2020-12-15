import React from 'react';
import './Calculator.css';
import image from '../../media/images/Projects-Calculator.gif'

class Calculator extends React.Component {
  
  render(){
    const openNewTab = this.props.clickHandler;
    return (
      <div className="container" id={this.props.name}>         
        <div class="image-container todo-app ">         
          <img src={image} alt={image}></img>
        </div>
        <div class="description" >                                
          <div class="title">Calculator</div>
          <div class="text">A calculator with the mechanics of the old-time calculators</div>
          <div class="text">Built with React.js and deployed to Heroku</div>
          <div class="tags">
            <div>React.js</div>
            <div>HTML</div>
            <div>CSS</div>
          </div>
          <a
            onClick={openNewTab}
            onMouseDown={openNewTab} 
            href="https://github.com/IvanDerlich/Calculator" class="link">
            See Project
          </a>
          <a
            onClick={openNewTab}
            onMouseDown={openNewTab} 
            href="https://ivanderlich-calculator.herokuapp.com/" class="link">
            Live Version
          </a>
        </div>        
      </div>
    );
  }  
}

export default Calculator;