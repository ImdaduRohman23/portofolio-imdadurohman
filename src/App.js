import './App.css';
import Header from './components/Hedader/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
      </main>
    </div>
  );
}

export default App;
