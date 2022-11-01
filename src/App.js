import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Hedader/Header';
import Home from './components/Home/Home';
import Qualification from './components/Qualification/Qualification';
// import Services from './components/Services/Services';
// import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        {/* <Skills /> */}
        {/* <Services /> */}
        <Qualification />
        <Contact />
      </main>
    </div>
  );
}

export default App;
