import React from 'react'
import './About.css';
import linktreeLink from '../media/images/linktree.jpeg'
import javaScriptImage from '../media/images/skills/JavaScript.svg'
import HTMLImage from '../media/images/skills/HTML.svg'
import CSSImage from '../media/images/skills/CSS.svg'
import rubyImage from '../media/images/skills/Ruby.png'
import railsImage from '../media/images/skills/Rails.png'
import phaserImage from '../media/images/skills/Phaser.svg'
import reactImage from '../media/images/skills/React.png'
import TDDImage from '../media/images/skills/TDD.png'
import pairProgrammingImage from '../media/images/skills/PairProgramming.png'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.toggleContent = this.toggleContent.bind(this)
  }

  toggleContent(section) {
    
    switch (section) {      
      case "languages":
        const arrowRightLanguages = document.querySelector("#arrow-right-languages")
        const arrowDownLanguages = document.querySelector("#arrow-down-languages")
        const languagesContent = document.querySelector("#languages-content");
        if(arrowRightLanguages.classList.contains('hide')){
          arrowRightLanguages.classList.remove("hide")
          arrowDownLanguages.classList.add("hide")
          languagesContent.classList.add("hide")
        }else{
          arrowRightLanguages.classList.add("hide")
          arrowDownLanguages.classList.remove("hide")
          languagesContent.classList.remove("hide")
        }          
        break;
      case 'frameworks':
        const arrowRightFrameworks = document.querySelector("#arrow-right-frameworks")
        const arrowDownFrameworks = document.querySelector("#arrow-down-frameworks")
        const frameworkContent = document.querySelector("#frameworks-content");

        if(arrowRightFrameworks.classList.contains('hide')){
          arrowRightFrameworks.classList.remove("hide")
          arrowDownFrameworks.classList.add("hide")
          frameworkContent.classList.add("hide")
        }else{
          arrowRightFrameworks.classList.add("hide")
          arrowDownFrameworks.classList.remove("hide")
          frameworkContent.classList.remove("hide")
        }  
        break;
      case 'skills':
        const arrowRightSkills= document.querySelector("#arrow-right-skills")
        const arrowDownSkills= document.querySelector("#arrow-down-skills")
        const skillsContent = document.querySelector("#skills-content");
        
        if(arrowRightSkills.classList.contains('hide')){
          arrowRightSkills.classList.remove("hide")
          arrowDownSkills.classList.add("hide")
          skillsContent.classList.add("hide")
        }else{
          arrowRightSkills.classList.add("hide")
          arrowDownSkills.classList.remove("hide")
          skillsContent.classList.remove("hide")
        }
        break;
      default:
        console.log("Error")
    }
  }

  render() {
    return (
      <div className="About" id="about">
        <div class="myself">
          <div>
            <div class="title">About</div>
            <div class="title margin">Myself</div>
            <div class="elevator-pitch">I'm a full-stack software developer. I can provide you with the software infrastructure to make your ideas become a reality.</div>
            <div class="elevator-pitch">As a full-stack software developer, I focus both on the aesthetics of your system, as well as its correct functioning.</div>
            <div class="call-to-action">Let's connect! </div>
            <a
              onClick={this.props.clickHandler} 
              onMouseDown={this.props.clickHandler}
              href="https://linktr.ee/ivanderlich">
              <img class="linktree" src={linktreeLink} alt="linktree link" />
            </a>
          </div>
        </div>
        <div class="skills">
          <div class="capabilities-supra">
            <div onClick={()=> this.toggleContent("languages")} class="capabilities">
              <div>Languages</div>
              <i id="arrow-right-languages" class="fas fa-chevron-right"></i>
              <i id="arrow-down-languages" class="fas fa-chevron-down hide"></i>
            </div>
            <div id="languages-content" class="languages-content hide">
              <div class="skills-item">
                <img src={javaScriptImage} alt="JavaScript" class="skills-image"/>
                <div>JavaScript</div>
              </div>
              <div class="skills-item">
                <img src={HTMLImage} alt="HTML" class="skills-image"/>
                <div>HTML</div>
              </div>
              <div class="skills-item">
                <img src={CSSImage} alt="CSS" class="skills-image"/>
                <div>CSS</div>
              </div>            
              <div class="skills-item">
                <img src={rubyImage} alt="Ruby" class="skills-image"></img>
                <div>Ruby</div>
              </div>
            </div>
          </div>
          <div class="capabilities-supra">
            <div onClick={()=> this.toggleContent("frameworks")} class="capabilities">
              <div>Frameworks</div>
              <i id="arrow-right-frameworks" class="fas fa-chevron-right"></i>
              <i id="arrow-down-frameworks" class="fas fa-chevron-down hide"></i>
            </div>
            <div id="frameworks-content" class="frameworks-content hide">        
              <div class="skills-item">
                <img src={railsImage} alt="Rails" class="skills-image"></img>
                <div>Rails</div>
              </div>
              <div class="skills-item">
                <img src={reactImage} alt="React" class="skills-image"></img>
                <div>React</div>
              </div>
              <div class="skills-item">
                <img src={phaserImage} alt="Phaser" class="skills-image"></img>
                <div>Phaser</div>
              </div>                 
            </div>        
          </div>
          <div class="capabilities-supra">
            <div onClick={()=> this.toggleContent("skills")} class="capabilities">
              <div>Skills</div>
              <i id="arrow-right-skills" class="fas fa-chevron-right"></i>
              <i id="arrow-down-skills" class="fas fa-chevron-down hide"></i>
            </div>
            <div id="skills-content" class="skills-content hide">
              <div class="skills-item">
                <img src={TDDImage} alt="TDD" class="skills-image"></img>
                <div>Test Driven Development</div>
              </div>  
              <div class="skills-item">
                <img src={pairProgrammingImage} alt="Pair Programming" class="skills-image"></img>
                <div>Pair Programming</div>
              </div>                      
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;