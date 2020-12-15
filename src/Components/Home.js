import './Home.css';
import linktreeLink from '../media/images/linktree.jpeg'

function Home(props) {  
  const openNewTab = props.clickHandler;
  return (
    <div className="Home" id="home">
      <div className="home-content">
        <div class="title" >Hi I'm Ivan</div>
        <div class="title" >Welcome to my website!</div>
        <br>


        </br>
        <div class="elevator-pitch">I'm a full-stack software developer. I can provide you with the software infrastructure to make your ideas become a reality.</div>
        <div class="elevator-pitch">As a full-stack software developer, I focus both on the aesthetics of your system, as well as its correct functioning.</div>
        <div class="elevator-pitch">I've crafted this website for you to see some of my projects, the technologies I know, and a way to contact me.</div>
        <div class="call-to-action">Let's connect!</div>
        <a 
          class="linktree" 
          onClick={openNewTab}
          onMouseDown={openNewTab}
          href="https://linktr.ee/ivanderlich"
          >
          <img class="linktree" src={linktreeLink} alt="linktree link" />
        </a>
      </div>
    </div>
  );
}

export default Home;