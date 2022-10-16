import './App.css';
import Header from './components/Header';
import Work from './components/Work';
import Stake from './components/Stake';
import Invest from './components/Invest';
import Accordian from './components/Accordian';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarTop from './components/Navbar';
// import Practice from './components/Accordian';



function App() {
  return (
    <>
      <Router>
        <NavbarTop />
        <Routes>
          <Route path='/' element={<Header/>} />
          <Route path='/features' element={<Work />} />
          <Route path='/stacking' element={<Stake />} />
          <Route path='/portfolio' element={<Invest />} />
          <Route path='/faqs' element={<Accordian />} />
          <Route path='/contact' element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
