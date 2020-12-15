import './App.css';
import About from './Components/About'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

function newTabClick(e){
  let URL = ""
  if(e.target instanceof HTMLImageElement){ //children element is an image
    URL = e.target.parentElement.getAttribute("href")
  }else{
    URL = e.target.href
  }
  e.preventDefault();  
  window.open(URL, '_blank');
  //Here is the best place to make an API call to make statistics on clicks
}

function App() {
  return (
    <div className="App"> 
      <Header clickHandler={newTabClick}/>
      <Home clickHandler={newTabClick}/>
      <Projects clickHandler={newTabClick}/>
      <About clickHandler={newTabClick}/>
      <Contact />
      <Footer clickHandler={newTabClick}/>
    </div>
  );
}

export default App;

