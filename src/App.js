
import './App.css';
import Navbar from './components/navbar'; //when we import JS file, don't include extension
import Footer from './components/footer';
import Catalog from './components/catalog';
import Home from './components/home';
import About from './components/about';
import Cart from './components/cart';
import Admin from './components/admin';
import Todo from './components/ToDoList';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStoreProvider from './context/globalStoreProvider';


//components can be open and closed like <Footer /> instead of doing two tags.

function App() {
  return (
    <div className="App">
      <GlobalStoreProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element ={<About />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path ='/cart' element={<Cart />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </GlobalStoreProvider>
    </div>
  );
}

export default App;


//npm i react-router-dom