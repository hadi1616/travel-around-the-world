import './App.css';
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <Router>

      {/* <NavBar/> still not build*/}
      <Routes>
      <Route path='/' element={<Home/>} />

      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  </Router>
  );
}

export default App;
