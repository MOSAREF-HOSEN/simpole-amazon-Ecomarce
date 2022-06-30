import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Login from './components/Anthontication/Login/Login';
import SignUp from './components/Anthontication/Login/SignUp/SignUp';
import Header from './components/Header/Header.js';
import Banner from './components/Header/Shop/Banner';
import Shop from './components/Header/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Banner></Banner> */}
      <Routes>
       
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment></Shipment>
          </RequireAuth>
        }>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
