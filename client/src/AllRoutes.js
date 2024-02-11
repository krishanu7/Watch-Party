import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Room from './components/Room/Room';
import Footer from './components/common/Footer';
import { Visible } from 'react-grid-system';

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100%', minWidth: '100%'}}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/room/:id" element={<Room />} />
        </Routes>
        <Visible xs>
          <div style={{ marginBottom: '60px' }}></div>
        </Visible>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default AllRoutes;

