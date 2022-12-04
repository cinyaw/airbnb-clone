import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/search' element={<SearchPage/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;