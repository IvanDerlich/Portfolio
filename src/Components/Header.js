import React from 'react';
import './Header.css';


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.blueScreenOn = this.blueScreenOn.bind(this);
    this.blueScreenOff = this.blueScreenOff.bind(this);
    this.blueScreenClick = this.blueScreenClick.bind(this);
  }

  noScroll() {
    window.scrollTo(0, 0);
  }

  blueScreenOn() {
    document.querySelector('#hamburger').classList.add('hidden')
    document.querySelector('#home').classList.add('blur')
    document.querySelector('#about').classList.add('blur')
    document.querySelector('#contact').classList.add('blur')
    document.querySelector('#projects').classList.add('blur')
    document.querySelector('#header').classList.add('blur')
    document.querySelector('#blue-screen').classList.remove('hidden')
    window.addEventListener('scroll', this.noScroll);
    document.body.style.overflow = 'hidden';
  }

  blueScreenOff() {
    document.querySelector('#hamburger').classList.remove('hidden')
    document.querySelector('#home').classList.remove('blur')
    document.querySelector('#about').classList.remove('blur')
    document.querySelector('#contact').classList.remove('blur')
    document.querySelector('#projects').classList.remove('blur')
    document.querySelector('#header').classList.remove('blur')
    document.querySelector('#blue-screen').classList.add('hidden')
    window.removeEventListener('scroll', this.noScroll);
    document.body.style.overflow = 'visible';
  }

  blueScreenClick(location) {
    this.blueScreenOff();
    window.location.href = '#' + location;
  }


  render() {
    return (
      <div class="super-header">
        <div className="Header" id="header">
          <nav>
            <div onClick={() => this.blueScreenClick('home')} class="home-desktop-link">Home</div>            
            <div>
              <i onClick={this.blueScreenOn} id="hamburger" class="fas fa-bars hamburger"></i>              
              <div onClick={() => this.blueScreenClick('projects')} class="portfolio-desktop-link">Portfolio</div>
              <div onClick={() => this.blueScreenClick('about')} class="about-desktop-link">About</div>
            <div onClick={() => this.blueScreenClick('contact')} class="contact-desktop-link">Contact</div>
            </div>
          </nav>
        </div>
        <div class="blue-screen hidden" id="blue-screen">
          <i id="cross" onClick={this.blueScreenOff} class="fas fa-times cross"></i>
          <div class="blue-links">
            <div onClick={() => this.blueScreenClick('home')} class="blue-link">Home</div>
            <div onClick={() => this.blueScreenClick('projects')} class="blue-link">Portfolio</div>
            <div onClick={() => this.blueScreenClick('about')} class="blue-link">About</div>
            <div onClick={() => this.blueScreenClick('contact')} class="blue-link">Contact</div>
          </div>
        </div>
      </div>

    )
  }
}

export default Header;