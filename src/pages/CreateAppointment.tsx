import React from 'react'
import Appointment from '../components/Appointment/Appointment'
import SideNav from '../components/SideNav'

const CreateAppointment:React.FC = () => {
  return (
    <div className='flex justify-between bg-gray-light'>
        <Appointment />
        <SideNav />
    </div>
  )
}

export default CreateAppointment