import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Account from './pages/Account';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<SignUp />} />
        <Route path='/auth' element={<SignIn />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
