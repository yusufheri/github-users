import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Logo from './components/Logo';
import './index.css'
import UserInfo from './routes/UserInfo';
import Users from './routes/Users';

function App() {


  return (
    <div className="min-h-screen bg-black">
      <div className="container text-gray-200 py-2">
        <Logo/>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/:name' element={<UserInfo/>}></Route>
        </Routes>
      </div>
      <div className=' w-full py-3 '>
        <h1 className='text-center text-teal-500 text-center'>Copyrigth &copy;YUSUF HERI</h1>
      </div>
    </div>
  );
}

export default App
