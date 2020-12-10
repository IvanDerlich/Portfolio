import './Projects.css';
import SpaceShooter from './Projects/SpaceShooter'
import Fakebook from './Projects/Fakebook'
import WeatherApp from './Projects/WeatherApp'
import ToDoApp from './Projects/TodoApp'

function Projects() {
  
  return (
    <div className="Projects" id="projects">
      <SpaceShooter></SpaceShooter>
      <Fakebook></Fakebook>
      <WeatherApp></WeatherApp>
      <ToDoApp></ToDoApp>
      <div class="more-container">
        <a href="https://github.com/Ivanderlich"        
          class="link more">
          More Projects
        </a>
      </div>
    </div>
  )
}

export default Projects;