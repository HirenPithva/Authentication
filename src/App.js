import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './component/Login';
import TokenProvider from './parentComponent/TokenProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from './routerComponent/Router';

function App() {
  return (
    <RouterProvider router={router}/>    
  );
}

export default App;
