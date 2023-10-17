
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Wishlist from './Pages/Wishlist';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header/>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/wishlist" element={<Wishlist />}/>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
