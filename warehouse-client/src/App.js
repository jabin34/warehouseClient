
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

function App() {
  return (
    <div >
      <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
        <Route  path="/home" element={<Home />} />
        <Route path="/manage" element={<RequiredAuth><ManageInventory/></RequiredAuth>} />
        <Route path="/myitem" element={<RequiredAuth><MyItem/></RequiredAuth>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
  );
}

export default App;
