import './Projects.css';
import SpaceShooter from './Projects/SpaceShooter'
import Fakebook from './Projects/Fakebook'
import WeatherApp from './Projects/WeatherApp'
import ToDoApp from './Projects/TodoApp'
import Calculator from './Projects/Calculator'

function Projects(props) {
  const clickHandler= props.clickHandler
  return (    
    <div className="Projects" id="projects">
      <SpaceShooter clickHandler={clickHandler}/>
      <Fakebook clickHandler={clickHandler}/>
      <WeatherApp clickHandler={clickHandler}/>
      <ToDoApp clickHandler={clickHandler}/>
      <Calculator clickHandler={clickHandler}/>
      <div 
        onClick={clickHandler}
        onMouseDown={clickHandler}
        class="more-container">
        <a href="https://github.com/Ivanderlich"        
          class="link more">
          More Projects
        </a>
      </div>
    </div>
  )
}

export default Projects;