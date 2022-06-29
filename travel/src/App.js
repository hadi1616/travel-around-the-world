import './App.css';
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Contactus from './components/Contactus/Contactus'
import NavBar from './components/NavBar/NavBar'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <Router>
      <NavBar/>
      
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/Contactus' element={<Contactus/>} />
          <Route path='/Blog' element={<Blog/>} />
          <Route path='*' element={<PageNotFound/>} />

        </Routes>
  </Router>
  );
}

export default App;
