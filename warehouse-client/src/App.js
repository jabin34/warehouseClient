
import './App.css';
import {Routes,Route,} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import MyItem from './components/MyItem/MyItem';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import ManageInventory from './components/ManageInventory/ManageInventory';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
        <Route  path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/manage" element={<ManageInventory/>} />
        <Route path="/myitem" element={<MyItem/>} />
        <Route path="/blogs" element={<Blogs/>} />
    </Routes>
    </div>
  );
}

export default App;
