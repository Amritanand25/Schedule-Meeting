import React from 'react'
import SideNav from '../components/SideNav';
import ContactDetails from '../components/Contact/ContactDetails';

const Contact:React.FC = () => {
  return (
    <div className='flex justify-between bg-gray-light'>
        <ContactDetails />
        <SideNav />
    </div>
  )
}

export default Contact