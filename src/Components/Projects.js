import './Projects.css';
import SpaceShooter from './Projects/SpaceShooter'
import Fakebook from './Projects/Fakebook'
import WeatherApp from './Projects/WeatherApp'
import ToDoApp from './Projects/TodoApp'

function moreClick(){  
  window.location.href = "https://github.com/Ivanderlich"
}

function Projects() {
  return (
    <div className="Projects" id="projects">
      <SpaceShooter></SpaceShooter>
      <Fakebook></Fakebook>
      <WeatherApp></WeatherApp>
      <ToDoApp></ToDoApp>
      <div class="more-container">
        <div onClick={moreClick} class="link more">More Projects</div>
      </div>
    </div>
  )
}

export default Projects;