import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header.js';
import Shop from './components/Header/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Shop></Shop>}></Route>
       <Route path='/shop' element={<Shop></Shop>}></Route>
       <Route path='/orders' element={<Orders></Orders>}></Route>
       <Route path='/inventory' element={<Inventory></Inventory>}></Route>
       <Route path='/about' element={<About></About>}></Route>
     </Routes>
     {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
