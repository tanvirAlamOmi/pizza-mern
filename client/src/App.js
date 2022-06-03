import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import Navbar from './components/global/NavbarComponent';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import RegistrationPage from './pages/auth/RegistrationPage';
import LoginPage from './pages/auth/LoginPage';
import OrderCollectionPage from './pages/OrderCollectionPage';
import AdminPanelPage from './pages/admin/AdminPanelPage';
import CustomerListComponent from './components/admin/CustomerListComponent';
import ProductsListComponent from './components/admin/ProductsListComponent';
import AddProductComponent from './components/admin/AddProductComponent';
import OrderListComponent from './components/admin/OrderListComponent';
import EditProductComponent from './components/admin/EditProductComponent';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<MenuPage />} />
            <Route path="/registration" exact element={<RegistrationPage />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/cart" exact element={<CartPage />} />
            <Route path="/orders" exact element={<OrderCollectionPage />} />


            <Route path="/admin" element={<OrderListComponent />} />
            <Route path="/admin/customers" element={<CustomerListComponent />} exact />
            <Route path="/admin/products" element={<ProductsListComponent />} exact />
            <Route path="/admin/addProducts" element={<AddProductComponent />} exact />
            <Route path="/admin/editProduct/:productId" element={<EditProductComponent />} exact />
            <Route path="/admin/orders" element={<OrderListComponent />} exact />

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
