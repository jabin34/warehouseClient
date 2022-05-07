
import './App.css';
import {Routes,Route,} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import MyItem from './components/MyItem/MyItem';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemDetails from './components/ItemDetails/ItemDetails';
import AddItem from './components/AddItem/AddItem';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='position-relative '>
      <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
        <Route  path="/home" element={<Home />} />
        <Route path="/manage" element={<RequiredAuth><ManageInventory/></RequiredAuth>} />
        <Route path="/myitem" element={<RequiredAuth><MyItem/></RequiredAuth>} />
        <Route path="/inventory/:id" element={<RequiredAuth><ItemDetails/></RequiredAuth>} />
        <Route path="/additem" element={<RequiredAuth><AddItem/></RequiredAuth>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    <ToastContainer/>
    <Footer/>
    </div>
  );
}

export default App;
