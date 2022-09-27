import './App.css';
import About from './components/About/About';
import Header from './components/Hedader/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
