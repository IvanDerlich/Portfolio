import './App.css';
import About from './Components/About'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App"> 
      <Header/>
      <Home/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

