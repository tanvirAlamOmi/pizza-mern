import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import Navbar from './components/global/NavbarComponent';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<MenuPage />} />
            <Route path="/cart" exact element={<CartPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
