import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './component/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route path='/' element={<Home></Home>}></Route> */}
      {/* <Route path='/Admin' element={<Admin></Admin>}></Route> */}
      <Route path='/' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
