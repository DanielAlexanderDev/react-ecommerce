import React from 'react';
import '../styles/global.scss'
import Login from '../containers/Login' 
import Layout from '../containers/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />}/>
          <Route exact path='/recovery-password' element={<RecoveryPassword />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout> 
    </BrowserRouter>
  )
}

export { App }