import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import CreateAppointment from './pages/CreateAppointment';
import AppointmentList from './pages/AppointmentList';

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointment' element={<Home />} />
        <Route path='/appointment/create-appointment' element={<CreateAppointment />} />
        <Route path='/appointment/contact' element={<Contact />} />
        <Route path='/view-list' element={<AppointmentList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
