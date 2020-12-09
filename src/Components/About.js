import './About.css';
import linktreeLink from '../media/images/linktree.jpeg'

function About() {
  return (
    <div className="About" id="about"> 
      <div class="myself">
        <div>
          <div class="title">About</div>
          <div class="title margin">Myself</div>
          <div class="elevator-pitch">I'm a full-stack software developer. I can provide you with the software infrastructure to make your ideas become a reality.</div>
          <div class="elevator-pitch">As a full-stack software developer I focus both on the aesthetics of your system, as well and its correct functioning.</div>
          <div class="call-to-action">Let's connect!</div>
        <a href="https://linktr.ee/ivanderlich"><img class="linktree" src={linktreeLink} alt="linktree link" /></a>
        </div>
      </div>
      <div class="skills">
        <div class="capabilities">
          <div>Languages</div>
        </div>
        <div class="capabilities">
          <div>Frameworks</div>
        </div>
        <div class="capabilities">
          <div>Skills</div>
        </div>
      </div>
    </div>
  );
}

export default About;