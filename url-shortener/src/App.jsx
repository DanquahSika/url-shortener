import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Signpage from './pages/Signpage';
import Dashboard from './pages/Dashboard';
import { Links } from './pages/ShortenLinks'
import Landing from './pages/Landing';
import AllLinks from './pages/ViewAllLinks';
import Settings from './pages/Settings';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing /> } />
        <Route path='/sign' element={<Signpage /> } />
        <Route path='/create' element={<Links /> } />
        <Route path='/dashboard' element={<Dashboard /> } />
        <Route path='/settings' element={<Settings/> } />
        <Route path='/track' element={<AllLinks/> } />
        {/* <Route path='/sign' element={<SidebarMain /> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
