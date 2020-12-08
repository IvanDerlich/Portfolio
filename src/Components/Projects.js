import './Projects.css';
import SpaceShooter from './Projects/SpaceShooter'
import Fakebook from './Projects/Fakebook'

function Projects() {
  return (
    <div className="Projects" id="projects"> 
      <SpaceShooter></SpaceShooter>
      <Fakebook></Fakebook>
    </div>
  );
}

export default Projects;