import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';

function App() {
  return (
    <div className="flex m-12 h-auto drop-shadow-2xl justify-center">
      <Menu />
      <Home />
    </div>
  );
}

export default App;
