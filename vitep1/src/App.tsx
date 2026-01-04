import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login';
import Registration from './pages/registration';
import Dashboard from './pages/dashboard';

import './App.css'

function App() { 

  return ( 
       <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
       </BrowserRouter>
  )
}

export default App
