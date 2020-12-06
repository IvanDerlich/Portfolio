import './Home.css';
import linktreeLink from '../media/images/linktree.jpeg'

function Home() {
  return (
    <div className="Home" id="home">       
      <div className="home-content">
        <div class="title" >Hi I'm Ivan</div>
        <div class="title" >Welcome to my website!</div>
        <div class="elevator-pitch">I'm a full-stack software developer. I can provide you with the software infrastructure to make your ideas become a reality.</div>
        <div class="elevator-pitch">As a full-stack software developer I focus both on the aesthetics of your system, as well and its correct functioning.</div>
        <div class="call-to-action">Let's connect!</div>
        <a href="https://linktr.ee/ivanderlich"><img class="linktree" src={linktreeLink} alt="linktree link" /></a>
      </div>
    </div>
  );
}

export default Home;