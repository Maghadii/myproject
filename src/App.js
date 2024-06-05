import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import SingleProduct from './components/SingleProduct';
import FilterProduct from './components/FilterProduct';
import TodoList from './components/TodoList';
import Login from './components/Login';
import Logout from './components/Logout';
import Slider from './components/Slider';





function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
          <Route path='/single/:productId' element={<SingleProduct />} />
          <Route path='/filter' element={<FilterProduct />} />
          <Route path='/todolist' element={<TodoList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/slider' element={<Slider />} />          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;