import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.component';
import Home from './pages/Home.page';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home></Home>
    </div>
  );
}

export default App;
