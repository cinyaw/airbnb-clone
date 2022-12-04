import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
