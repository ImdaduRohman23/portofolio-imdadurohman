import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Hedader/Header';
import Home from './components/Home/Home';
import Qualification from './components/Qualification/Qualification';


function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Qualification />
        <Contact />
      </main>
    </div>
  );
}

export default App;
