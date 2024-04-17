import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/register/Register';
import Signpage from './pages/Signpage';
import Dashboard from './pages/Dashboard';
import { Links } from './pages/ShortenLinks';
import Sidebar from './components/sidebar/Sidebar';
import Analytics from './pages/Analytics';






function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register /> } />
        <Route path='/sign' element={<Sidebar /> } />
        <Route path='/home' element={<Links /> } />
        <Route path='/analytics' element={<Analytics /> } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
