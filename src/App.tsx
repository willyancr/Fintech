import './App.css';
import Home from './components/Home';
import UserContextProvider from './components/UserContext';

function App() {
  return (
    <UserContextProvider>
      <div>
        <Home />
      </div>
    </UserContextProvider>
  );
}

export default App;
