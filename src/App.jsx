import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
