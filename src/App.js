import './App.css';
import About from './components/About/About';
import Header from './components/Hedader/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
      </main>
    </div>
  );
}

export default App;
